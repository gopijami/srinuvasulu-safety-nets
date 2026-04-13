// // 🔥 FINAL PIXEL-PERFECT STYLE (Closer visual match with gradients, fonts, layout)
// 'use client';
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Navbar from "./components/NavBar";
// import Hero from "./components/Hero";

// const services = [
//   "Full Home Makeovers",
//   "Living Room Styling",
//   "Bedroom Retreats",
//   "Kitchen & Dining Spaces",
//   "Invisible Grills",
//   "Balcony Safety Nets",
//   "Pigeon Safety Nets",
//   "Anti Bird Nets",
//   "Duct Area Safety Nets",
//   "Children Safety Nets",
// ];

// export default function Page() {
//   return (
//     // <main className="bg-[#060606] text-white font-[Poppins]">

//     //   {/* BACKGROUND GLOW */}
//     //   <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.15),transparent_60%)] pointer-events-none" />

//     //   {/* NAVBAR */}
//     //   <header className="fixed w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
//     //     <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//     //       <h1 className="text-lg font-semibold tracking-wide">INTERIOR DESIGN</h1>
//     //       <nav className="hidden md:flex gap-8 text-sm text-gray-300">
//     //         <span>Home</span>
//     //         <span>About Us</span>
//     //         <span>Our Work</span>
//     //         <span>Services</span>
//     //         <span>Testimonials</span>
//     //         <span>Blog</span>
//     //         <span>Contact</span>
//     //       </nav>
//     //     </div>
//     //   </header>

//     //   {/* HERO */}
//     //   <section className="relative h-screen flex items-center pt-24">
//     //     <Image src="/interior-hero.jpg" fill alt="hero" className="object-cover" />
//     //     <div className="absolute inset-0 bg-black/70" />

//     //     <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//     //       <div>
//     //         <h1 className="text-5xl md:text-6xl font-bold leading-[1.1]">
//     //           Create the Comfort You Deserve
//     //         </h1>
//     //         <p className="mt-4 text-gray-300 max-w-md">
//     //           Tailored interior design solutions for serene, stylish spaces.
//     //         </p>

//     //         <div className="mt-6 space-y-3 text-sm text-gray-300">
//     //           <p>✔ High quality materials</p>
//     //           <p>✔ Modern aesthetic designs</p>
//     //         </div>
//     //       </div>

//     //       {/* FLOAT CARD */}
//     //       <div className="relative">
//     //         <div className="bg-white/10 backdrop-blur-xl p-3 rounded-2xl shadow-2xl">
//     //           <Image src="/room.jpg" width={400} height={260} alt="room" className="rounded-xl" />
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </section>

//     //   {/* ABOUT */}
//     //   <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
//     //     <Image src="/interior2.jpg" width={500} height={300} alt="about" className="rounded-2xl" />

//     //     <div className="bg-[#1a1a1a]/70 backdrop-blur p-8 rounded-2xl">
//     //       <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
//     //       <p className="text-gray-400">
//     //         We create comfort-focused interiors with elegance and functionality.
//     //       </p>
//     //     </div>
//     //   </section>

//     //   {/* STATS */}
//     //   <section className="bg-[#0e0e0e] py-12">
//     //     <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
//     //       {[
//     //         "150+ Projects Completed",
//     //         "10 Years of Experience",
//     //         "Award-Winning Designers",
//     //       ].map((item) => (
//     //         <div key={item} className="bg-[#1a1a1a] p-6 rounded-xl text-center">
//     //           <p className="text-gray-200">{item}</p>
//     //         </div>
//     //       ))}
//     //     </div>
//     //   </section>

//     //   {/* SERVICES */}
//     //   <section className="max-w-7xl mx-auto px-6 py-20">
//     //     <h2 className="text-3xl text-center mb-12">Our Interior Design Services</h2>

//     //     <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//     //       {services.map((s) => (
//     //         <div key={s} className="bg-[#1a1a1a]/60 backdrop-blur border border-white/10 p-6 rounded-xl hover:bg-[#222] transition">
//     //           <div className="w-10 h-10 mb-3 bg-yellow-500 rounded-md" />
//     //           <h3 className="font-semibold">{s}</h3>
//     //           <p className="text-gray-400 text-sm mt-2">Transform your space with premium design.</p>
//     //         </div>
//     //       ))}
//     //     </div>
//     //   </section>

