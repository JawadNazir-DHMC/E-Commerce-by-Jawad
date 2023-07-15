
import Image,{StaticImageData} from "next/image"
import { Button } from "./ui/button";
function ProductCard  (props:{title:string,price:number,image:StaticImageData})  {
  return (

    <div>
      
        <Image src={props.image} alt="Product"/>
        <h3 className="font-bold text-lg mt-3">{props.title}</h3>
        <p className="font-bold text-lg">${props.price}</p>
        <Button className="bg-black text-white">Add to Cart</Button>
    </div>
  )
}
export default ProductCard;