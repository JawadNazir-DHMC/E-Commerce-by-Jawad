
"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Products } from "@/utils/mock"

const Quantity = () => {
  const[number,setNumber]=useState(1)
    return (
    <div className='flex gap-x-2 items-center'>
        {/* MInus */}
        <button className='border h-6 w-6 rounded-full flex justify-center items-center'onClick={()=>{setNumber(number<=1?1:number-1)}}>-</button>
        {/* Number */}
        <span className='text-sm'>{number}</span>
        {/* Plus */}
        <button className='border h-6 w-6 rounded-full flex justify-center items-center' onClick={()=>{setNumber(number+1)}}>+</button>
            </div>
  )
}

export default Quantity
// export const operationButton=()=>{
// <div className='border h-6 w-6 rounded-full flex justify-center items-center'>+</div>
// }