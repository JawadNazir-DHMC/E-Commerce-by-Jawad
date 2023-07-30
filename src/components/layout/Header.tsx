"use client"
import { useSelector } from 'react-redux'
import { RootState } from '@/Store/Store'
import React from 'react'
import Logo from "/public/logo.webp"
import Image from 'next/image'
import Link from 'next/link'
import {SearchIcon, ShoppingCart} from "lucide-react"
import { Input } from '../ui/input'
const Header = () => {
    const cartValue = useSelector((state: RootState) => state.cart.totalQuantity);
  return (
    <div className='flex justify-evenly items-center py-6 px-8 '>
        
        <Image src={Logo} alt="logo" className='w-40'/>
        
        <ul className='flex gap-x-10'>
            <li  className='text-lg'>
                <Link href={"/category/Male"}>
                Male
                </Link>
                </li >
            <li  className='text-lg'>
                <Link href={"/category/Female"}>
                Female
                </Link>
                </li >
            <li  className='text-lg'>
                <Link href={"/category/Kids"}>
                Kids
                </Link>
                </li >
            <li  className='text-lg'>
                <Link href={" /Products"}>
                All Products
                </Link>
                </li>
        </ul>
        
        <div className='flex  items-center  ' >
        <SearchIcon className='w-3 h-3  absolute flex items-center       '/>
        <Input className='w-80 h-6 border-black border-solid rounded px-6 relative ' type='email' placeholder='What are you looking for'/>
        
        </div>
        
       
        <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center relative  items-center"> 
        <Link href={"/cart"}>
     <span className=" right-1 top-0  absolute  rounded-full  bg-red-500 h-4 w-4 text-white  text-xs text-center">{cartValue}</span>

     <ShoppingCart className="h-7 w-7 " />
     </Link>
     </div>
  
    </div>
    
  )
}

export default Header