"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const imageUrl = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80";

const values = [
  { label: "Timeless Comfort", detail: "Elegant spaces that feel warm, calm, and effortlessly livable." },
  { label: "Thoughtful Detail", detail: "Every layout, material, and finish is chosen for beauty and balance." },
  { label: "Secure Living", detail: "Quality installations designed for safety, serenity, and peace of mind." },
  { label: "Personalized Service", detail: "Design support that listens first and builds around your lifestyle." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function DetailsPage() {
  return (
    <section className="relative overflow-hidden bg-[#060606] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-60 bg-[radial-gradient(circle_at_top,_rgba(255,159,0,0.14),transparent_42%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center"
        >
          <motion.div variants={fadeUp} className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
              <img
                src={imageUrl}
                alt="Luxury living room interior"
                className="h-[340px] w-full object-cover sm:h-[420px] md:h-[520px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />

              <div className="absolute left-5 right-5 bottom-5 rounded-[1.8rem] border border-white/10 bg-black/50 p-6 backdrop-blur-xl">
                <span className="inline-flex rounded-full bg-orange-500/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-orange-200">
                  Interior sanctuary
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                  Luxury living made effortless.
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
                  Warm textures, layered lighting, and refined details combine to create a space you love coming home to.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="order-1 lg:order-2 space-y-10">
            <div className="space-y-5">
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-orange-200">
                Who We Are
              </span>

              <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                At Comforta Living, true beauty lies in comfort.
              </h2>

              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Our passion is transforming everyday homes into timeless sanctuaries that reflect your style and soothe your spirit. From concept to completion, our designs prioritize wellness, functionality, and elegance.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
                >
                  <p className="text-sm uppercase tracking-[0.35em] text-orange-300">{item.label}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_60px_rgba(0,0,0,0.22)]">
                <div className="flex items-center gap-3 text-orange-300">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300">
                    <Star className="h-5 w-5" />
                  </span>
                  <p className="text-sm uppercase tracking-[0.35em] text-orange-200">Design Excellence</p>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  Every interior we create is built to feel elevated, inviting, and intentionally designed for your everyday life.
                </p>
              </div>

              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-black shadow-xl shadow-orange-500/20 transition hover:bg-orange-400">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
