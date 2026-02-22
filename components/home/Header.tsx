"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import { useCart } from "@/components/cart/CartProvider";

const NAV = [
  { name: "Home", href: "/" },
  {
    name: "Robotics",
    href: "/Robotics",
    dropdown: [
      { name: "Drones", href: "/Robotics/drones" },
      { name: "RC Planes", href: "/Robotics/rc-planes" },
    ],
  },
  { name: "Artistry", href: "/artistry" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { user, loading, signOut } = useAuth();
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/90 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-[100px] max-w-[1400px] items-center justify-between px-[5%]">
        {/* Logo */}
        <Link href="/" className="relative flex items-center">
          <Image
            src="/logo2.png"
            alt="Tavyona"
            width={120}
            height={40}
            className="h-[40px] w-auto transition-transform duration-300 hover:scale-110"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 uppercase tracking-[1.5px] text-sm">
          {NAV.map((item) => {
            const active = pathname === item.href;

            return (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative block transition-colors duration-300 ${
                    active ? "text-white" : "text-white/70 hover:text-[#e6c200]"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-2 left-0 h-[1px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#cc0000] to-[#e6c200] transition-transform duration-300 group-hover:scale-x-100 ${
                      active ? "scale-x-100" : ""
                    }`}
                  />
                </Link>

                {item.dropdown && (
                  <div
                    className={`absolute left-0 top-full mt-4 min-w-[200px] rounded-xl border border-white/10 bg-black/90 p-2 backdrop-blur transition-all duration-300 ${
                      openDropdown === item.name
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                    }`}
                  >
                    {item.dropdown.map((d) => (
                      <Link
                        key={d.name}
                        href={d.href}
                        className="block rounded-lg px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-[#e6c200]"
                      >
                        {d.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <Link
            href="/cart"
            className="relative hidden md:flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <span>🛒</span>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#e6c200] text-xs font-bold text-black">
                {count}
              </span>
            )}
          </Link>

          {/* Auth */}
          {!loading && (
            <>
              {user ? (
                <div className="hidden md:flex items-center gap-3">
                  <span className="text-sm text-white/70">
                    {user.user_metadata?.full_name || user.email?.split("@")[0]}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white transition hover:border-white/40"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="hidden md:flex items-center gap-3">
                  <Link
                    href="/auth/login"
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="rounded-lg bg-[#e6c200] px-4 py-2 text-sm font-medium text-black transition hover:brightness-105"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </>
          )}

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="relative md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute block h-[2px] w-5 bg-white transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute block h-[2px] w-5 bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block h-[2px] w-5 bg-white transition-all duration-300 ${
                mobileOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          mobileOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-[5%] pb-6">
          <div className="flex flex-col items-center gap-4 pt-4 text-center">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <div key={item.name} className="w-full">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-2 uppercase tracking-[1.5px] transition-colors ${
                      active ? "text-white" : "text-white/80 hover:text-[#e6c200]"
                    }`}
                  >
                    {item.name}
                  </Link>

                  {item.dropdown && (
                    <div
                      className={`mt-2 flex flex-col items-center gap-1 border-t border-white/10 pt-2 transition-[max-height,opacity] duration-300 ${
                        mobileOpen
                          ? "max-h-[200px] opacity-100"
                          : "max-h-0 opacity-0"
                      } overflow-hidden`}
                    >
                      {item.dropdown.map((d) => (
                        <Link
                          key={d.name}
                          href={d.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-1 text-sm text-white/70 hover:text-[#e6c200]"
                        >
                          {d.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <Link
              href="/cart"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 py-2 text-white/80 hover:text-[#e6c200]"
            >
              🛒 Cart {count > 0 && `(${count})`}
            </Link>

            <div className="mt-4 pt-4 border-t border-white/10 w-full">
              {!loading && (
                <>
                  {user ? (
                    <div className="flex flex-col items-center gap-3">
                      <span className="text-sm text-white/70">
                        {user.user_metadata?.full_name ||
                          user.email?.split("@")[0]}
                      </span>
                      <button
                        onClick={() => {
                          handleSignOut();
                          setMobileOpen(false);
                        }}
                        className="rounded-lg border border-white/20 px-6 py-2 text-sm text-white transition hover:border-white/40"
                      >
                        Sign Out
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-3">
                      <Link
                        href="/auth/login"
                        onClick={() => setMobileOpen(false)}
                        className="text-sm text-white/70 hover:text-white transition"
                      >
                        Sign In
                      </Link>
                      <Link
                        href="/auth/signup"
                        onClick={() => setMobileOpen(false)}
                        className="rounded-lg bg-[#e6c200] px-6 py-2 text-sm font-medium text-black transition hover:brightness-105"
                      >
                        Sign Up
                      </Link>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}