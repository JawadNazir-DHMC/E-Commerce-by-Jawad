import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const Newsletter = () => {
  return (
    <section className='p-40 flex flex-col justify-center text-center items-center relative z-0'>
        { <div className='font-bold text-9xl    text-gray-100 absolute -z-20 '>
            News Letter
        </div> }
        <h1 className='text-4xl font-bold text-center my-0'>Subscribe our News letter</h1>
        <p className='mt-6 text-center'>Get the latest information and promo offers directly</p>
        <div className='mt-8 flex flex-row gap-x-3' >
            <Input className='w-80' type='email' placeholder='Enter your Email Here'/>
            <Button className='w-30 py-3 bg-black text-white' type="submit">Get Started</Button>
        </div>
    </section>
  )
}

export default Newsletter