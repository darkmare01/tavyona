import "./globals.css";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer"; // 👈 import footer
import { CartProvider } from "@/components/cart/CartProvider";
import { AuthProvider } from "@/components/auth/AuthProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CartProvider>
            <Header />
            {children}
            <Footer /> {/* 👈 render footer globally */}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}