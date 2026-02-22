import Link from "next/link";

const items = [
  {
    title: "Artistry",
    desc: "Handcrafted decor, sculptures & gifts.",
    href: "/artistry",
    img: "/showcase/artistry.jpg", // put image in public/showcase/artistry.jpg
  },
  {
    title: "Events",
    desc: "Drone filming, FPV shots & event coverage.",
    href: "/events",
    img: "/showcase/events.jpg", // public/showcase/events.jpg
  },
  {
    title: "Robotics",
    desc: "Drones, RC planes, parts, sensors & builds.",
    href: "/Robotics",
    img: "/showcase/Robotics.jpg", // public/showcase/Robotics.jpg
  },
];

export default function HomeShowcase() {
  return (
    <section className="relative w-full py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-wide mb-4">
            Our Craft
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A glimpse into what we build across Artistry, Events, and Robotics.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-white/30 hover:-translate-y-1"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                style={{ backgroundImage: `url(${item.img})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative z-10 p-6 h-64 flex flex-col justify-end">
                <h3 className="text-xl font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm mb-3">
                  {item.desc}
                </p>
                <span className="text-sm text-white/80 group-hover:text-white transition">
                  Explore →
                </span>
              </div>

              {/* Hover Glow Border */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-orange-400/40 transition-all duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
