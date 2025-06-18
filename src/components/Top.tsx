'use client'
import React from 'react'
import Image from 'next/image'; 
import Button from './Button';
import { RainbowButton } from "@/components/magicui/rainbow-button";

const Top = () => {
  return (
    <header className='sticky top-0 z-50 px-15 text-white flex item-center justify-between'>
        <div className=' w-full flex items-center justify-between mx-23 my-3 rounded-full px-2 py-2 bg-transparent outline outline-1 outline-white-500'>
             <div className='flex items-center gap-2'>
        <Image
        src = "/logo.jpg"
        alt='Profile'
        width={40}
        height={40}
        className='rounded-full'/>

        <span className='text-white text-lg font-semibold'>Ravi</span>
        </div>

        <nav className='flex gap-10 text-white font-medium'>
            <a href="#hero">Home</a>
            <a href="#about">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#">Services</a>
            <a href="#projects">Portfolio</a>
            <a href="#contact">Blog</a>
        </nav>
         <RainbowButton className='rounded-full'> Let's Connect</RainbowButton> 
        </div>   
    </header>
  )
}

export default Top