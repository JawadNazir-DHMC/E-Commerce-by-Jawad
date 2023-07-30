import ProductCard from "@/components/Productcard";
import { Products } from "@/utils/mock";
import Image, { StaticImageData } from "next/image"
const AllProducts=()=>{
    return <div className="flex justify-evenly flex-wrap gap-x-5 mt-16">
    
        
      
    {
        Products.map((product)=>(
            <ProductCard key={product.id} 
             title={product.name} 
            price={product.price}
            image={product.image as StaticImageData}
            category={product.category}
            id={product.id}/>
        ))
           
       
    }
    </div>

}
export default AllProducts;