 
import {FcDeleteDatabase} from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";


const CartItem = ({item , index}) => {
const dispatch=useDispatch();
  const removeFromCart=()=>{
        dispatch(remove(item.id));
        toast.error("Item removed")
  }
  return( <div className="outline gap-3 p-4 mt-10 ml-5 rounded-xl  items-center justify-between ">
    <div className="flex flex-row gap-3 rounded-xl  justify-between ">

     <div className="h-[200px] w-[400px]">
          <img src={item.image} className="h-full w-full"/>
        </div>

       <div className="flex flex-col gap-4">
        <h1 className="text-slate text-3xl ">{item.title.split("").slice(0,40).join("")+"..."}</h1>
        <p className="w-50 text-gray-400 font-normal text-[10px] text-left ">{item.description.split("").slice(0,1000).join("")+"..."}</p>
        <div className="flex flex-row justify-between">
          <p className="text-green-600 text-lg">{item.price}</p>
          <div
          onClick={removeFromCart} className="text-3xl bg-red-200 rounded-full items-center p-1">
            <FcDeleteDatabase/>
          </div>
        </div>
       </div>


    </div>
  </div>);
};

export default CartItem;