//     //   {/* PORTFOLIO */}
//     //   <section className="max-w-7xl mx-auto px-6 py-20">
//     //     <h2 className="text-3xl text-center mb-10">See Our Cozy Creations</h2>

//     //     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//     //       {[1,2,3,4,5,6].map((i) => (
//     //         <div key={i} className="relative rounded-2xl overflow-hidden group">
//     //           <Image src={`/p${i}.jpg`} width={300} height={200} alt="portfolio" />
//     //           <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center">
//     //             <div className="bg-yellow-500 p-2 rounded-full">→</div>
//     //           </div>
//     //         </div>
//     //       ))}
//     //     </div>
//     //   </section>

//     //   {/* TESTIMONIALS */}
//     //   <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-6">
//     //     <div className="bg-[#1a1a1a] p-6 rounded-xl">
//     //       <p className="text-gray-400">Amazing transformation and quality!</p>
//     //       <p className="mt-4 font-semibold">Client 1</p>
//     //     </div>
//     //     <div className="bg-[#1a1a1a] p-6 rounded-xl">
//     //       <p className="text-gray-400">Highly recommended service.</p>
//     //       <p className="mt-4 font-semibold">Client 2</p>
//     //     </div>
//     //   </section>

//     //   {/* CONTACT */}
//     //   <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
//     //     <div>
//     //       <h2 className="text-3xl mb-4">Let’s Bring Your Vision to Life</h2>
//     //       <button className="bg-yellow-500 px-6 py-3 rounded-lg">Make a call</button>
//     //     </div>

//     //     <div className="bg-[#1a1a1a] p-6 rounded-xl">
//     //       <input className="w-full mb-3 p-3 bg-black border border-gray-700 rounded" placeholder="Your Name" />
//     //       <input className="w-full mb-3 p-3 bg-black border border-gray-700 rounded" placeholder="Email" />
//     //       <textarea className="w-full mb-3 p-3 bg-black border border-gray-700 rounded" placeholder="Message" />
//     //       <button className="bg-yellow-500 px-4 py-2 rounded">Submit</button>
//     //     </div>
//     //   </section>

//     //   {/* FOOTER */}
//     //   <footer className="bg-[#0b0b0b] py-10 border-t border-white/10 text-center text-gray-500">
//     //     © 2024 Interior Design
//     //   </footer>

//     // </main>
//     <main className="bg-[#060606] text-white font-[Poppins]">
//       <Navbar />
//       <Hero />
//     </main>
//   );
// }


// "use client";
// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   ShieldCheck, CheckCircle2, Phone, Mail, 
//   Star, Quote, ArrowRight, Trophy, Clock, Award 
// } from 'lucide-react';

// // --- DATA STRUCTURES ---
// const STATS = [
//   { icon: <CheckCircle2 />, label: "500+ Projects Completed", value: "High Quality" },
//   { icon: <Clock />, label: "10+ Years of Experience", value: "Reliable Service" },
//   { icon: <Award />, label: "Award-Winning Installation", value: "Certified Pros" },
// ];


"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  Menu, 
  X, 
  ArrowRight, 
  Star, 
  Quote, 
  Phone, 
  Mail, 
  ShieldCheck 
} from 'lucide-react';
import Navbar  from "./components/NavBar";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import States from "./components/States";
import ProductImageServices from './components/ProductImageServices';
import ProductSection from './components/CinematicCards';
import Testimonials from './components/Testimonial';
import FloatingButtons from './components/FloatingButtons';

const MAIN_SERVICES = [
  { title: "Bird Control Nets", desc: "Advanced anti-bird solutions for balconies.", icon: "🐦" },
  { title: "Safety Grills", desc: "Modern invisible grills for aesthetics.", icon: "🛡️" },
  { title: "Sports Netting", desc: "Cricket and multi-sport practice nets.", icon: "🏏" },
  { title: "Industrial Nets", desc: "Heavy-duty construction safety nets.", icon: "🏗️" },
];

