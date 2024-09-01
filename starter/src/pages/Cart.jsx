import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";


const Cart = () => {
const {cart}= useSelector((state)=>state);
const [totalAmount,setTotalAmount]=useState(0);

useEffect(()=>{
  setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
},[cart])

  return( 
  <div className="max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
    {
      cart.length > 0 ? 
      (<div className="grid md:grid-cols-2 grid-cols-1  max-w-[90%] mx-auto justify-between gap-x-6 gap-y-1 p-6">



          <div>
            {
              cart.map((item,index)=>{
                return <CartItem key={item.id} item={item} itenIndex={index} />
              })
            }
          </div>
          

          <div className="flex flex-col justify-between p-0 m-0 max-h-[420px] ">
           
            <div className="mt-[40px]">
              <div className="text-3xl text-green-600 md:font-bold-8">Your Cart</div>
              <div className="text-5xl text-green-600 md:font-bold">Summary</div>
              <p><span className="text-2xl text-slate-600 md:font-bold-10">Total items:{cart.length}</span>
              </p>
           </div>

           <div className="">
            <p className="text-slate text-xl">Total Amount : ${totalAmount}</p>
            <button className="text-slate-700 border-2 border-gray-700 rounded-lg font-bold 
          text-[17px] p-1 px-3 uppercase 
        bg-green-600
          hover:text-white transition duration-300 ease-in text-4xl w-64 text-opacity-90">Checkout Now</button>
           </div>

          </div>



      </div>) :
      (
        <div className="flex flex-col align-middle items-center my-80 gap-3"> 
         <h1 className="text-slate text-3xl  ">Cart is Empty</h1>
        <Link to={"/"}>
          <button className="outline bg-green-600 rounded-lg text-3xl sm:font-bold-4 text-white p-2 w-64">
            Shop Now
          </button>
        </Link>
        </div>
      )
    }
  </div>
  );
};

export default Cart;
