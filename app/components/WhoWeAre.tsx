"use client";

import { RefObject, useEffect, useRef, useState } from "react";

const imageUrl = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80";

function useOnScreen(ref: RefObject<HTMLElement | null>, threshold = 0.3) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return isVisible;
}

function useCountUp(target: number, duration = 1200, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    setCount(0);
    let startTime: number | null = null;
    let frame = requestAnimationFrame(function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [target, duration, start]);

  return count;
}

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(sectionRef);
  const projects = useCountUp(500, 1400, isVisible);
  const experience = useCountUp(12, 1400, isVisible);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#120b08] text-white py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,145,51,0.16),transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(0,0,0,0.45),transparent_24%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#2a1d16]/50 bg-[#19110d] shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
            <img
              src={imageUrl}
              alt="Luxury living room interior"
              className="h-[340px] w-full object-cover sm:h-[420px] md:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/95 via-[#0f0906]/20 to-transparent" />
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-[#312218]/50 bg-[#14100d]/90 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-gradient-to-r from-[#090605]/95 via-[#221a13]/70 to-[#090605]/95 rounded-[2rem]" />
            <div className="relative space-y-8">
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-orange-200">
                Who We Are
              </span>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold leading-tight text-white sm:text-2xl lg:text-2xl">
                  At <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-orange-300">Srinuvasulu Safety Nets</span>, we deliver top-rated safety solutions near you.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-sm">
                  We specialize in balcony safety nets, invisible grills, sports nets, bird spikes, and cloth hangers with best-in-class installation. Trusted by customers searching for the best safety nets near me, we ensure durable protection, modern design, and complete safety for homes and apartments.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className=" text-center">
                  <p className="text-3xl md:text-4xl font-bold text-orange-500">{projects}+</p>
                  <p className="mt-2 text-[15px] md:text-sm uppercase tracking-[0.35em] text-white">Projects</p>
                </div>
                <div className=" text-center">
                  <p className="text-3xl md:text-4xl font-bold text-orange-500">{experience}+</p>
                  <p className="mt-2 text-[15px] md:text-base uppercase tracking-[0.35em] text-white">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
