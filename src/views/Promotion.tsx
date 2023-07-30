import React from "react";
import event1 from "/public/event1.webp";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import event2 from "/public/event2.webp";
import event3 from "/public/event3.webp";

const Promotion = () => {
  return (
    <section className="flex flex-col items-center " >
      
      <div className="flex flex-col  mt-16 items-center text-center ">
        <h1 className="items-center font-semibold text-blue-700">PROMOTIONS</h1>
        <h2 className="text-4xl font-bold text-black mt-3">
          Our Promotions Events
        </h2>
      </div>

      {/* Div Left Upper */}
<div className="flex flex-row flex-wrap  justify-between mt-3 ">
      <div className="flex-1">
        <div className="h-2/5 w-4/5 py-10 px-2 bg-gray-300 flex justify-evenly items-center">
          <div className="flex-1">
            <span>
              <h1 className="text-3xl font-bold mx-5">
                GET UP TO <span className="text-4xl">60%</span>
              </h1>
            </span>
            <span>
              <p className=" mx-5 px-2">For the summer season</p>
            </span>
          </div>
          <Image src={event1} alt="Event" />
        </div>
        {/* Div Left Lower */}
        <div className="h-2/5 w-4/5 mt-5 bg-gray-800 py-14 ">
          <div className="text-center items-center">
            <span>
              <h1 className="text-4xl text-white font-bold mx-5">
                GET 30% Off
              </h1>
            </span>
            <span>
              <p className=" mx-5 mt-2 text-white">USE PROMO CODE</p>
            </span>
          
          <Button className="text-white mx-28 text-justify mt-1 w-80 text-lg leading-7 tracking-tight rounded-lg border-none font-bold bg-gray-700">
            DINE WEEKEND SALE
          </Button>
          </div>
        </div>
      </div>
      {/* Div Right  */}
      <div className="flex flex-row  gap-x-3">
        <div className="w-3/5 h-fit items-center py-4 bg-pink-50 resize-y ">
          <h2 className="text-lg px-2 mt-2   ">Flex Sweatshirt</h2>
          <div className="flex ">
            <p className="text-sm font-medium px-2  line-through ">$100.00 </p>
            <p className="text-lg  mx-4 font-bold  ">$75.00 </p>
          </div>
          <Image className="mt-2 justify-center" src={event2} alt="Event2" />
        </div>
        <div className="w-3/5 h-fit items-center bg-gray-200 resize-y">
          <h2 className="text-lg px-2 mt-5    ">Flex Push Button Bomber</h2>
          <div className="flex">
            <p className="text-sm font-medium px-2  line-through ">$225.00 </p>
            <p className="text-lg mx-4 font-bold  ">$190.00 </p>
          </div>
          <Image className="mt-6 justify-center" src={event3} alt="Event3" />
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default Promotion;
