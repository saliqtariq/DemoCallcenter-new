import Link from 'next/link';
import { ArrowRight, Headset, Truck, Megaphone, type LucideIcon } from 'lucide-react';
import { SERVICES } from '@/data/services';

const ICONS: Record<string, LucideIcon> = {
  'Call Center Solutions': Headset,
  'Truck Dispatching': Truck,
  'Digital Marketing': Megaphone,
};

export function ServicesSection() {
  return (
    <section id="services" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Strategic services built for tomorrow&apos;s growth
          </h2>
         
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ slug, title, shortDescription }) => {
            const Icon = ICONS[title] ?? Headset;
            return (
            <Link
              key={title}
              href={`/services/${slug}`}
              className="group/card bg-white text-black p-10 rounded-2xl flex flex-col min-h-[340px] border border-zinc-100 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
            >
              <div className="bg-zinc-100 w-16 h-16 rounded-xl flex items-center justify-center mb-8 transition-colors duration-300 group-hover/card:bg-zinc-200">
                <Icon className="w-8 h-8 stroke-[1.5] transition-transform duration-300 group-hover/card:scale-110" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-black leading-relaxed flex-1">{shortDescription}</p>

              <span className="mt-8 inline-flex items-center gap-3 w-fit">
                <span className="relative text-sm font-semibold tracking-tight">
                  <span className="relative z-10">View details</span>
                  <span
                    className="absolute bottom-0 left-0 h-px w-0 bg-black transition-all duration-300 ease-out group-hover/card:w-full"
                    aria-hidden
                  />
                </span>
                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black/15 bg-transparent transition-all duration-300 group-hover/card:border-black group-hover/card:bg-black">
                  <ArrowRight
                    className="h-4 w-4 transition-all duration-300 group-hover/card:translate-x-5 group-hover/card:opacity-0"
                    aria-hidden
                  />
                  <ArrowRight
                    className="absolute h-4 w-4 -translate-x-5 text-white opacity-0 transition-all duration-300 group-hover/card:translate-x-0 group-hover/card:opacity-100"
                    aria-hidden
                  />
                </span>
              </span>
            </Link>
          )})}
        </div>
      </div>
    </section>
  );
}
