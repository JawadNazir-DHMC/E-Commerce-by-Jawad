import Quantity from "@/components/Quantity"
import Addtocart from "@/components/ui/Addtocart"
import { Button } from "@/components/ui/button"
import { Products } from "@/utils/mock"
import Image from "next/image"
import { StaticImageData } from "next/image"
const getProductsDetail=(id:number|string)=>{
return Products.filter((product)=>product.id==id)

}
const sizes=["XS","S","M","L","XL"]

export default function Page({ params }: { params: { id: string } }) {
   const result=getProductsDetail(params.id);  
  return <div className="flex  flex-wrap py-10 mt-16">
    
      

  {
  result.map((product) => (
    <div key={product.id} className="flex justify-between gap-6">
      <div>
        <Image src={product.image} alt={product.name} />
      </div>
      <div className="flex flex-col">
      <div>
        <h1 className=" text-2xl"> {product.name}</h1>
        <h2 className="font-bold text-base text-gray-300">{product.tagline}</h2>
        </div>
        <div>
          <h3 className="text-sm mt-6 font-semibold">SELECT SIZE</h3>
       <div className="flex gap-x-5">
          {
  sizes.map((item) => {
    return (
      <div key={item} className="rounded-full w-6 h-6 mt-6 border text-center hover:shadow-2xl flex justify-center items-center">
        <span className="text-[10px] text-center text-gray-600">{item}</span>
      </div>
      
    );
  })
}
</div>
{/* quantiy */}
<div className="flex  gap-x-3 mt-6 items-center">
  <h3 className=" text-[10px] font-semibold ">Quantity</h3>
  
  <Quantity/>
  </div>
  <div className="mt-5 flex items-center gap-x-3">
   <Addtocart/>
   <h2 className="text-2xl font-bold">${product.price.toFixed(2)}</h2>
   </div>
   <div className='flex  justify-center items-center relative mt-56 '>
   <div className="font-extrabold text-9xl mt-40 leading-[1] absolute text-[#212121] z-[1] opacity-5 ">
            Over View
            <div className="z-[2]">
            <h3 className="text-black font-bold text-4xl">Product Information</h3>
            </div>
          </div>  
          </div>       
</div>
        </div>
        </div>
    
  ))
}
  </div>
  



}