import { MessageSquare, Phone } from 'lucide-react';

const Mobilebar = () => (
  <div className="md:hidden rounded-b-2xl border-t mr-1 ml-1 mt-20 z-25 bg-black/75 backdrop-blur-xl border-b border-white/10 px-2 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-200 overflow-hidden">
    <div className="flex flex-wrap gap-1.5">
      <a
        href="tel:9908233314"
        className="flex min-w-[calc(40%-0.5rem)] flex-1 items-center justify-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-1 text-center transition hover:bg-white/10"
      >
        <Phone className="h-3 w-3" />
        9908233314
      </a>
      <a
        href="https://wa.me/9491008380"
        target="_blank"
        rel="noreferrer"
        className="flex min-w-[calc(40%-0.5rem)] flex-1 items-center justify-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-1 text-center transition hover:bg-white/10"
      >
        <MessageSquare className="h-3 w-3" />
        9491008380
      </a>
    </div>
  </div>
);

export default Mobilebar;
