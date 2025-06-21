'use client'
import React from 'react'
import { easeInOut, motion } from "motion/react";
import  Image from 'next/image' 

interface SkillProps {
   skill  : string ;
   image : string ;
   color : string ;
}

const Skill: React.FC<SkillProps> = ({skill,image,color}) => {
  
  return (
    <motion.div
    initial={{
      opacity : 0,
      y :100 ,
    }}
     whileInView ={{
      opacity : 1,
      y : 0 ,
      transitionDelay : 1,
      transitionDuration : 0.8 ,
    }}
     whileHover={{
        rotateX : 25,
        rotateY : 10,
        y : -7,
        boxShadow : `0px 20px 50px ${color}70`,
      }}
      
      style={{
        transformStyle: "preserve-3d",
        translateZ : 100  ,
      }}
      transition={{
        duration : 0.3,
        ease : easeInOut, 
      }}
     className='group flex flex-col items-center justify-center rounded-lg'>
      <motion.div
       className='group relative flex flex-row items-center justify-around bg-black w-full h-auto py-1 px-2 gap-3 rounded-lg 
      shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]'>
        <Image
          src= {image}
          alt= {skill}
          width={30}
          height={30}
          className='rounded-full'
        />
        <span style={{color : color}}  className='group-hover:text-cyan-500 text-neutral-500 text-xl'>{skill}</span>
      </motion.div>
      
     <span className='inset-x-0 bottom-px h-[2px] w-3/4 bg-gradient-to-r from-transparent to-transparent' style={{ background: `linear-gradient(to right, transparent, ${color}, transparent)` }}></span>
<span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px h-[2px] w-full bg-gradient-to-r from-transparent to-transparent blur-md' style={{ background: `linear-gradient(to right, transparent, ${color}, transparent)` }}></span>   
    </motion.div> 
  )
}

export default Skill