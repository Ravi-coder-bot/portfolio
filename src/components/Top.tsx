'use client';

import React from 'react';
import Image from 'next/image';
import { RainbowButton } from '@/components/magicui/rainbow-button';

const Top = () => {
  return (
    <header className="sticky top-4 z-50 w-full flex justify-center px-35">
      <div className="w-full max-w-7xl flex items-center justify-between px-2 py-2 rounded-full border border-[#3b3b3b] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f1b1c] via-black to-black backdrop-blur-md shadow-[0_0_20px_rgba(0,255,255,0.05)]">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-[#f4cd8a] text-lg font-semibold">Ravi</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 text-[#f4cd8a] font-medium text-sm">
          <a href="#hero" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About Me</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#projects" className="hover:text-white transition">Portfolio</a>
          <a href="#contact" className="hover:text-white transition">Blog</a>
        </nav>

        {/* CTA Button */}
        <div className="ml-4">
          <RainbowButton className="rounded-full px-4 py-2 text-sm">
            Let&apos;s Connect
          </RainbowButton>
        </div>
      </div>
    </header>
  );
};

export default Top;
