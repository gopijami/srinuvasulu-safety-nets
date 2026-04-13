import { X, Globe, AtSign, Share2, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.5rem] border border-orange-500/15 bg-orange-500/10 text-orange-300 shadow-[0_15px_40px_rgba(255,140,48,0.12)]">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-orange-300/80">Srinuvasulu</p>
                <p className="text-xl font-semibold">Safety Nets</p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-300">
              Trusted bird-control installations for balconies, windows, and terraces. Invisible safety solutions designed to protect your home without compromising the view.
            </p>
            <div className="flex items-center gap-3 text-slate-200">
              <a href="#" aria-label="Social" className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-orange-500 hover:text-black">
                <Globe className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Social" className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-orange-500 hover:text-black">
                <X className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Social" className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-orange-500 hover:text-black">
                <AtSign className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Social" className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-orange-500 hover:text-black">
                <Share2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.35em] text-orange-300/80">About us</h3>
            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              <li><a href="#" className="transition hover:text-white">Our Work</a></li>
              <li><a href="#" className="transition hover:text-white">Community</a></li>
              <li><a href="#" className="transition hover:text-white">Gallery</a></li>
              <li><a href="#" className="transition hover:text-white">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.35em] text-orange-300/80">Services</h3>
            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              <li><a href="#" className="transition hover:text-white">Balcony Safety Nets</a></li>
              <li><a href="#" className="transition hover:text-white">Anti-Bird Nets</a></li>
              <li><a href="#" className="transition hover:text-white">Invisible Grills</a></li>
              <li><a href="#" className="transition hover:text-white">Bird Spike Installations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.35em] text-orange-300/80">Contact</h3>
            <div className="mt-6 space-y-5 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-orange-300"><Mail className="h-4 w-4" /></div>
                <div>
                  <p className="text-white">contact@srinuvasulu.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-orange-300"><Phone className="h-4 w-4" /></div>
                <div>
                  <p className="text-white">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-orange-300"><MapPin className="h-4 w-4" /></div>
                <div>
                  <p className="text-white">154 Meadowcrest Lane</p>
                  <p className="text-slate-400 text-sm">Harold, KY 41635</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-sm text-slate-400 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 © Srinuvasulu Safety Nets.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="transition hover:text-white">Terms & Condition</a>
            <a href="#" className="transition hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
