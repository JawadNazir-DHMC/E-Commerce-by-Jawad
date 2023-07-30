import Link from "next/link";
import Image,{StaticImageData} from "next/image"
import { Button } from "./ui/button";
import { Products } from "@/utils/mock";
import Addtocart from "./ui/Addtocart";
function ProductCard  (props:{title:string,price:number,image:StaticImageData,category:string,id:number})  {
  return (
<Link href={`/Products/${props.id}`}>
    <div className="py-4">
      
      
        <Image src={props.image} alt="Product"/>
        
        <h3 className="font-bold text-lg mt-3">{props.title}</h3>
        <p className="font-bold text-lg">${props.price}</p>
        <p className="font-normal text-base capitalize">{props.category}</p>
       <Addtocart/>
    </div>
    </Link>
  )
}
export default ProductCard;