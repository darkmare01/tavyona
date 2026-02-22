"use client";

export default function HomeAbout() {
  return (
    <section className="relative mx-auto max-w-[1200px] px-6 py-24">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
        {/* Copy */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
            What is Tavyona?
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Tavyona is a multi-vertical brand bringing together handcrafted artistry,
            immersive event experiences, and advanced aerial technology under one identity.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed">
            We build, create, and capture — blending precision engineering with creative
            craftsmanship to deliver experiences and products that feel intentional,
            refined, and powerful.
          </p>
        </div>

        {/* Subtle Visual Block */}
        <div className="relative h-[220px] rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-md" />
      </div>
    </section>
  );
}
