"use client";

export default function HomeWhy() {
  return (
    <section className="relative mx-auto max-w-[1200px] px-6 py-24">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
          Why Tavyona?
        </h2>
        <p className="mt-2 text-white/60">
          More than a brand — a craft of precision, creativity, and technology.
        </p>
      </div>

      {/* Points */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {[
          {
            title: "Crafted by Hands",
            desc: "Every piece of artistry is thoughtfully handcrafted with attention to detail.",
          },
          {
            title: "Powered by Technology",
            desc: "Advanced drones, RC builds, and aerial systems engineered with precision.",
          },
          {
            title: "One Brand, Three Worlds",
            desc: "Artistry, Events, and Robotics united under one cohesive identity.",
          },
          {
            title: "Built to Inspire",
            desc: "We design experiences and products that leave a lasting impression.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20"
          >
            <h3 className="text-sm font-medium tracking-wide">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-white/60">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
