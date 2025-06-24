"use client"
import React, { useRef } from 'react'
import { IconHome, IconBriefcase , IconBrandGithub, IconBrandLinkedin, IconBrandX, IconMail } from '@tabler/icons-react';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { MotionValue } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';



/*************  ✨ Windsurf Command 🌟  *************/
const Footer = () => {
  return (
    <div className='bg-white h-screen w-full relative'>
      <FloatingFooter/>
    </div>
  )
}
/*******  ffc2d324-1b4c-4e1d-b299-4cd8793bf388  *******/

export default Footer;

type Link = {
  title : string,
  icon : React.ReactNode | any,
  href : string
}

const FloatingFooter = () => {
  
  const links : Link[] = [
    {
    title : "Home",
    icon : <IconHome className='h-full w-full text-neutral-300'/>, 
    href : '/'
     },
     {
      title : "Projects",
      icon : <IconBriefcase className='h-full w-full text-neutral-300'/>,
      href : '/'
     },
     {
      title : "Github",
      icon : <IconBrandGithub className='h-full w-full text-neutral-300'/>,
      href : '/'
     },
     {
      title : "Linkdin",
      icon : <IconBrandLinkedin className='h-full w-full text-neutral-300'/>,
      href :'/'
     },
     {
      title : "X",
      icon :  <IconBrandX className='h-full w-full text-neutral-300'/>,
      href : '/'
     },
     {
      title : "Email",
      icon : <IconMail className='h-full w-full text-neutral-300'/>,
      href : '/'
     }
   ]

  const mouseX = useMotionValue(Infinity);
 
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={(e) => mouseX.set(Infinity)}
      className='absolute flex justify-center items-center gap-3 bottom-10 inset-x-0 mx-auto h-16 w-fit bg-neutral-500 rounded-2xl px-4'>
      {links.map((el,idx) => (
        <IconContainer mouseX={mouseX} key={el.title} el={el}/>
      ))}
    </motion.div>
  )
}

export const IconContainer = ({el,mouseX} : {el : Link;mouseX : MotionValue<number>}) =>{

  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(
    mouseX,(val)=>{
      let bound = ref?.current?.getBoundingClientRect() ?? {x:0,width :0};
      return val-bound.x-bound.width/2;
    }
  );

  let widthTransform = useTransform(distance,[-150,0,150],[40,80,40]);
  let heightTransform = useTransform(distance,[-150,0,150],[40,80,40]);

  let widthIcon = useTransform(distance,[-150,0,150],[20,40,20]);
  let heightIcon = useTransform(distance ,[-150,0,150],[20,40,20]);

  let width = useSpring(widthTransform ,{
    stiffness : 150,
    damping : 12,
    mass : 0.1
  });

  let height = useSpring(heightTransform ,{
    stiffness : 150,
    damping : 12,
    mass : 0.1
  });


   const [hovered,setHovered] = useState(false);

  return (
    <Link href={el.href}
    onMouseEnter={()=>setHovered(true)}
    onMouseLeave={()=>setHovered(false)}
    >
     <motion.div
     ref = {ref}
     style ={{
      width : width,
      height : height,
      
     }}
      className='relative bg-neutral-700 h-12 w-12 flex items-center justify-center rounded-full'>
        <AnimatePresence>
        {hovered && (
          <motion.div
          initial = {{
            opacity : 0,
            y : 10
          }}

          animate = {{
            opacity : 1,
            y : 0
          }}

          exit = {{
            opacity : 0,
            y : 2
          }}
          
          transition={{
            duration : 0.3,
            ease : 'easeInOut'
          }}

           className='absolute left-1/2 -translate-x-1/2 px-2 py-0.5 whitespace-pre text-xs -top-8 bg-neutral-100 rounded-md text-neutral-500'>
            {el.title}
          </motion.div>
        )}
        </AnimatePresence>
        <motion.div className='flex items-center justify-cneter ' 
        ref = {ref} 
        style={{
          height : heightIcon,
          width : widthIcon
        }} >
           {el.icon}
        </motion.div>
     
      </motion.div>
     </Link>
  )
}