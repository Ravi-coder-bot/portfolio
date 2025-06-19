'use client';
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from '@/components/ui/lamp'

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-4 py-2 bg-gradient-to-bl from-[#0f1a2f] to-transparent ">
        <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        RAVI <br /> PORTFOLIO
      </motion.h1>
    </LampContainer>
      <p className="text-blue-400 font-medium mb-2">Design in <span className="underline underline-offset-4">Details</span></p>
      
      <h1 className="text-6xl sm:text-8xl font-extrabold tracking-tight relative">
        PORTFOLIO
        <span className="absolute left-1/2 transform -translate-x-1/2 text-[10rem] text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
          {/* You can insert a 3D logo overlay here or use a component */}
        </span>
      </h1>

      <p className="text-yellow-400 mt-4 text-xl font-signature">Ravi</p>
    </section>
  );
};

export default Hero;
