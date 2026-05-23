'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

const MENU_LINKS = ['Solutions', 'Technology', 'Industries', 'Resources', 'About'];

export function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section
      className="relative text-white min-h-[78vh] md:min-h-screen overflow-hidden flex flex-col justify-between bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.62), rgba(0,0,0,0.62)), url('/images/againfixed.png')",
      }}
    >

      <header className="relative z-10 flex items-center justify-between px-6 md:px-8 py-5 w-full bg-black border-b border-white/10">
        <h1 className="text-[22px] leading-none font-normal tracking-[-0.02em] text-white select-none">
          Demo Tech
        </h1>

        <div
          onClick={() => setIsMenuOpen(true)}
          className="w-6 h-5 flex flex-col justify-between cursor-pointer group"
        >
          <span className="block h-[2px] bg-zinc-100 transition-transform group-hover:scale-x-110 origin-right" />
          <span className="block h-[2px] bg-zinc-100 transition-transform group-hover:scale-x-90 origin-right" />
          <span className="block h-[2px] bg-zinc-100 transition-transform" />
        </div>
      </header>

      <div className="relative z-10 w-full px-5 sm:px-6 md:px-12 lg:px-16 pt-4 sm:pt-8 md:pt-16 pb-12 md:pb-24 flex-1 flex items-center justify-center md:justify-start">
        <div className="w-full max-w-[22rem] sm:max-w-xl md:max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          <h1
            className="font-semibold text-white tracking-[-0.02em]"
            style={{
              fontSize: 'clamp(1.65rem, 5.5vw, 3.5rem)',
              lineHeight: 1.08,
            }}
          >
            <span className="block whitespace-nowrap">Powering intelligent</span>
            <span className="block">call systems to</span>
            <span className="block">drive better growth</span>
          </h1>

          <p className="mt-5 md:mt-6 mx-auto md:mx-0 max-w-[20rem] sm:max-w-md md:max-w-xl text-[0.9375rem] md:text-[1.0625rem] leading-[1.45] font-normal text-white/90">
            Navigate business growth with confidence by unifying outbound sales,
            inbound support, and lead generation in a scalable operating model
          </p>

          <div className="mt-7 md:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-[20rem] sm:max-w-[520px] mx-auto md:mx-0">
            <button
              type="button"
              className="w-full bg-white text-black py-3.5 rounded-md text-[0.9375rem] font-medium hover:bg-zinc-200 transition cursor-pointer select-none sm:w-auto sm:px-6"
            >
              Get Free Consultation
            </button>
            <button
              type="button"
              className="w-full bg-transparent text-white py-3.5 rounded-md text-[0.9375rem] font-medium border border-white/70 hover:bg-white/10 transition cursor-pointer select-none sm:w-auto sm:px-6"
            >
              Book Demo
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute inset-0 bg-black/95 backdrop-blur-xl z-50 flex flex-col justify-center px-8 md:px-16 lg:px-24">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 text-white hover:opacity-80 transition cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="flex flex-col gap-6 text-3xl md:text-5xl font-bold tracking-tight">
            {MENU_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="text-white opacity-95 transition-all hover:text-green-400 hover:translate-x-[15px]"
                style={{ transition: 'all 0.3s ease' }}
              >
                {link}
              </a>
            ))}
            <div className="h-[1px] bg-white/10 my-4" />
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-medium text-gray-400 hover:text-white transition"
            >
              Log in
            </a>
          </div>
        </div>
      )}
    </section>
  );
} 
