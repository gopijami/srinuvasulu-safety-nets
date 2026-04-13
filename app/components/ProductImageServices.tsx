"use client";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    title: 'Luxury Living Room',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Modern Lounge Space',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Minimalist Seating',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'Green Accent Corner',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    title: 'Soft Conversation Area',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    title: 'Relaxed Family Room',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
];

const Card = ({ service, index }: { service: typeof SERVICES[number]; index: number }) => {
  const sizeClasses = [
    'h-[260px]',
    'h-[420px]',
    'h-[260px]',
    'h-[420px]',
    'h-[420px]',
    'h-[260px]',
  ];
  const orderClasses = [
    'md:order-1',
    'md:order-2',
    'md:order-3',
    'md:order-4',
    'md:order-5',
    'md:order-6',
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className={`${orderClasses[index]} group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#131212]/90 shadow-[0_28px_80px_rgba(0,0,0,0.45)] transition duration-500 hover:border-orange-400/30 hover:shadow-[0_38px_120px_rgba(255,160,80,0.2)] ${sizeClasses[index]}`}
    >
      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105 "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
        <span className="rounded-full border border-white/10 bg-[#131212]/90 px-3 py-2 text-[0.65rem] uppercase tracking-[0.35em] text-white/80 backdrop-blur-xl">
          {service.rating.toFixed(1)} ★
        </span>
        {/* <div className="border rounded-bl-[20px] -mt-6 -mr-6 border-white/10 bg-[#131212]/90 px-3 py-2 text-[0.65rem] uppercase tracking-[0.35em] text-white/80 backdrop-blur-xl">
          <button
            aria-label={`Open ${service.title}`}
            className="inline-flex h-18 w-18 items-center justify-center rounded-full border border-orange-300/20 bg-black/40 text-orange-300 shadow-[0_18px_40px_rgba(0,0,0,0.25)] transition duration-300 hover:border-orange-300 hover:bg-orange-500/15"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div> */}
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="rounded-[1.75rem] border border-white/10 bg-black/50 p-4 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-200/90">Service</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{service.title}</h3>
        </div>
      </div>
    </motion.article>
  );
};

export default function ProductImageServices() {
  return (
    <section className="relative overflow-hidden bg-[#090605] text-white py-24 px-6 sm:px-8">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-[320px] w-[320px] rounded-full bg-slate-300/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-orange-300/80">See Our Cozy Creations</p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">See Our Cozy Creations</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-12 md:auto-rows-fr">
          <div className="md:col-span-4">
            <Card service={SERVICES[0]} index={0} />
          </div>
          <div className="md:col-span-4 md:row-span-2">
            <Card service={SERVICES[1]} index={1} />
          </div>
          <div className="md:col-span-4">
            <Card service={SERVICES[2]} index={2} />
          </div>
          <div className="md:col-span-4 md:row-span-2">
            <Card service={SERVICES[3]} index={3} />
          </div>
          <div className="md:col-span-4 md:row-span-2">
            <Card service={SERVICES[4]} index={4} />
          </div>
          <div className="md:col-span-4">
            <Card service={SERVICES[5]} index={5} />
          </div>
        </div>

        {/* <div className="mt-14 flex justify-center">
          <button className="inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-black shadow-[0_20px_60px_rgba(255,148,54,0.25)] transition duration-300 hover:bg-orange-400">
            Explore Full Portfolio
            <ArrowRight className="h-4 w-4" />
          </button>
        </div> */}
      </div>
    </section>
  );
}