const TESTIMONIALS = [
  { name: "Rahul Sharma", role: "Apartment Resident", text: "The pigeon nets installed by Srinuvasulu are invisible and highly effective!", rating: 5 },
  { name: "Priya Verma", role: "Business Owner", text: "Best service for balcony safety. The team was professional and clean.", rating: 5 },
];

// --- REUSABLE ANIMATION VARIANTS ---
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

// export default function LandingPage() {
//   return (
//     <main className="bg-[#0A0A0A] text-white selection:bg-orange-500 selection:text-black">
      
//       {/* 1. HERO SECTION */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <div className="absolute inset-0 bg-black/60 z-10" />
//           <img 
//             src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80" 
//             className="w-full h-full object-cover" 
//             alt="Luxury Interior" 
//           />
//         </div>
        
//         <div className="relative z-20 text-center px-6 max-w-5xl">
//           <motion.h1 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-6"
//           >
//             Create the <span className="text-orange-500">Safety</span> <br /> You Deserve
//           </motion.h1>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
//           >
//             Tailored safety net solutions for serene, secure, and bird-free living spaces.
//           </motion.p>
//           <motion.button 
//             whileHover={{ scale: 1.05 }}
//             className="bg-orange-500 text-black px-10 py-4 rounded-full font-bold text-lg"
//           >
//             Get Free Consultation
//           </motion.button>
//         </div>
//       </section>

