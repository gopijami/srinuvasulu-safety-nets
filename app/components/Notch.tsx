"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface CinematicCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
}

const CinematicCard = ({ image, title, description, category }: CinematicCardProps) => {
  return (
    <div className="relative w-full max-w-[400px] aspect-[4/5] group">
      
      {/* 1. THE SVG CLIP-PATH DEFINITION */}
      {/* This path creates: Top-left/right rounding + Bottom-left rounding + The Bottom-right notch */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="notched-shape" clipPathUnits="objectBoundingBox">
            <path d="
              M 0,0.05 
              C 0,0.02 0.02,0 0.05,0 
              H 0.95 
              C 0.98,0 1,0.02 1,0.05 
              V 0.72 
              C 0.72,0.72 0.72,1 1,1 
              H 0.05 
              C 0.02,1 0,0.98 0,0.95 
              Z
            " />
          </clipPath>
        </defs>
      </svg>

      {/* 2. THE IMAGE CONTAINER (Applying the notch) */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-full relative overflow-hidden"
        style={{ clipPath: 'url(#notched-shape)' }}
      >
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
        />
        {/* Cinematic Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      </motion.div>

      {/* 3. THE BUTTON (Placed exactly in the notch) */}
      {/* We use a thick border to blend the button into the 'cutout' of the image */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-0 right-0 w-24 h-24 md:w-28 md:h-28 bg-[#FF8C00] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,140,0,0.5)] z-30 border-[8px] border-[#0A0A0A]"
      >
        <ArrowUpRight className="text-black w-10 h-10 md:w-12 md:h-12" strokeWidth={3} />
      </motion.button>

      {/* 4. TEXT CONTENT (Bottom Left) */}
      <div className="absolute bottom-10 left-8 z-20 max-w-[65%]">
        <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">
          {category}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-gray-400 text-xs md:text-sm font-light opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          {description}
        </p>
      </div>
    </div>
  );
};

// --- PREVIEW SECTION ---
export default function Gallery() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        <CinematicCard 
          category="Safety"
          title="Balcony Nets"
          description="High-strength, UV-resistant protection for your family."
          image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
        />
        <CinematicCard 
          category="Sports"
          title="Cricket Nets"
          description="Professional grade training nets for academies."
          image="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80" 
        />
        <CinematicCard 
          category="Bird"
          title="Pigeon Control"
          description="Effective and aesthetic anti-bird solutions."
          image="https://images.unsplash.com/photo-1600607687940-4e7a6a859921?auto=format&fit=crop&q=80" 
        />
      </div>
    </div>
  );
}