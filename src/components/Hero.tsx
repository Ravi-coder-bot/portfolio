'use client';
import React from "react";
import { easeOut, motion } from "motion/react";
import { LampContainer } from '@/components/ui/lamp'

const Hero = () => {
  return (
    <section className=" flex flex-col items-center justify-center h-screen bg-black text-white text-center  bg-gradient-to-bl from-[#0f1a2f] to-transparent ">
      <div className="w-full position-fixed"   >
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
        Hey! I am
  
      </motion.h1>
      <br />
      
      <motion.h1
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{duration : 0.8 ,delay: 0.3, ease : 'easeInOut'}}
      className="text-5xl md:text-8xl font-extrabold text-center bg-gradient-to-r from-cyan-500 via-slate-300 to-cyan-500 text-transparent bg-clip-text"
      >
        Ravi Benwial 
      </motion.h1>
    </LampContainer>
      </div>
       
    </section>
  );
};

export default Hero;