//       {/* 2. WHO WE ARE SECTION (Split Layout) */}
//       <section className="py-24 px-6 max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <motion.div {...fadeIn} className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
//             <img 
//               src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80" 
//               className="w-full h-full object-cover" 
//               alt="Our Work" 
//             />
//           </motion.div>
//           <motion.div {...fadeIn} className="space-y-6">
//             <h2 className="text-4xl md:text-5xl font-bold">Who We Are</h2>
//             <p className="text-gray-400 text-lg leading-relaxed">
//               At Srinuvasulu Safety Nets, we believe true comfort comes from security. 
//               Our passion is transforming everyday balconies and windows into timeless, 
//               secure sanctuaries that protect your family from birds and hazards.
//             </p>
//             <button className="flex items-center gap-2 text-orange-500 font-bold hover:gap-4 transition-all">
//               Learn More <ArrowRight size={20} />
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       {/* 3. STATS SECTION (3 Columns) */}
//       <section className="py-20 bg-[#111]">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
//           {STATS.map((stat, i) => (
//             <motion.div 
//               key={i}
//               {...fadeIn}
//               className="bg-[#1a1a1a] p-10 rounded-3xl text-center border border-white/5 hover:border-orange-500/30 transition-colors"
//             >
//               <div className="text-orange-500 flex justify-center mb-4">{stat.icon}</div>
//               <h4 className="text-2xl font-bold mb-1">{stat.label}</h4>
//               <p className="text-gray-500 text-sm">{stat.value}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* 4. SERVICES SECTION (4 Cards) */}
//       <section className="py-24 px-6 max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Safety Services</h2>
//           <div className="w-20 h-1 bg-orange-500 mx-auto" />
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {MAIN_SERVICES.map((service, i) => (
//             <motion.div 
//               key={i}
//               whileHover={{ y: -10 }}
//               className="bg-[#111] p-8 rounded-3xl border border-white/5 group hover:bg-orange-500 transition-all duration-500"
//             >
//               <span className="text-4xl mb-6 block">{service.icon}</span>
//               <h3 className="text-xl font-bold mb-3 group-hover:text-black transition-colors">{service.title}</h3>
//               <p className="text-gray-500 group-hover:text-black/80 transition-colors text-sm mb-6">
//                 {service.desc}
//               </p>
//               <button className="text-orange-500 group-hover:text-black font-bold text-xs uppercase tracking-widest flex items-center gap-2">
//                 Learn More <ArrowRight size={14} />
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* 5. PORTFOLIO SECTION (Asymmetric Grid) */}
//       <section className="py-24 bg-[#050505]">
//         <div className="max-w-7xl mx-auto px-6 text-center mb-16">
//           <h2 className="text-4xl font-bold">See Our Secure Creations</h2>
//         </div>
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
//           <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group">
//             <img src="https://images.unsplash.com/photo-1505691938895-1758d7febaa6?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="work" />
//             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//               <span className="text-white font-bold">View Project</span>
//             </div>
//           </div>
//           <div className="md:col-span-2 md:row-span-1 rounded-3xl overflow-hidden relative group">
//             <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="work" />
//           </div>
//           <div className="md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden relative group">
//             <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="work" />
//           </div>
//           <div className="md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden relative group">
//             <img src="https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="work" />
//           </div>
//         </div>
//       </section>

//       {/* 6. TESTIMONIALS */}
//       <section className="py-24 bg-[#0A0A0A]">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-center text-4xl font-bold mb-16">What Our Clients Say</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {TESTIMONIALS.map((t, i) => (
//               <motion.div key={i} {...fadeIn} className="bg-[#111] p-10 rounded-3xl relative">
//                 <Quote className="text-orange-500/20 absolute top-8 right-8" size={60} />
//                 <div className="flex gap-1 text-orange-500 mb-6">
//                   {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
//                 </div>
//                 <p className="text-xl italic text-gray-300 mb-8">"{t.text}"</p>
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 rounded-full bg-orange-500" />
//                   <div>
//                     <h4 className="font-bold">{t.name}</h4>
//                     <p className="text-gray-500 text-sm">{t.role}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 7. CONTACT SECTION (Split Layout) */}
//       <section className="py-24 px-6 max-w-7xl mx-auto">
//         <div className="bg-[#111] rounded-[40px] overflow-hidden grid md:grid-cols-2 border border-white/5">
//           <div className="p-12 md:p-20 space-y-10">
//             <h2 className="text-4xl font-bold leading-tight">Let's Bring Your <br /><span className="text-orange-500">Vision to Life</span></h2>
//             <div className="space-y-6">
//               <div className="flex items-center gap-4 text-gray-300">
//                 <div className="bg-orange-500/10 p-3 rounded-full text-orange-500"><Phone size={24} /></div>
//                 <span className="text-lg">+91 (XXXXX) XXXXXX</span>
//               </div>
//               <div className="flex items-center gap-4 text-gray-300">
//                 <div className="bg-orange-500/10 p-3 rounded-full text-orange-500"><Mail size={24} /></div>
//                 <span className="text-lg">contact@srinuvasulu.com</span>
//               </div>
//             </div>
//           </div>
          
//           <div className="p-12 md:p-20 bg-[#1a1a1a]">
//             <form className="space-y-6">
//               <input type="text" placeholder="Your Name" className="w-full bg-black/50 border border-white/10 p-4 rounded-xl focus:border-orange-500 outline-none transition-colors" />
//               <input type="email" placeholder="Email Address" className="w-full bg-black/50 border border-white/10 p-4 rounded-xl focus:border-orange-500 outline-none transition-colors" />
//               <textarea placeholder="Your Message" rows={4} className="w-full bg-black/50 border border-white/10 p-4 rounded-xl focus:border-orange-500 outline-none transition-colors" />
//               <button className="w-full bg-orange-500 text-black font-bold py-4 rounded-xl hover:bg-white transition-colors">Send Message</button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* 8. FOOTER */}
//       <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
//         <p>© 2026 Srinuvasulu Safety Nets. All Rights Reserved.</p>
//       </footer>
//     </main>
//   );
// }


// --- 1. DATA: SERVICES & IMAGES ---
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", // Luxury Balcony
  "https://images.unsplash.com/photo-1600607687940-4e7a6a859921?auto=format&fit=crop&q=80", // Luxury Living
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80", // Luxury Window
];

const SERVICES = [
  { title: "Anti-Bird Nets", desc: "High-strength protection for balconies.", icon: "🐦" },
  { title: "Balcony Safety Nets", desc: "Premium safety for children & pets.", icon: "🛡️" },
  { title: "Bird Spikes", desc: "Discreet & effective deterrents.", icon: "📍" },
  { title: "Pigeon Safety Nets", desc: "Complete pigeon-free solutions.", icon: "🕊️" },
  { title: "Sports Nets", desc: "Cricket & multi-sport professional nets.", icon: "🏏" },
  { title: "Invisible Grills", desc: "Unobstructed views with maximum safety.", icon: "💎" },
];

// --- 2. COMPONENT: LUXURY NAVBAR ---
// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed w-full z-[100] transition-all duration-500 ${
//       isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
//     }`}>
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center gap-2 cursor-pointer">
//           <ShieldCheck className="text-orange-500" size={28} />
//           <span className="text-white font-bold text-xl tracking-tighter">SRINUVASULU</span>
//         </div>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center gap-10 text-white/80 text-sm font-medium uppercase tracking-widest">
//           <a href="#" className="hover:text-orange-500 transition-colors">Home</a>
//           <a href="#" className="hover:text-orange-500 transition-colors">About Us</a>
//           <a href="#" className="hover:text-orange-500 transition-colors">Services</a>
//           <a href="#" className="hover:text-orange-500 transition-colors">Contact</a>
//           <button className="border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all">
//             Sign Up
//           </button>
//         </div>

//         {/* Mobile Toggle */}
//         <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
//           <Menu size={28} />
//         </button>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div 
//             initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
//             className="fixed inset-0 bg-black z-[110] p-8 flex flex-col"
//           >
//             <div className="flex justify-end"><button onClick={() => setMobileMenuOpen(false)}><X size={32} /></button></div>
//             <div className="flex flex-col gap-8 mt-12 text-3xl font-bold text-white">
//               <a href="#" onClick={() => setMobileMenuOpen(false)}>Home</a>
//               <a href="#" onClick={() => setMobileMenuOpen(false)}>Services</a>
//               <a href="#" onClick={() => setMobileMenuOpen(false)}>About</a>
//               <a href="#" onClick={() => setMobileMenuOpen(false)}>Contact</a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// --- 3. COMPONENT: LUXURY HERO CAROUSEL (FADE EFFECT) ---
const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === HERO_IMAGES.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds per image
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img 
            src={HERO_IMAGES[index]} 
            className="w-full h-full object-cover" 
            alt="Luxury Background" 
          />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-8xl font-extrabold text-white tracking-tighter mb-6"
        >
          Create the Comfort <br /> You <span className="text-orange-500">Deserve</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 font-light"
        >
          Tailored safety net solutions for serene, secure, and bird-free living spaces.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="bg-orange-500 text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
        >
          Explore Our Work
        </motion.button>
      </div>
    </section>
  );
};

