"use client";
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Clock, ShieldCheck, Star } from 'lucide-react';

const STATS = [
  {
    id: 1,
    label: 'Balconies Secured',
    value: 3000,
    suffix: '+',
    icon: <Trophy className="h-5 w-5" />,
  },
  {
    id: 2,
    label: 'Birds Safely Deterred',
    value: 5500,
    suffix: '+',
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    id: 3,
    label: 'Projects Completed',
    value: 2500,
    suffix: '+',
    icon: <Clock className="h-5 w-5" />,
  },
  {
    id: 4,
    label: 'Customer Satisfaction',
    value: 99,
    suffix: '%',
    icon: <Star className="h-5 w-5" />,
  },
];

function AnimatedNumber({ target, start }: { target: number; start: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!start || target === 0) {
      return;
    }

    let frame = 0;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setDisplayValue(Math.round(target * progress));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start]);

  return <>{start ? displayValue : 0}</>;
}

export default function States() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#090605] text-white py-24 px-6 sm:px-8">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-[320px] w-[320px] rounded-full bg-slate-300/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-orange-300/80">
            Measurable Results
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Trust You Can Count On
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400 sm:text-base">
            Real balcony safety net and anti-bird net performance metrics for safe, reliable protection against birds and hazards.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#131212]/90 p-8 shadow-[0_28px_80px_rgba(0,0,0,0.45)] transition duration-500 hover:border-orange-400/30 hover:shadow-[0_38px_120px_rgba(255,160,80,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-slate-300/0 opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className='flex align-items-center  gap-2'>
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 text-orange-300 shadow-[0_14px_40px_rgba(255,134,47,0.16)]">
                  {stat.icon}
                </div>
                <p className="text-5xl font-semibold tracking-tight pt-2 text-white">
                  <AnimatedNumber target={stat.value} start={isInView} />
                  <span className="text-3xl">{stat.suffix}</span>
                </p></div>
                <p className="mt-4 text-sm uppercase tracking-[0.35em] text-orange-200/90">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
