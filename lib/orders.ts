import { supabase } from "./supabase";

export type OrderStatus = "pending" | "paid" | "failed";

export interface OrderData {
  userId?: string;
  customerName: string;
  customerEmail: string;
  // Never store full card number or CVV, only safe metadata from payment provider
  cardBrand?: string;
  cardLast4?: string;
  paymentProvider: "stripe" | "razorpay" | "other";
  paymentProviderChargeId: string;
  items: Array<{
    productId: string;
    name: string;
    quantity: number;
    price: number;
  }>;
  totalAmount: number;
  currency: string;
  status: OrderStatus;
}

export interface Order extends OrderData {
  id: string;
  createdAt: string;
}

/**
 * Save an order to Supabase database
 */
export async function saveOrder(order: OrderData): Promise<string> {
  const { data, error } = await supabase
    .from("orders")
    .insert({
      user_id: order.userId || null,
      customer_name: order.customerName,
      customer_email: order.customerEmail,
      card_brand: order.cardBrand || null,
      card_last4: order.cardLast4 || null,
      payment_provider: order.paymentProvider,
      payment_provider_charge_id: order.paymentProviderChargeId,
      items: order.items,
      total_amount: order.totalAmount,
      currency: order.currency,
      status: order.status,
    })
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to save order: ${error.message}`);
  }

  return data.id;
}

/**
 * Get an order by ID
 */
export async function getOrder(orderId: string): Promise<Order | null> {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("id", orderId)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      // No rows returned
      return null;
    }
    throw new Error(`Failed to get order: ${error.message}`);
  }

  // Convert snake_case from database to camelCase for TypeScript
  return {
    id: data.id,
    userId: data.user_id,
    customerName: data.customer_name,
    customerEmail: data.customer_email,
    cardBrand: data.card_brand,
    cardLast4: data.card_last4,
    paymentProvider: data.payment_provider,
    paymentProviderChargeId: data.payment_provider_charge_id,
    items: data.items,
    totalAmount: parseFloat(data.total_amount),
    currency: data.currency,
    status: data.status,
    createdAt: data.created_at,
  } as Order;
}

/**
 * Get all orders for a user
 */
export async function getUserOrders(userId: string): Promise<Order[]> {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Failed to get user orders: ${error.message}`);
  }

  // Convert snake_case from database to camelCase for TypeScript
  return (data || []).map((item) => ({
    id: item.id,
    userId: item.user_id,
    customerName: item.customer_name,
    customerEmail: item.customer_email,
    cardBrand: item.card_brand,
    cardLast4: item.card_last4,
    paymentProvider: item.payment_provider,
    paymentProviderChargeId: item.payment_provider_charge_id,
    items: item.items,
    totalAmount: parseFloat(item.total_amount),
    currency: item.currency,
    status: item.status,
    createdAt: item.created_at,
  })) as Order[];
}
