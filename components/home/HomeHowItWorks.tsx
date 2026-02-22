"use client";

export default function HomeHowItWorks() {
  return (
    <section className="relative mx-auto max-w-[1200px] px-6 py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
            How It Works
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <div className="text-xs tracking-[0.25em] text-white/50">
                STEP 01
              </div>
              <h3 className="mt-1 text-base font-medium">Explore</h3>
              <p className="mt-1 text-sm text-white/60">
                Browse our businesses and find what fits your vision — Artistry, Events, or Robotics.
              </p>
            </div>

            <div>
              <div className="text-xs tracking-[0.25em] text-white/50">
                STEP 02
              </div>
              <h3 className="mt-1 text-base font-medium">Connect</h3>
              <p className="mt-1 text-sm text-white/60">
                Share your requirement or idea. We’ll guide you with clarity and options.
              </p>
            </div>

            <div>
              <div className="text-xs tracking-[0.25em] text-white/50">
                STEP 03
              </div>
              <h3 className="mt-1 text-base font-medium">Build & Deliver</h3>
              <p className="mt-1 text-sm text-white/60">
                We create, build, or capture — then deliver with precision and care.
              </p>
            </div>
          </div>
        </div>

        {/* Right Visual Grid with Premium Hover */}
        <div className="grid grid-cols-2 gap-4">
          
          <div className="group relative h-40 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,180,0,0.12)]" />

          <div className="group relative h-40 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,180,0,0.12)]" />

          <div className="group relative col-span-2 h-44 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,180,0,0.12)]" />

        </div>

      </div>
    </section>
  );
}
