import React from "react";

const Cart = () => {
  return (
    <div className="mt-[50px] mb-[100px]">
      This is Cart Page
      <div className="grid lg:grid-cols-3  grid-cols-1">
        {/* item */}
        <div className="col-span-2"></div>
        {/* summary */}
        <div className="bg-black/5 p-5 rounded-xl">
          <h2 className="scroll-m-20 text-lg font-medium uppercase tracking-tight">
            Order Summary
          </h2>
          <div className="flex flex-col w-full">
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
              content
            </div>
            <div className="divider"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
