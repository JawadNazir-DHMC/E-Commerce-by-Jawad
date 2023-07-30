import { Products } from "@/utils/mock"
import ProductCard from "@/components/Productcard"
import { StaticImageData } from "next/image"
const getProductsbyCategory=(category:string)=>{
return Products.filter((product)=>product.category===category)

}


export default function Page({ params }: { params: { slug: string } }) {
  const result=getProductsbyCategory(params.slug);  
  return <div className="flex justify-evenly flex-wrap py-10 mt-16">
    
    {
      result.length>0? 
        result.map((product)=>(
            <ProductCard key={product.id} 
             title={product.name} 
            price={product.price}
            image={product.image as StaticImageData}
            category={product.category}
            id={product.id}/>
        ))
           
       
    :<p>Coming Soon</p>
    }    
      
  
  </div>
  



}