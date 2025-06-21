'use client'
import React from 'react'
import { motion } from "motion/react";
import Skill from '@/components/ui/skill'

interface SkillData {
  name: string;
  image: string;
  color: string;
}


const Skills : React.FC = () => {
 
   const skillsArray: SkillData[] = [
    {
      name: "JavaScript",
      image: "/icons/javascript.svg",
      color: "#F7DF1E"
    },
    {
      name: "TypeScript",
      image: "/icons/typescript.svg",
      color: "#3178C6"
    },
    {
      name: "React.js",
      image: "/icons/react.png",
      color: "#61DAFB"
    },
    {
      name: "Next.js",
      image: "/icons/nextjs.png",
      color: "#FFFFFF"
    },
    {
      name: "HTML5",
      image: "/icons/html5.svg",
      color: "#E34F26"
    },
    {
      name: "CSS3",
      image: "/icons/css3.svg",
      color: "#1572B6"
    },
    {
      name: "Tailwind",
      image: "/icons/tailwindcss.png",
      color: "#06B6D4"
    },
    {
      name: "Redux",
      image: "/icons/redux.png",
      color: "#764ABC"
    },
    {
      name: "Node.js",
      image: "/icons/nodejs.svg",
      color: "#339933"
    },
    {
      name: "Express.js",
      image: "/icons/express.svg",
      color: "#68A063"
    },
    {
      name: "C++",
      image: "/icons/c++.png",
      color: "#00599C"
    },
    {
      name: "MongoDB",
      image: "/icons/mongodb.png",
      color: "#47A248"
    },
    {
      name: "Firebase",
      image: "/icons/firebase.svg",
      color: "#FFCA28"
    },
    {
      name: "Git",
      image: "/icons/git.svg",
      color: "#F05032"
    },
    {
      name: "GitHub",
      image: "/icons/github.svg",
      color: "#FFFFFF"
    },
    {
      name: "Vercel",
      image: "/icons/vercel.svg",
      color: "#FFFFFF"
    },
    {
      name: "Netlify",
      image: "/icons/netlify.png",
      color: "#00C7B7"
    },
    {
      name: "Framer Motion",
      image: "/icons/framer.png",
      color: "#0055FF"
    },
    {
      name: "AI/ML",
      image: "/icons/ai.svg",
      color: "#FF6B6B"
    },
    {
      name: "APIs",
      image: "/icons/api.png",
      color: "#4ECDC4"
    }
  ];

  return (
     <div className='h-screen w-full bg-neutral-900 flex flex-col items-center justify-center'>
      <motion.h1 
      initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      className='text-3xl md:text-5xl font-extrabold top-0 mt-5 bg-gradient-to-r from-cyan-500 via-slate-300 to-cyan-500 text-transparent bg-clip-text'
      >
        Skills and  Technologies
       </motion.h1>
      <div
      className='mt-15 w-auto h-auto bg-neutral-900 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 max-w-6xl gap-3'>
       {skillsArray.map((skillData, index) => (
          <Skill key={index} 
          skill={skillData.name}
          image={skillData.image}
          color={skillData.color} />
        ))}
      </div>
     </div>
  )
}

export default Skills