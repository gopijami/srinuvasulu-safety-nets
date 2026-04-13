"use client";
import { motion } from 'framer-motion';
import { ShoppingCart, ArrowRight } from 'lucide-react';

interface Product {
  id: number;
  category: string;
  title: string;
  price: string;
  description: string;
  tags: string[];
  image: string;
  themeColor: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    category: 'Bird Control',
    title: 'Anti-Bird Nets',
    price: '₹2,000',
    description: 'Heavy-duty HDPE netting designed to keep your balcony bird-free and hygienic.',
    tags: ['Durable', 'UV Resistant'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80',
    themeColor: 'rgba(255, 132, 82, 0.32)',
  },
  {
    id: 2,
    category: 'Safety Systems',
    title: 'Balcony Safety',
    price: '₹5,500',
    description: 'Invisible protection for children and pets without blocking your view.',
    tags: ['Child Safe', 'Clear View'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    themeColor: 'rgba(255, 201, 68, 0.28)',
  },
  {
    id: 3,
    category: 'Sports Gear',
    title: 'Cricket Practice Nets',
    price: '₹8,000',
    description: 'Professional grade nylon netting for high-impact sports training.',
    tags: ['Pro Grade', 'High Impact'],
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80',
    themeColor: 'rgba(96, 165, 250, 0.24)',
  },
  {
    id: 4,
    category: 'Bird Control',
    title: 'Invisible Grills',
    price: '₹3,500',
    description: 'Discreet protection for your windows and balconies.',
    tags: ['Invisible', 'Durable'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80',
    themeColor: 'rgba(255, 132, 82, 0.32)',
  },
];

const CinematicCard = ({ product }: { product: Product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      whileHover={{ y: -8 }}
      className="relative group"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[40px] blur-3xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{ background: product.themeColor }}
      />

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0f0b09]/95 shadow-[0_45px_120px_rgba(0,0,0,0.45)] transition duration-500 group-hover:border-white/20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/75" />
        <div className="relative overflow-hidden h-72 rounded-[36px]">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[0.65rem] uppercase tracking-[0.35em] text-white shadow-lg shadow-black/50 backdrop-blur-xl">
            {product.category}
          </div>
          <div className="absolute right-4 top-4 inline-flex items-center rounded-full bg-[#fabf7f]/10 px-4 py-2 text-sm font-semibold text-[#f3b95a] shadow-lg shadow-[#f3b95a]/10 backdrop-blur-xl">
            {product.price}
          </div>
        </div>

        <div className="relative space-y-6 p-8">
          <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#f9b86d]">
            {product.title}
          </h3>
          <p className="text-sm leading-7 text-slate-300">{product.description}</p>

          <div className="flex flex-wrap gap-3">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.5rem] uppercase tracking-[0.35em] text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.96 }}
            className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#f6b475]/20 bg-gradient-to-r from-[#f8c07a]/10 via-white/10 to-[#f6b475]/10 px-6 py-3 text-sm font-semibold text-[#f6b475] shadow-[0_18px_45px_rgba(246,180,117,0.18)] transition duration-300 hover:bg-[#f6b475]/20"
          >
            <ShoppingCart size={18} />
            Add To Cart
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProductSection() {
  return (
    <section className="relative overflow-hidden bg-[#120b08] py-24 px-6 text-white">
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute right-0 top-24 h-[360px] w-[360px] rounded-full bg-slate-300/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-[#f8c07a] mb-4">Premium Solutions</p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our Bird Control Services
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS.map((product) => (
            <CinematicCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
