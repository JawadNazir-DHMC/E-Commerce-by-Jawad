import ProductCard from "@/components/Productcard"
import P1 from "/public/P1.png"
import P2 from "/public/P2.png"
import P3 from "/public/P3.png"
import { Products } from "@/utils/mock"
import Image, { StaticImageData } from "next/image"
import { Badge } from "@/components/ui/badge"
 const ProductList = () => { 
 const productChecks=Products.slice(0,4)  
 return(
<div className="flex flex-col items-center text-center">
    <h1 className="items-center font-semibold text-blue-700">PRODUCTS</h1>
        <h2 className="text-4xl font-bold text-black mt-3">
          What We Have
        </h2>
            
    
     <div className="flex justify-evenly gap-x-5 mt-16">
    
        
      
         {
             productChecks.map((product)=>(
                 <ProductCard key={product.id} 
                  title={product.name} 
                 price={product.price}
                 image={product.image as StaticImageData}/>
             ))
                
            
         }
         </div>
         </div>
  )};
{/* <div className="flex justify-evenly gap-x-5 mt-16">
         <div className="flex-1">
         <ProductCard image={P1} title="Flex Sweatshirt" price={145}/>
         <Badge>Add to Cart</Badge>
         </div>
        <ProductCard image={P2} title="Cameryn Sash Tie Dress" price={1200}/>
        <ProductCard image={P3} title="Brushed Reglan Shirt" price={200}/> 
}; */}
        


export default ProductList