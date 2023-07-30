"use client"
import toast from 'react-hot-toast'
import { useDispatch } from "react-redux";
import { cartActions } from "@/Store/Slice/CartSlice";
import { Button } from "./button";
const Addtocart=()=>{
    const dispatch=useDispatch();
    const addItems=()=>{
        dispatch(cartActions.addToCart({product:{},quantity:1}))
        toast.success("Product Added")
    }
    return(
<Button className="bg-black text-white rounded-r-md"onClick={addItems}>Add to Cart</Button>
)};

export default Addtocart;