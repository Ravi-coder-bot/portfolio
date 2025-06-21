import React from 'react'

const Contact = () => {
  return (
    <div className='bg-white w-full h-screen flex items-center justify-center'>
      <div className='bg-black w-11/12 max-w-4xl min-h-[500px] flex flex-row items-center justify-center gap-3 mx-4 sm:mx-8 md:mx-auto p-4 rounded-lg '>
        <div className='w-160 h-120 bg-neutral-800 rounded-lg border-white border'>
          <h1 className='text-white text-2xl font-extrabold mt-5 mx-4 '>Connect With Me</h1>
          <div className='flex flex-col'>
            <div className='mt-5 mx-4 flex flex-row gap-3'>
            <label htmlFor="">First Name</label>
             <input type="text" placeholder='First Name' />
             

          </div>
          </div>
          
        </div>
        <div className='w-120 h-120 bg-neutral-800 rounded-lg border-white border'>

        </div>
      </div>
    </div>
  )
}

export default Contact