import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="relative w-full py-28 px-6">
      {/* Soft background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-wide mb-4">
          Let’s Build Something Together
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto mb-10">
          Whether it’s Artistry, Events, or Robotics — we’re ready to bring your
          vision to life with precision and creativity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center rounded-full px-8 py-3 border border-white/20 overflow-hidden transition-all duration-300 hover:border-transparent"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-400 translate-x-[-110%] group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative z-10 text-white font-medium tracking-wide">
              Contact Us
            </span>
          </Link>

          <Link
            href="/Robotics"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all duration-300"
          >
            Explore Robotics
          </Link>
        </div>
      </div>
    </section>
  );
}
