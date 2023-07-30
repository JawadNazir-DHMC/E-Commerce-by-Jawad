import React from 'react'
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import heroimage from "/public/Hero.webp"
import Feature1 from"/public/Featured1.webp"
import Feature2 from"/public/Featured2.webp"
import Feature3 from"/public/Featured3.webp"
import Feature4 from"/public/Featured4.webp"
import Image from 'next/image'
const Hero = () => {
  return ( 
    <section className='flex flex-col  lg:flex-row gap-y-10 py-6'>
        {/* Left Div */}
        <div className='flex-1' >
        <Badge className='py-3 px-4 rounded-lg  bg-blue-200 text-blue-700' >Sale 70%</Badge>
        <h1 className="scroll-m-20 text-10xl mt-6 font-extrabold tracking-tight lg:text-5xl">
        An Industrial Take on Streetwear
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
      </p>
      
        
      <Button className='bg-gray-800 h-16 w-13 px-8 mt-4 text-white'><ShoppingCart className='h-6 w-6'/>Start Shopping</Button>
      
        
        <div className=' mt-10  flex  gap-x-5 '>
          <Image src={Feature1} alt="Feature"/>
          <Image src={Feature2}  alt="Feature"/>
          <Image src={Feature3} alt="Feature"/>
          <Image src={Feature4} alt="Feature"/>
        </div>
        </div>
        
            {/* Right Div */}
            <div className='flex-1 rounded-full h-25 w-21 bg-pink-100 items-center relative '>
        <Image src={heroimage} alt="Poster" />
        </div>
        
    </section>  )
}

export default Hero