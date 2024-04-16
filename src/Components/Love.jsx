import { FaRegHeart } from "react-icons/fa";

export default function Love(){
    return(
        <div className="flex border rounded-lg px-4 py-2 bg-purple-600">
        <button className="flex items-center justify-center gap-6 text-[#FFFFFF] leading-6 tracking-tighter">
         <FaRegHeart />
         <span>Nikaru Love Board</span>
        </button>
       </div>
    )
}