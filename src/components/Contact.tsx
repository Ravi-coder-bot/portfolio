'use client'
import React from 'react'
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className='bg-white w-full h-screen flex items-center justify-center'>
      <motion.div
      initial = {{
        opacity : 0,
        y : 100 ,
      }}
      whileInView={{
        opacity : 1 ,
        y : 0,
      }}
      transition={{
        duration : 0.9,
        delay : 0.3,
      }}
       className='bg-black w-11/12 max-w-4xl min-h-[500px] flex flex-row items-center justify-center gap-3 mx-4 sm:mx-8 md:mx-auto p-4 rounded-lg '>
      {/* Form Section  */}
        <div className='w-160 h-120 bg-neutral-800 rounded-lg border-white border'>
          <h1 className='text-white text-2xl font-extrabold mt-5 mx-4 '>Connect With Me</h1>
          
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-col-2 max-xl:grid-cols-2 gap-3'>
              <div className='mt-3 mx-4 flex flex-col gap-2'>
                  <label htmlFor="" className='text-white text-md font-bold'>First Name</label>
                  <input className='bg-neutral-400 text-white rounded-sm ' type="text" placeholder='First Name' />
               </div>
               <div className='mt-3 mx-4 flex flex-col gap-2  '>
                  <label htmlFor="" className='text-md font-bold text-white'>Last Name</label>
                  <input type="text" className='bg-neutral-400 text-white rounded-sm ' placeholder='Last Name' />
               </div>
               <div className='mt-3 mx-4 flex flex-col gap-2  '>
                  <label htmlFor="" className='text-md font-bold text-white'>Email</label>
                  <input type="text" className='bg-neutral-400 text-white rounded-sm ' placeholder='Email' />
               </div>
               <div className='mt-3 mx-4 flex flex-col gap-2  '>
                  <label htmlFor="" className='text-md font-bold text-white'>Ph: number</label>
                  <input type="text" className='bg-neutral-400 text-white rounded-sm' placeholder='Ph: number' />
               </div>
            </div>
           <div className='mt-5 mx-4 flex flex-col gap-2  '>
                  <label htmlFor="" className='text-md font-bold text-white'>Your requirment</label>
                  <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 '>
                    <button className='w-auto h-auto  bg-neutral-500 text-white rounded-sm py-1 border'>Frontend Devlopment</button>
                   <button className='w-auto h-auto  bg-neutral-500 text-white rounded-sm py-1 border border-white'>Backend Devlopment</button>
                    <button className='w-auto h-auto  bg-neutral-500 text-white rounded-sm py-1'>Web3 Devlopment</button>
                    <button className='w-auto h-auto  bg-neutral-500 text-white rounded-sm py-1'>AI Research </button>
                  </div> 
               </div>

               <div className=' mx-4 mt-4 flex flex-col'>
                <label htmlFor="" className=' text-md font-bold text-white'>How can i help you ?</label>
                <textarea name="message" id="message" rows={4}
                className="overflow-hidden resize-none mt-2 text-md text-white font-bold h-15 w-auto rounded-sm bg-neutral-400 px-3 py-2" 
                 placeholder='Tell me about your project, goals, and how I can assist you...'
                 required ></textarea>
               </div>
        </div>
        <div className='w-120 h-120 bg-neutral-800 rounded-lg border-white border'>

        </div>
      </motion.div>
    </div>
  )
}

export default Contact