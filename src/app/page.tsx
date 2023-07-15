import Image from 'next/image'
import Header from '@/components/layout/Header'
import Hero from '@/views/Hero'
import ProductList from '@/views/ProductList'
import Promotions from '@/views/Promotion'
import Unique from '@/views/Unique'
import Newsletter from '@/views/Newsletter'
import Contact from "@/views/Contact"
export default function Home() {
  return (
  <div>
  <Hero/>
  <Promotions/>
  <ProductList/>
  <Unique/>
  <Newsletter/>
  <Contact/>
  
  </div>
  )
   }
    