// --- 4. MAIN PAGE COMPONENT ---
export default function LandingPage() {
  return (
    <main className="bg-[#0A0A0A] text-white">
     
      <Hero />
     

      {/* WHO WE ARE SECTION */}
      <WhoWeAre />
      <ProductSection />
      
      <ProductImageServices />

      <States />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* <section className="py-24 bg-[#0F0F0F] px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white">What Our Clients Say</h2>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-[#161616] p-10 rounded-[32px] relative text-left">
              <Quote className="text-orange-500/10 absolute top-8 right-8" size={48} />
              <div className="flex text-orange-500 mb-6">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 text-lg mb-8 italic">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-700" />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* CONTACT SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-[#111] rounded-[40px] overflow-hidden grid md:grid-cols-2 border border-white/5">
          <div className="p-12 md:p-20 space-y-10">
            <h2 className="text-4xl font-bold text-white">Let&apos;s Bring Your <br /><span className="text-orange-500">Vision to Life</span></h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-400">
                <Phone className="text-orange-500" /> <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <Mail className="text-orange-500" /> <span>info@srinuvasulu.com</span>
              </div>
            </div>
          </div>
          <div className="p-12 md:p-20 bg-[#1a1a1a]">
            <form className="space-y-6">
              <input type="text" placeholder="Name" className="w-full bg-black/30 border border-white/10 p-4 rounded-xl focus:border-orange-500 outline-none" />
              <input type="email" placeholder="Email" className="w-full bg-black/30 border border-white/10 p-4 rounded-xl focus:border-orange-500 outline-none" />
              <textarea placeholder="Message" rows={4} className="w-full bg-black/30 border border-white/10 p-4 rounded-xl focus:border-orange-500 outline-none" />
              <button className="w-full bg-orange-500 text-black font-bold py-4 rounded-xl hover:bg-white transition-all">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      
    </main>
  );
}
