"use client";

import Link from "next/link";

const businesses = [
  {
    tag: "ARTISTRY",
    title: "Tavyona Artistry",
    desc: "Handcrafted decor, sculptures & gifts.",
    href: "/artistry",
  },
  {
    tag: "EVENTS",
    title: "Tavyona Events",
    desc: "Drone filming, FPV shots & event coverage.",
    href: "/events",
  },
  {
    tag: "Robotics",
    title: "Tavyona Robotics",
    desc: "Drones, RC planes, parts, sensors & builds.",
    href: "/Robotics",
  },
];

export default function OurBusinesses() {
  return (
    <section className="relative mx-auto max-w-[1200px] px-6 py-24">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
          Our Businesses
        </h2>
        <p className="mt-2 text-white/60">
          One brand. Three specialized worlds.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {businesses.map((b) => (
          <Link
            key={b.title}
            href={b.href}
            className="group relative rounded-2xl p-[1px] transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Gradient border layer (behind) */}
            <span className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-[#cc0000] to-[#e6c200] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Card body masks the gradient */}
            <div className="relative z-10 rounded-2xl bg-black/80 p-8 backdrop-blur-md ring-1 ring-white/10 transition-all duration-300 group-hover:ring-transparent group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              {/* Tag */}
              <div className="text-[11px] tracking-[0.2em] text-white/50">
                {b.tag}
              </div>

              {/* Title */}
              <h3 className="mt-3 text-lg font-medium tracking-wide text-white">
                {b.title}
              </h3>

              {/* Desc */}
              <p className="mt-2 text-sm text-white/60">
                {b.desc}
              </p>

              {/* CTA */}
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/70 transition-colors duration-300 group-hover:text-[#e6c200]">
                <span>Explore</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
