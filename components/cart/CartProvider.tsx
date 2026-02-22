"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  total: number;
  addItem: (item: Omit<CartItem, "quantity">, qty?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clear: () => void;
  // Legacy support
  add: (qty?: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "tavyona_cart_v2";

/* -----------------------------
   Storage helpers
------------------------------ */

function getStoredItems(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function setStoredItems(items: CartItem[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    // notify listeners (same-tab)
    window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY }));
  } catch {
    // ignore write errors (quota, private mode)
  }
}

/* -----------------------------
   External store (React 18)
------------------------------ */

let listeners: Array<() => void> = [];
let cachedItems: CartItem[] | null = null;

function subscribe(callback: () => void) {
  listeners.push(callback);

  // Optional: sync across tabs
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      cachedItems = getStoredItems();
      callback();
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("storage", onStorage);
  }

  return () => {
    listeners = listeners.filter((l) => l !== callback);
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", onStorage);
    }
  };
}

function getSnapshot(): CartItem[] {
  if (cachedItems === null) {
    cachedItems = getStoredItems();
  }
  return cachedItems;
}

// IMPORTANT: must be stable for React 18 + Next App Router
const SERVER_SNAPSHOT: CartItem[] = [];
function getServerSnapshot(): CartItem[] {
  return SERVER_SNAPSHOT;
}

function updateItems(next: CartItem[]) {
  cachedItems = next;
  setStoredItems(next);
  listeners.forEach((l) => l());
}

/* -----------------------------
   Provider
------------------------------ */

export function CartProvider({ children }: { children: React.ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const addItem = useCallback((item: Omit<CartItem, "quantity">, qty = 1) => {
    const current = getSnapshot();
    const existing = current.find((i) => i.id === item.id);

    if (existing) {
      updateItems(
        current.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + qty } : i
        )
      );
    } else {
      updateItems([...current, { ...item, quantity: qty }]);
    }
  }, []);

  const removeItem = useCallback((id: string) => {
    updateItems(getSnapshot().filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, qty: number) => {
    if (qty <= 0) {
      updateItems(getSnapshot().filter((i) => i.id !== id));
    } else {
      updateItems(
        getSnapshot().map((i) => (i.id === id ? { ...i, quantity: qty } : i))
      );
    }
  }, []);

  const clear = useCallback(() => {
    updateItems([]);
  }, []);

  const add = useCallback(() => {
    console.warn("Legacy add() called. Use addItem(item, qty) instead.");
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    return {
      items,
      count,
      total,
      addItem,
      removeItem,
      updateQuantity,
      clear,
      add,
    };
  }, [items, addItem, removeItem, updateQuantity, clear, add]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/* -----------------------------
   Hook
------------------------------ */

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within <CartProvider>");
  }
  return ctx;
}