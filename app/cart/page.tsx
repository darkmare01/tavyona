"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { useAuth } from "@/components/auth/AuthProvider";
import { saveOrder } from "@/lib/orders";

function formatINR(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

export default function CartPage() {
  const { items, count, total, removeItem, updateQuantity, clear } = useCart();
  const { user } = useAuth();
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutStatus, setCheckoutStatus] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  // Auto-fill user info if logged in
  useEffect(() => {
    if (user) {
      setCustomerEmail(user.email || "");
      setCustomerName(user.user_metadata?.full_name || "");
    }
  }, [user]);

  const handleCheckout = async () => {
    if (!customerName || !customerEmail) {
      setCheckoutStatus("Please fill in your name and email");
      return;
    }

    setCheckoutLoading(true);
    setCheckoutStatus(null);

    try {
      const orderId = await saveOrder({
        userId: user?.id, // Link order to user if logged in
        customerName,
        customerEmail,
        paymentProvider: "other",
        paymentProviderChargeId: `order_${Date.now()}`,
        items: items.map((item) => ({
          productId: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
        totalAmount: total,
        currency: "INR",
        status: "pending",
      });

      setCheckoutStatus(`✅ Order placed successfully! Order ID: ${orderId}`);
      clear();
      setShowCheckoutForm(false);
    } catch (error: any) {
      setCheckoutStatus(`❌ Failed to place order: ${error.message}`);
    } finally {
      setCheckoutLoading(false);
    }
  };

  return (
    <main className="min-h-screen px-6 pt-[120px] pb-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-semibold">Your Cart</h1>
        <p className="mt-3 text-white/70">
          {count} {count === 1 ? "item" : "items"} in cart
        </p>

        {items.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <p className="text-white/70 text-lg">Your cart is empty</p>
            <Link
              href="/artistry"
              className="mt-4 inline-block rounded-xl bg-[#e6c200] px-6 py-3 text-sm font-medium text-black transition hover:brightness-105"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="mt-10 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-medium text-white">{item.name}</h3>
                      <p className="text-sm text-white/60">
                        {formatINR(item.price)} each
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8 rounded-full border border-white/20 text-white hover:border-white/40"
                      >
                        -
                      </button>
                      <span className="text-white">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 rounded-full border border-white/20 text-white hover:border-white/40"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-4 text-sm text-red-400 hover:text-red-300"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-white">
                      {formatINR(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Total */}
            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex justify-between text-lg">
                <span className="text-white/70">Total</span>
                <span className="text-2xl font-bold text-white">
                  {formatINR(total)}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={clear}
                  className="rounded-xl border border-white/15 bg-black/40 px-5 py-2.5 text-sm text-white transition hover:border-white/25"
                >
                  Clear cart
                </button>
                <Link
                  href="/artistry"
                  className="rounded-xl border border-white/15 bg-black/40 px-5 py-2.5 text-sm text-white transition hover:border-white/25"
                >
                  Continue shopping
                </Link>
                <button
                  onClick={() => setShowCheckoutForm(true)}
                  className="rounded-xl bg-[#e6c200] px-6 py-2.5 text-sm font-medium text-black transition hover:brightness-105"
                >
                  Checkout
                </button>
              </div>
            </div>

            {/* Checkout Form */}
            {showCheckoutForm && (
              <div className="mt-8 rounded-xl border border-[#e6c200]/30 bg-[#e6c200]/5 p-6">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Complete Your Order
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-white/70 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full rounded-lg border border-white/20 bg-black/40 px-4 py-2 text-white placeholder:text-white/40"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full rounded-lg border border-white/20 bg-black/40 px-4 py-2 text-white placeholder:text-white/40"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={handleCheckout}
                      disabled={checkoutLoading}
                      className="rounded-xl bg-[#e6c200] px-6 py-2.5 text-sm font-medium text-black transition hover:brightness-105 disabled:opacity-50"
                    >
                      {checkoutLoading ? "Processing..." : "Place Order"}
                    </button>
                    <button
                      onClick={() => setShowCheckoutForm(false)}
                      className="rounded-xl border border-white/15 px-6 py-2.5 text-sm text-white transition hover:border-white/25"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* Status Message */}
        {checkoutStatus && (
          <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="font-mono text-sm">{checkoutStatus}</p>
          </div>
        )}
      </div>
    </main>
  );
}

