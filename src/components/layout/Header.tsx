import React from 'react'
import Logo from "/public/logo.webp"
import Image from 'next/image'
import Link from 'next/link'
import {SearchIcon, ShoppingCart} from "lucide-react"
import { Input } from '../ui/input'
const Header = () => {
  return (
    <div className='flex justify-evenly items-center py-6 px-8 '>
        <Image src={Logo} alt="logo" className='w-40'/>
        
        <ul className='flex gap-x-10'>
            <li  className='text-lg'>
                <Link href={"/"}>
                Male
                </Link>
                </li >
            <li  className='text-lg'>
                <Link href={"/"}>
                Female
                </Link>
                </li >
            <li  className='text-lg'>
                <Link href={"/"}>
                Kids
                </Link>
                </li >
            <li  className='text-lg'>
                <Link href={"/"}>
                All Products
                </Link>
                </li>
        </ul>
        
        <div className='flex items-center  ' >
        <SearchIcon className='w-4 h-5  '/>
        <Input className='w-80 h-6 border-black border-solid rounded relative ' type='email' placeholder='What are you looking for'/>
        </div>
        <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center relative"> 
     <span className="absolute right-1 top-0 rounded-full bg-red-500 h-5 w-5 text-white text-xs text-center"></span>

     <ShoppingCart className="h-7 w-7" />
     </div>
  
    </div>
  )
}

export default Header