"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SLIDE_DATA = [
  {
    title: 'Modern Living Room',
    description: 'Warm luxury with soft lighting and elegant finishes.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    alt: 'Stylish modern living room interior',
  },
  {
    title: 'Cozy Dining Space',
    description: 'Minimalist dining area for intimate family evenings.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    alt: 'Cozy dining room with designer lighting',
  },
  {
    title: 'Beautiful Bedroom Retreat',
    description: 'Soft textures and layered lighting for calm and comfort.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    alt: 'Elegant bedroom interior with designer decor',
  },
];

const ServicesDetailsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % SLIDE_DATA.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const activeSlide = SLIDE_DATA[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[#090909] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.18),_transparent_40%)] opacity-90 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/95" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10">
        <div className="relative z-10">
          <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-orange-300 shadow-[0_8px_30px_rgba(249,115,22,0.12)]">
            Interior Design Studio
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Create the Comfort <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-white">
              You Deserve.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            Premium interiors and protective nets with a lifestyle-driven design approach. Responsive, elegant, and engineered to keep your home safe, stylish, and comfortable.
          </motion.p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black shadow-[0_24px_50px_rgba(249,115,22,0.24)] transition hover:bg-orange-400"
            >
              Book Free Inspection
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-orange-400 hover:bg-white/10"
            >
              Explore Our Services
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              'Tailored living spaces',
              'Modern safety solutions',
              'Expert craftsmanship',
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                <p className="font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-14 lg:mt-0">
          <div className="relative mx-auto max-w-xl">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/80 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <img
                src={activeSlide.image}
                alt={activeSlide.alt}
                className="h-[380px] w-full object-cover object-center sm:h-[420px]"
              />

              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 bg-gradient-to-t from-black/90 via-black/10 to-transparent p-6">
                <div className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                  <p className="text-sm uppercase tracking-[0.28em] text-orange-300">Featured Project</p>
                  <h2 className="mt-2 text-2xl font-bold text-white">{activeSlide.title}</h2>
                  <p className="mt-2 text-sm text-slate-300">{activeSlide.description}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-wrap gap-3">
                {SLIDE_DATA.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`View ${slide.title}`}
                    className={`rounded-2xl border px-4 py-2 text-sm transition ${
                      index === activeIndex
                        ? 'border-orange-300 bg-orange-500/10 text-orange-200'
                        : 'border-white/10 bg-white/5 text-slate-300 hover:border-orange-300 hover:text-white'
                    }`}
                  >
                    {slide.title}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-500">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                <span>Capturing premium interiors</span>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-6 bottom-4 hidden h-40 w-40 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.3)] md:block">
              <img
                src={activeSlide.image}
                alt="Accent corner image"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailsPage;
