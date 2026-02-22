"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { saveOrder, getOrder } from "@/lib/orders";

export default function TestSupabase() {
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const testConnection = async () => {
    setLoading(true);
    setStatus("Testing connection...");
    try {
      const { data, error } = await supabase.from("orders").select("*").limit(1);
      if (error) throw error;
      setStatus("✅ Connection successful! Database is accessible.");
    } catch (error: any) {
      setStatus(`❌ Connection failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const testSaveOrder = async () => {
    setLoading(true);
    setStatus("Saving test order...");
    try {
      const orderId = await saveOrder({
        customerName: "Test Customer",
        customerEmail: "test@example.com",
        paymentProvider: "razorpay",
        paymentProviderChargeId: "test_pay_12345",
        items: [
          {
            productId: "test-1",
            name: "Test Product",
            quantity: 1,
            price: 100,
          },
        ],
        totalAmount: 100,
        currency: "INR",
        status: "paid",
      });
      setStatus(`✅ Order saved successfully! Order ID: ${orderId}`);
    } catch (error: any) {
      setStatus(`❌ Failed to save order: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Supabase Connection Test</h1>

        <div className="space-y-4">
          <button
            onClick={testConnection}
            disabled={loading}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            Test Database Connection
          </button>

          <button
            onClick={testSaveOrder}
            disabled={loading}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 ml-4"
          >
            Test Save Order
          </button>
        </div>

        {status && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <p className="font-mono text-sm">{status}</p>
          </div>
        )}

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h2 className="font-bold mb-2">What's Set Up:</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>✅ Supabase client configured</li>
            <li>✅ Orders table created</li>
            <li>✅ Environment variables set</li>
            <li>✅ Order helper functions ready</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
