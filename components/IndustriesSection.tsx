'use client';

import { useState } from 'react';
import { INDUSTRIES, DEFAULT_INDUSTRY_SLUG } from '@/data/industries';

export function IndustriesSection() {
  const [activeSlug, setActiveSlug] = useState(DEFAULT_INDUSTRY_SLUG);
  const industry =
    INDUSTRIES.find((item) => item.slug === activeSlug) ?? INDUSTRIES[0];

  return (
    <section id="industries" className="bg-white py-10 md:py-16 px-6 text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-8 md:mb-14">
          Serving the industries that drive the economy
        </h2>

        <div
          className="flex overflow-x-auto overflow-y-hidden justify-start lg:justify-center gap-6 md:gap-8 mb-8 md:mb-12 border-b border-zinc-200 pb-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Industry categories"
        >
          {INDUSTRIES.map(({ slug, tabLabel }) => {
            const isActive = slug === activeSlug;
            return (
              <button
                key={slug}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveSlug(slug)}
                className={`text-base md:text-lg font-medium pb-4 -mb-[17px] whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'text-black border-b-2 border-black'
                    : 'text-black hover:text-black'
                }`}
              >
                {tabLabel}
              </button>
            );
          })}
        </div>

        <div
          key={activeSlug}
          role="tabpanel"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start"
        >
          <div className="rounded-2xl overflow-hidden aspect-[16/10] lg:aspect-[4/3] bg-zinc-100 order-2 lg:order-1">
            <img
              src={industry.image}
              alt={industry.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2 self-start">
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.1]">
              {industry.title}
            </h3>
            <p className="text-black leading-relaxed mb-6 md:mb-8 text-base md:text-lg">
              {industry.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                type="button"
                className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                Learn More
              </button>
              <button
                type="button"
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold border border-zinc-300 hover:bg-zinc-100 transition-colors cursor-pointer"
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
