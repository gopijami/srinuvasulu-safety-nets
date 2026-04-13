"use client";
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    alt: 'Balcony safety nets installation for apartments',
    label: 'Balcony Safety Nets',
    title: 'Secure Your Home with',
    titleAccent: 'Top-Rated Balcony Safety Nets',
    description: 'Looking for the best balcony safety nets near me? We provide durable, child-safe, and pet-friendly solutions for apartments with expert installation and long-lasting protection.',
    features: [
      {
        smallLabel: 'Best Choice',
        text: 'Top-rated balcony safety nets designed for child safety, pets, and complete fall protection.',
        icon: 'check',
      },
      {
        smallLabel: 'Trusted Service',
        text: 'Professional installation near you with strong materials for apartments and high-rise homes.',
        icon: 'sparkles',
      },
    ],
    accentImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    accentLabel: 'Safety Solution',
    accentHeadline: 'Premium Balcony Protection',
    accentDescription: 'Elegant, invisible-style safety nets that blend with your home while ensuring maximum security.',
  },

  {
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    alt: 'Invisible grills installation for modern homes',
    label: 'Invisible Grills',
    title: 'Upgrade Safety with',
    titleAccent: 'Best Invisible Grills Near You',
    description: 'Searching for top-rated invisible grills near me? Get sleek, rust-proof, and high-strength grills for balconies and windows without blocking your view.',
    features: [
      {
        smallLabel: 'Modern Design',
        text: 'Premium invisible grills offering safety with clear views and elegant aesthetics.',
        icon: 'check',
      },
      {
        smallLabel: 'Expert Installation',
        text: 'Trusted installation service near you with durable stainless steel cables.',
        icon: 'sparkles',
      },
    ],
    accentImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    accentLabel: 'Featured Work',
    accentHeadline: 'Luxury Invisible Grills',
    accentDescription: 'Stylish and strong invisible grills designed for modern apartments and high-rise living.',
  },

  {
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80',
    alt: 'Sports safety nets for cricket and football grounds',
    label: 'Sports Nets',
    title: 'Play Safe with',
    titleAccent: 'Top Sports Nets Installation',
    description: 'Need the best sports nets near me? We install high-quality cricket, football, and playground nets for schools, academies, and residential spaces.',
    features: [
      {
        smallLabel: 'High Performance',
        text: 'Durable sports nets designed for cricket practice, football grounds, and training areas.',
        icon: 'check',
      },
      {
        smallLabel: 'Reliable Setup',
        text: 'Top-rated installation service ensuring safety and long-lasting performance.',
        icon: 'sparkles',
      },
    ],
    accentImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
    accentLabel: 'Sports Solution',
    accentHeadline: 'Professional Net Setup',
    accentDescription: 'Strong and weather-resistant sports nets for safe and uninterrupted gameplay.',
  },

  {
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    alt: 'Bird spikes installation for pigeon control',
    label: 'Bird Spikes',
    title: 'Stop Birds with',
    titleAccent: 'Best Bird Spikes Installation',
    description: 'Looking for top-rated bird spikes near me? Protect your balconies, windows, and ledges from pigeons with effective and long-lasting bird control solutions.',
    features: [
      {
        smallLabel: 'Effective Control',
        text: 'Best bird spikes to prevent pigeons from sitting and nesting on your property.',
        icon: 'check',
      },
      {
        smallLabel: 'Clean Spaces',
        text: 'Keep balconies and buildings clean with trusted bird prevention solutions.',
        icon: 'sparkles',
      },
    ],
    accentImage: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
    accentLabel: 'Protection Solution',
    accentHeadline: 'Advanced Bird Control',
    accentDescription: 'Smart and discreet bird spikes designed to maintain hygiene and protect your space.',
  },

  {
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80',
    alt: 'Cloth hangers installation for balconies',
    label: 'Cloth Hangers',
    title: 'Maximize Space with',
    titleAccent: 'Best Cloth Hangers Near You',
    description: 'Searching for durable cloth hangers near me? Get space-saving and rust-proof drying solutions for balconies, apartments, and homes.',
    features: [
      {
        smallLabel: 'Space Saving',
        text: 'Modern cloth hangers designed to optimize balcony space efficiently.',
        icon: 'check',
      },
      {
        smallLabel: 'Long Lasting',
        text: 'High-quality materials ensuring durability and easy daily usage.',
        icon: 'sparkles',
      },
    ],
    accentImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    accentLabel: 'Utility Upgrade',
    accentHeadline: 'Smart Drying Solutions',
    accentDescription: 'Elegant and practical cloth hanger systems for modern living spaces.',
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const contentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
  };

  const scaleUp = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.75 } },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = SLIDES[activeIndex];

  return (
    <section className="relative -mt-20 md:-mt-0 min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt={slide.alt}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40  lg:bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/95" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-16 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-end lg:gap-16"
          >
            <div className="max-w-2xl pt-7 lg:pt-20">
              <motion.span
                variants={fadeUp}
                className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200 shadow-[0_20px_80px_rgba(0,0,0,0.25)]"
              >
                {slide.label}
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="mt-6 text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl"
              >
                {slide.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-orange-300">
                  {slide.titleAccent}
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
              >
                {slide.description}
              </motion.p>

              <motion.div
                variants={scaleUp}
                className="relative mt-10 md:hidden lg:hidden flex items-end justify-end"
              >
                <div className="w-full max-w-md lg:max-w-none">
                  <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 shadow-[0_50px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                    <img
                      src={slide.accentImage}
                      alt={slide.accentHeadline}
                      className="h-[420px] w-full object-cover object-center sm:h-[420px]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent px-6 py-6">
                      <p className="text-xs uppercase tracking-[0.35em] text-orange-300">{slide.accentLabel}</p>
                      <h2 className="mt-3 text-3xl font-bold text-white">{slide.accentHeadline}</h2>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{slide.accentDescription}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={contentVariants}
                className="mt-12 grid gap-4"
              >
                {slide.features.map((feature) => (
                  <motion.div
                    key={feature.smallLabel}
                    variants={scaleUp}
                    className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.25)] backdrop-blur-xl"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300">
                        {feature.icon === 'check' ? <CheckCircle2 className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                      </span>
                      <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{feature.smallLabel}</p>
                        <p className="mt-3 text-base leading-7 text-white">{feature.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="relative hidden lg:block md:block flex items-end justify-end">
              <motion.div variants={scaleUp} className="w-full max-w-md lg:max-w-none">
                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 shadow-[0_50px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                  <img
                    src={slide.accentImage}
                    alt={slide.accentHeadline}
                    className="h-[320px] w-full object-cover object-center sm:h-[420px]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent px-6 py-6">
                    <p className="text-xs uppercase tracking-[0.35em] text-orange-300">{slide.accentLabel}</p>
                    <h2 className="mt-3 text-3xl font-bold text-white">{slide.accentHeadline}</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{slide.accentDescription}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
