import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold tracking-wide mb-3">
            Tavyona
          </h3>
          <p className="text-white/60 text-sm">
            One brand. Three worlds — Artistry, Events & Robotics.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-white/70 mb-4">
            Explore
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-white/60 hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Robotics" className="text-white/60 hover:text-white transition">
                Robotics
              </Link>
            </li>
            <li>
              <Link href="/artistry" className="text-white/60 hover:text-white transition">
                Artistry
              </Link>
            </li>
            <li>
              <Link href="/events" className="text-white/60 hover:text-white transition">
                Events
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white/60 hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-white/70 mb-4">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>contact@tavyona.com</li>
            <li>+91 9XXXXXXXXX</li>
            <li>India</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-white/70 mb-4">
            Follow
          </h4>
          <div className="flex gap-3">
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition"
              aria-label="Instagram"
            >
              IG
            </a>
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition"
              aria-label="YouTube"
            >
              YT
            </a>
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition"
              aria-label="LinkedIn"
            >
              IN
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Tavyona. All rights reserved.
      </div>
    </footer>
  );
}
