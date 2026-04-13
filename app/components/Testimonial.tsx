import { Quote, Star } from "lucide-react";


const TESTIMONIALS = [
  { name: "Archana Kolloju", photo: '/customers/archana-got-anti-bird-nets-installation.webp', role: "Apartment Resident", text: "The Anti bird nets installed by Srinuvasulu are invisible and highly effective!", rating: 5 },
  { name: "Sindhu Nangunuri", photo: '/customers/Sindhu-Nangunuri-installed-safety-nets-for-balcony.webp', role: "Software Engineer", text: "Best service for balcony safety. The team was professional and clean.", rating: 5 },
  { name: "Shafi Mohamad", photo: '/customers/Shafi-got-installaed-balcony-safety-nets.webp', role: "Software Engineer", text: "The balcony safety nets are completely invisible and have kept pigeons away without blocking our view.", rating: 5 },
{ name: "Spoorthi Roy", photo: '/customers/Spoorthi-Roy-bird-spikes-installation.webp', role: "Apartment Owner", text: "The bird spikes were installed cleanly and effectively — my balcony has stayed bird-free ever since.", rating: 5 },
{ name: "Bhavya Challa", photo: '/customers/Bhavya-challa-got-installed-invisible-grills-installation.webp', role: "Business Owner", text: "The invisible grills look great and give our family peace of mind with excellent workmanship.", rating: 5 },
];

export default function Testimonials() {
  return (
   <section className="py-10 bg-[#0F0F0F] px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r text-3xl font-semibold from-white via-slate-100  to-orange-300">What Our Clients Say</h2>
        </div>
        <div className="max-w-5xl mx-auto overflow-x-auto pb-4 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex gap-8 px-2 min-w-max scroll-smooth snap-x snap-mandatory">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="snap-start flex-shrink-0 w-[320px] sm:w-[360px] md:w-[420px] bg-[#161616] p-10 rounded-[32px] relative text-left">
                <Quote className="text-orange-500/10 absolute top-8 right-8" size={48} />
                <div className="flex text-orange-500 mb-6">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 text-lg mb-8 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 overflow-hidden rounded-full bg-gray-700">
                    <img
                      src={t.photo}
                      alt={`${t.name} photo`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
