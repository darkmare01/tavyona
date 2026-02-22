"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  return (
    <section className="relative min-h-screen px-6 py-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Contact Tavyona
          </h1>

          <p className="text-white/70 mb-10 max-w-md">
            Have a project in mind? Whether it’s Artistry, Events, or Robotics —
            let’s build something meaningful together.
          </p>

          <div className="space-y-6 text-white/80">
            <div>
              <p className="text-sm uppercase tracking-wider text-white/50">
                Email
              </p>
              <p className="text-lg">contact@tavyona.com</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-white/50">
                Phone
              </p>
              <p className="text-lg">+91 9XXXXXXXXX</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-white/50">
                Location
              </p>
              <p className="text-lg">India</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            setTimeout(() => setLoading(false), 1200);
          }}
          className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8"
        >
          <h2 className="text-2xl font-medium mb-6">
            Send us a message
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              required
              placeholder="Your Name"
              className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white outline-none focus:border-white/30 transition"
            />
            <input
              required
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white outline-none focus:border-white/30 transition"
            />
          </div>

          <input
            required
            placeholder="Subject"
            className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white outline-none focus:border-white/30 transition mb-4"
          />

          <textarea
            required
            placeholder="Tell us about your project..."
            rows={5}
            className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white outline-none focus:border-white/30 transition mb-6 resize-none"
          />

          <button
            disabled={loading}
            className="group relative inline-flex items-center justify-center rounded-full px-8 py-3 border border-white/20 overflow-hidden transition-all duration-300 hover:border-transparent w-full"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-400 translate-x-[-110%] group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative z-10 text-white font-medium tracking-wide">
              {loading ? "Sending..." : "Send Message"}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
