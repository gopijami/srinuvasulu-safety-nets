"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import type { buildServicePageData } from "@/app/lib/serviceContent";
import type { UltraClientPageData } from "@/app/lib/ultra-page-adapter";

type ServicePageData = NonNullable<ReturnType<typeof buildServicePageData>> & {
  seo?: UltraClientPageData["seo"];
  localityIntelligence?: UltraClientPageData["localityIntelligence"];
  audienceIntent?: UltraClientPageData["audienceIntent"];
  uniquenessAssets?: UltraClientPageData["uniquenessAssets"];
  schemaSupport?: UltraClientPageData["schemaSupport"];
  extra?: UltraClientPageData["extra"];
};

export default function ClientServicePage({
  pageData,
}: {
  pageData: ServicePageData;
}) {
  const {
    service,
    location,
    heroTitle,
    heroDescription,
    intro,
    sections,
    highlights,
    applications,
    faqs,
    nearbyLocations,
    similarProducts,
    conclusion,
    trustCards,
    statCards,
    trustBuilderItems,
    cta,
    nearbyIntro,
    similarIntro,
    faqHeading,
    applicationHeading,
    highlightsHeading,
    coverageHeading,
    coverageBody,
    breadcrumbLabel,
    seo,
    localityIntelligence,
    audienceIntent,
    uniquenessAssets,
    schemaSupport,
    extra,
  } = pageData;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % service.gallery.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [service.gallery.length]);

  const activeSlide = service.gallery[activeIndex];

  return (
    <main className="relative overflow-hidden bg-[#070504] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,183,77,0.16),_transparent_32%)] opacity-90 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(120,58,12,0.28),_transparent_36%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_72%,_rgba(86,42,10,0.22),_transparent_34%)] pointer-events-none" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url('${service.gallery[1]?.image ?? service.gallery[0]?.image}')` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,6,5,0.9)_0%,rgba(10,7,5,0.82)_24%,rgba(19,10,4,0.68)_48%,rgba(8,6,5,0.92)_76%,rgba(3,2,2,0.98)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(38,18,6,0.18)_42%,rgba(0,0,0,0.74)_100%)]" />

      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 md:pt-36 pb-2 pt-20 sm:pt-32">
          <div className="flex flex-wrap items-center gap-2 text-[10px] text-slate-400">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href={`/hyderabad/${service.slug}`} className="transition hover:text-white">
              {service.shortName}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">{breadcrumbLabel}</span>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="relative min-h-[100svh] w-full overflow-hidden md:min-h-screen">
          <Image
            src={activeSlide.image}
            alt={activeSlide.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,2,2,0.88)_0%,rgba(8,6,5,0.78)_38%,rgba(10,7,5,0.38)_68%,rgba(10,7,5,0.32)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.45)_100%)]" />

          <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center px-5 py-10 sm:px-6 sm:py-14 md:min-h-screen lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
            <div className="py-8 sm:px-2 lg:py-1">
                <span className="inline-flex rounded-full border border-orange-300/25 bg-black/25 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-orange-200 backdrop-blur-md">
                  {service.badge}
                </span>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="mt-3 max-w-3xl text-3xl font-black leading-[1.02] text-white sm:text-4xl lg:text-[2.5rem]"
                >
                  Create the Comfort
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-orange-300">
                    You Deserve
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="mt-5 max-w-2xl text-base leading-7 text-slate-200/90 sm:text-lg sm:leading-8"
                >
                  {heroTitle} {heroDescription} {intro}
                </motion.p>

                <div className="mt-7 max-w-xl space-y-4">
                  {service.trustFocus.slice(0, 2).map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 border-b border-white/10 pb-4 text-sm text-slate-200/90 sm:text-base"
                    >
                      <span className="mt-1 h-3 w-3 rounded-full border border-orange-300/40 bg-orange-400/80" />
                      <p className="leading-7">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#contact-cta"
                    className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-orange-500 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-black shadow-[0_24px_50px_rgba(249,115,22,0.24)] transition hover:bg-orange-400"
                  >
                    Book Free Inspection
                  </a>
                  <a
                    href="#service-content"
                    className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/15 bg-black/25 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md transition hover:border-orange-400 hover:bg-black/35"
                  >
                    Explore Service Details
                  </a>
                </div>
            </div>

            <div className="relative mt-10 lg:mt-0">
              <div className="mx-auto w-full max-w-sm sm:max-w-md lg:ml-auto lg:mr-0 lg:max-w-[24rem]">
                <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(44,44,44,0.82),rgba(24,24,24,0.9))] p-3 shadow-[0_32px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-[1.4rem] aspect-[4/3]">
                  <Image
                    src={service.gallery[(activeIndex + 1) % service.gallery.length].image}
                    alt={service.gallery[(activeIndex + 1) % service.gallery.length].alt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 384px"
                    className="object-cover"
                  />
                </div>
                <div className="px-2 pb-2 pt-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.3em] text-orange-300">Featured Project</p>
                  <h2 className="mt-2 text-xl font-bold text-white">
                    {service.gallery[(activeIndex + 1) % service.gallery.length].title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {service.gallery[(activeIndex + 1) % service.gallery.length].description}
                  </p>
                </div>
                </div>

                <div className="mt-4 flex w-full flex-wrap gap-3">
                  {service.gallery.map((slide, index) => (
                    <button
                      key={slide.title}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`View ${slide.title}`}
                      className={`flex-1 rounded-full border px-4 py-2 text-sm transition sm:flex-none ${
                        index === activeIndex
                          ? "border-orange-300 bg-orange-500/10 text-orange-200"
                          : "border-[#6f4b2b]/35 bg-[rgba(35,24,18,0.72)] text-slate-300 hover:border-orange-300 hover:text-white"
                      }`}
                    >
                      {slide.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative border-t border-white/10 bg-[rgba(8,6,5,0.72)] backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 sm:py-6">
              <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {trustCards.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.4rem] border border-[#6b492d]/35 bg-[linear-gradient(180deg,rgba(40,28,21,0.76),rgba(17,13,11,0.84))] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl"
                    >
                      <p className="text-[0.66rem] uppercase tracking-[0.28em] text-orange-300">Trust Signal</p>
                      <p className="mt-3 text-sm font-semibold leading-6 text-white">{item}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-3">
          {statCards.map((item) => (
            <div
              key={item.label}
              className="rounded-[2rem] border border-[#6a472a]/35 bg-[linear-gradient(180deg,rgba(42,28,19,0.72),rgba(18,13,10,0.82))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-orange-300">{item.label}</p>
              <p className="mt-3 text-2xl font-bold text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {(localityIntelligence || audienceIntent) && (
        <section className="relative">
          <div className="mx-auto max-w-7xl px-6 py-6">
            <div className="grid gap-8 lg:grid-cols-2">
              {localityIntelligence && (
                <div className="rounded-[2rem] border border-[#6f4c2c]/35 bg-[linear-gradient(180deg,rgba(30,21,17,0.82),rgba(11,9,9,0.9))] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.36)] backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.35em] text-orange-300">Local Intelligence</p>
                  <h2 className="mt-3 text-3xl font-bold text-white">
                    Why {location.name} needs a location-specific page
                  </h2>
                  <p className="mt-4 leading-7 text-slate-300">
                    {localityIntelligence.areaProfile.areaCharacter}
                  </p>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-orange-300">Pain Points</p>
                      <div className="mt-4 space-y-3">
                        {localityIntelligence.areaProfile.localPainPoints.slice(0, 4).map((item: string) => (
                          <div key={item} className="flex items-start gap-3">
                            <CircleAlert className="mt-0.5 h-4 w-4 text-orange-400" />
                            <p className="text-sm leading-6 text-slate-200">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-orange-300">Hyperlocal Signals</p>
                      <div className="mt-4 space-y-3">
                        {localityIntelligence.hyperlocalSignals.slice(0, 4).map((item: string) => (
                          <div key={item} className="flex items-start gap-3">
                            <MapPin className="mt-0.5 h-4 w-4 text-orange-400" />
                            <p className="text-sm leading-6 text-slate-200">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {localityIntelligence.nearbyLandmarks.slice(0, 4).map((item: string) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#6b4b30]/35 bg-[rgba(44,31,23,0.7)] px-4 py-2 text-sm text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {audienceIntent && (
                <div className="rounded-[2rem] border border-[#6f4c2c]/35 bg-[linear-gradient(180deg,rgba(30,21,17,0.82),rgba(11,9,9,0.9))] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.36)] backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.35em] text-orange-300">Buyer Intent</p>
                  <h2 className="mt-3 text-3xl font-bold text-white">
                    What buyers in {location.name} actually care about
                  </h2>
                  <div className="mt-6 space-y-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-orange-300">Why They Buy</p>
                      <div className="mt-4 space-y-3">
                        {audienceIntent.whyTheyBuy.slice(0, 4).map((item: string) => (
                          <div key={item} className="flex items-start gap-3">
                            <Star className="mt-0.5 h-4 w-4 text-orange-400" />
                            <p className="text-sm leading-6 text-slate-200">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-orange-300">Reassurance Points</p>
                      <div className="mt-4 space-y-3">
                        {audienceIntent.reassurancePoints.slice(0, 4).map((item: string) => (
                          <div key={item} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-orange-400" />
                            <p className="text-sm leading-6 text-slate-200">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section id="service-content" className="relative">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.article
                key={section.header}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
                className="rounded-[2rem] border border-[#6d492c]/35 bg-[linear-gradient(180deg,rgba(37,25,18,0.74),rgba(16,12,10,0.84))] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              >
                <div className="flex items-center gap-3 text-orange-300">
                  <Sparkles className="h-4 w-4" />
                  <p className="text-xs uppercase tracking-[0.35em]">Dynamic Service Insight</p>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">{section.header}</h2>
                <p className="mt-4 text-base leading-8 text-slate-300">{section.content}</p>
              </motion.article>
            ))}

            <article className="rounded-[2rem] border border-orange-400/20 bg-[linear-gradient(135deg,rgba(120,60,12,0.2),rgba(35,18,10,0.78))] p-7 shadow-[0_30px_80px_rgba(249,115,22,0.12)]">
              <p className="text-xs uppercase tracking-[0.35em] text-orange-300">Conclusion</p>
              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                Why this page converts with confidence
              </h2>
              <p className="mt-4 text-base leading-8 text-orange-50/90">{conclusion}</p>
            </article>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-[#6f4c2c]/35 bg-[linear-gradient(180deg,rgba(30,21,17,0.82),rgba(11,9,9,0.9))] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.36)] backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-orange-300">{highlightsHeading}</p>
              <div className="mt-5 space-y-4">
                {highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-400" />
                    <p className="text-slate-200">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#6f4c2c]/35 bg-[linear-gradient(180deg,rgba(30,21,17,0.82),rgba(11,9,9,0.9))] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.36)] backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-orange-300">{applicationHeading}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {applications.map((application) => (
                  <span
                    key={application}
                    className="rounded-full border border-[#6b4b30]/35 bg-[rgba(44,31,23,0.7)] px-4 py-2 text-sm text-slate-200"
                  >
                    {application}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#6f4c2c]/35 bg-[linear-gradient(180deg,rgba(30,21,17,0.82),rgba(11,9,9,0.9))] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.36)] backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-orange-300">Trust Builders</p>
              <div className="mt-5 space-y-4">
                {trustBuilderItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Star className="mt-0.5 h-5 w-5 text-orange-400" />
                    <p className="text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="contact-cta"
              className="rounded-[2rem] border border-orange-400/20 bg-[linear-gradient(135deg,rgba(155,88,28,0.28),rgba(44,26,15,0.86),rgba(8,6,6,0.94))] p-7 shadow-[0_30px_80px_rgba(249,115,22,0.16)]"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-orange-300">{cta.eyebrow}</p>
              <h2 className="mt-4 text-2xl font-bold text-white">{cta.title}</h2>
              <p className="mt-4 leading-7 text-slate-200">{cta.body}</p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="tel:+919999999999"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-orange-400"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/919999999999?text=I%20need%20${encodeURIComponent(service.name)}%20in%20${encodeURIComponent(location.name)}`}
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-orange-400 hover:bg-white/10"
                >
                  Get Quick Quote
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-[2.5rem] border border-[#6e4a2b]/35 bg-[linear-gradient(180deg,rgba(42,28,20,0.74),rgba(13,10,10,0.88))] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.36)] backdrop-blur-xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-orange-300">FAQs</p>
                <h2 className="mt-3 text-3xl font-bold text-white">{faqHeading}</h2>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <ShieldCheck className="h-4 w-4 text-orange-400" />
                <span>Dynamic answers for {location.name}</span>
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-[1.5rem] border border-[#65472d]/35 bg-[rgba(24,17,14,0.74)] p-5"
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {(uniquenessAssets?.testimonialAngles?.length || uniquenessAssets?.ctaBlocks?.length) && (
        <section className="relative">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              {uniquenessAssets?.testimonialAngles?.length ? (
                <div className="rounded-[2rem] border border-[#6e4a2b]/35 bg-[linear-gradient(180deg,rgba(42,28,20,0.74),rgba(13,10,10,0.88))] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.35em] text-orange-300">What Customers Say</p>
                  <h2 className="mt-3 text-3xl font-bold text-white">
                    Trust stories from {location.name}
                  </h2>
                  <div className="mt-6 grid gap-4">
                    {uniquenessAssets.testimonialAngles.map((item) => (
                      <div
                        key={`${item.title}-${item.customerType}`}
                        className="rounded-[1.5rem] border border-[#65472d]/35 bg-[rgba(24,17,14,0.74)] p-5"
                      >
                        <p className="text-xs uppercase tracking-[0.28em] text-orange-300">{item.customerType}</p>
                        <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                        <p className="mt-3 leading-7 text-slate-300">{item.quote}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {uniquenessAssets?.ctaBlocks?.length ? (
                <div className="space-y-6">
                  {uniquenessAssets.ctaBlocks.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[2rem] border border-orange-400/20 bg-[linear-gradient(135deg,rgba(155,88,28,0.28),rgba(44,26,15,0.86),rgba(8,6,6,0.94))] p-7 shadow-[0_30px_80px_rgba(249,115,22,0.16)]"
                    >
                      <p className="text-xs uppercase tracking-[0.35em] text-orange-300">{item.actionLabel}</p>
                      <h2 className="mt-4 text-2xl font-bold text-white">{item.title}</h2>
                      <p className="mt-4 leading-7 text-slate-200">{item.description}</p>
                      <a
                        href="#contact-cta"
                        className="mt-6 inline-flex items-center gap-3 rounded-full bg-orange-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-orange-400"
                      >
                        {item.actionLabel}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>
      )}

      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#6e4a2b]/35 bg-[linear-gradient(180deg,rgba(42,28,20,0.74),rgba(13,10,10,0.88))] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-orange-300">Nearby Locations</p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Nearby {service.shortName.toLowerCase()} locations around {location.name}
              </h2>
              <p className="mt-4 leading-7 text-slate-300">{nearbyIntro}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {nearbyLocations.map((nearbyLocation) => (
                  <Link
                    key={nearbyLocation.slug}
                    href={`/hyderabad/${service.slug}/${nearbyLocation.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-[#6b4b30]/35 bg-[rgba(33,23,18,0.74)] px-4 py-3 text-sm text-slate-200 transition hover:border-orange-300 hover:text-white"
                  >
                    <MapPin className="h-4 w-4 text-orange-400" />
                    {nearbyLocation.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#6e4a2b]/35 bg-[linear-gradient(180deg,rgba(42,28,20,0.74),rgba(13,10,10,0.88))] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-orange-300">Service Coverage</p>
              <h2 className="mt-3 text-3xl font-bold text-white">{coverageHeading}</h2>
              <p className="mt-5 leading-7 text-slate-300">{coverageBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-orange-300">Similar Products</p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Similar services for {service.shortName.toLowerCase()} in {location.name}
              </h2>
              <p className="mt-4 max-w-3xl leading-7 text-slate-300">{similarIntro}</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {similarProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/hyderabad/${product.slug}/${location.slug}`}
                className="group rounded-[2rem] border border-[#6d4b2d]/35 bg-[linear-gradient(180deg,rgba(38,26,19,0.74),rgba(14,10,10,0.86))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl transition hover:border-orange-300/40 hover:bg-[rgba(48,33,23,0.88)]"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-orange-300">{product.category}</p>
                <h3 className="mt-4 text-2xl font-bold text-white">{product.name}</h3>
                <p className="mt-4 leading-7 text-slate-300">{product.heroDescription}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-orange-200">
                  View in {location.name}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {(seo || schemaSupport || extra?.quickHighlights?.length) && (
        <section className="relative">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid gap-8 lg:grid-cols-3">
              {extra?.quickHighlights?.length ? (
                <div className="rounded-[2rem] border border-[#6e4a2b]/35 bg-[linear-gradient(180deg,rgba(42,28,20,0.74),rgba(13,10,10,0.88))] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.35em] text-orange-300">Quick Highlights</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {extra.quickHighlights.map((item: string) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#6b4b30]/35 bg-[rgba(44,31,23,0.7)] px-4 py-2 text-sm text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {schemaSupport ? (
                <div className="rounded-[2rem] border border-[#6e4a2b]/35 bg-[linear-gradient(180deg,rgba(42,28,20,0.74),rgba(13,10,10,0.88))] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.35em] text-orange-300">Offer Highlights</p>
                  <div className="mt-5 space-y-3">
                    {schemaSupport.offerHighlights.map((item: string) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-orange-400" />
                        <p className="text-sm leading-6 text-slate-200">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {seo?.secondaryKeywords?.length ? (
                <div className="rounded-[2rem] border border-[#6e4a2b]/35 bg-[linear-gradient(180deg,rgba(42,28,20,0.74),rgba(13,10,10,0.88))] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.35em] text-orange-300">Search Relevance</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {seo.secondaryKeywords.slice(0, 6).map((item: string) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#6b4b30]/35 bg-[rgba(44,31,23,0.7)] px-4 py-2 text-sm text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
