import React from "react";
import Feature from "/public/Girl.webp";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Unique = () => {
  return (
    <section className='mt-16'>
      <div className='flex justify-end pt-0 pr-14 pb-8 bg-gradient-to-r from-white to-[#FBFCFF] '>
        <h1 className="font-extrabold text-5xl tracking-[.05] leading-[1] w-45">Unique and<br/> Authentic Vintage<br/> Designer Jewellery</h1>
      </div>

      <div className='grid grid-cols-2 px-32 pt-0 pr-14 pb-8 gap-x-14 bg-[#FBFCFF] '>
        <div className='grid grid-cols-2 mb-36  justify-center items-center relative'>
          <div className="font-extrabold text-9xl mt-7 leading-[1] absolute text-[#212121] z-[1] opacity-5">
            Different from others
          </div>
          <div className="w-70 z-[2]">
            <h3 className="font-semibold text-2xl tracking-[.03] mb-4 text-[#212121]">Using Good Quality Materials</h3>
            <p className="font-light text-base tracking-[.05] text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className="w-70 z-[2]">
            <h3 className="font-semibold text-2xl tracking-[.03] mb-4 text-[#212121]">100% Handmade Products</h3>
            <p className="font-light text-base tracking-[.05] text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className="w-70 z-[2]">
            <h3 className="font-semibold text-2xl tracking-[.03] mb-4 text-[#212121]">Modern Fashion<br/> Design</h3>
            <p className="font-light text-base tracking-[.05] text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className="w-70 z-[2]">
            <h3 className="font-semibold text-2xl tracking-[.03] mb-4 text-[#212121]">Discount for Bulk Orders</h3>
            <p className="font-light text-base tracking-[.05] text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className='flex justify-center items-center mb-20 gap-10'>
          <Image src={Feature} width={300} height={350}  alt='img' />
          <div>
            <p className="font-light text-base text-justify leading-[1.5] text-[#212121]">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
            <Link href={'./'}>
              <Button className="bg-black text-gray-100 text-center w-24 py-6 mt-14">See All Product</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Unique;
