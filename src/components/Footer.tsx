"use client"
import React, { useRef } from 'react'
import { IconHome, IconBriefcase , IconBrandGithub, IconBrandLinkedin, IconBrandX, IconMail } from '@tabler/icons-react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { MotionValue } from 'motion/react';
import Link from 'next/link';


const Footer = () => {
  return (
    <div className='bg-white h-screen w-full relative'>
      <FloatingFooter/>
    </div>
  )
}

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

  let width = useTransform(distance,[-100,0,100],[40,80,40]);
  let height = useTransform(distance,[-100,0,100],[40,80,40]);
  let rotate = useTransform(distance,[-100,0,100],[-20,0,20]);

  return (
    <Link href={el.href}>
     <motion.div
     ref = {ref}
     style ={{
      width : width,
      height : height,
      
     }}
      className='bg-neutral-700 h-12 w-12 flex items-center justify-center rounded-md'>
      {el.icon}
      </motion.div>
     </Link>
  )
}