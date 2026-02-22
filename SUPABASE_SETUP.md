# Supabase Setup Guide

## Step 1: Get Your Supabase Credentials

1. Go to your Supabase project dashboard: https://app.supabase.com
2. Select your project
3. Go to **Settings** → **API**
4. Copy these two values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (long string starting with `eyJ...`)

## Step 2: Create Environment Variables File

1. In your project root (`tavyona` folder), create a file named `.env.local`
2. Copy the contents from `.env.local.example`
3. Replace the placeholder values with your actual Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key-here
```

## Step 3: Create Database Tables

Go to your Supabase dashboard → **SQL Editor** and run this SQL to create the `orders` table:

```sql
-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  card_brand TEXT,
  card_last4 TEXT,
  payment_provider TEXT NOT NULL,
  payment_provider_charge_id TEXT NOT NULL,
  items JSONB NOT NULL,
  total_amount DECIMAL(10, 2) NOT NULL,
  currency TEXT NOT NULL DEFAULT 'INR',
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Create policy: Users can read their own orders
CREATE POLICY "Users can view their own orders"
  ON orders FOR SELECT
  USING (auth.uid() = user_id);

-- Create policy: Allow inserts (for order creation)
CREATE POLICY "Allow order creation"
  ON orders FOR INSERT
  WITH CHECK (true);
```

## Step 4: Test the Connection

Create a test file or use in your components:

```tsx
"use client";

import { supabase } from "@/lib/supabase";
import { useEffect } from "react";

export default function TestConnection() {
  useEffect(() => {
    async function test() {
      const { data, error } = await supabase.from("orders").select("*").limit(1);
      if (error) {
        console.error("Supabase connection error:", error);
      } else {
        console.log("✅ Supabase connected successfully!", data);
      }
    }
    test();
  }, []);

  return <div>Check console for connection status</div>;
}
```

## Step 5: Use Supabase in Your App

### In Client Components:
```tsx
"use client";
import { supabase } from "@/lib/supabase";
```

### In Server Components / API Routes:
```tsx
import { createServerClient } from "@/lib/supabase";
const supabase = createServerClient();
```

### Save an Order:
```tsx
import { saveOrder } from "@/lib/orders";

const orderData = {
  customerName: "John Doe",
  customerEmail: "john@example.com",
  paymentProvider: "razorpay",
  paymentProviderChargeId: "pay_xxxxx",
  items: [
    { productId: "1", name: "Product 1", quantity: 2, price: 100 }
  ],
  totalAmount: 200,
  currency: "INR",
  status: "paid"
};

const orderId = await saveOrder(orderData);
```

## Troubleshooting

- **"Missing Supabase environment variables"**: Make sure `.env.local` exists and has correct values
- **"Failed to save order"**: Check if the `orders` table exists in your Supabase database
- **Connection errors**: Verify your Project URL and Anon Key are correct
