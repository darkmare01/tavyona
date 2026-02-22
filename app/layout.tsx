import "./globals.css";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import { CartProvider } from "@/components/cart/CartProvider";
import { AuthProvider } from "@/components/auth/AuthProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: "black", color: "white" }}>
        <AuthProvider>
          <CartProvider>
            <Header />

            {/* ✅ Content wrapper: pushes content below fixed header */}
            <div
              style={{
                paddingTop: 110, // adjust to your header height (try 90–120)
                minHeight: "calc(100vh - 110px)",
              }}
            >
              {children}
            </div>

            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}