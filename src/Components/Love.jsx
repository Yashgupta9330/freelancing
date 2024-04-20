import { FaHeart } from "react-icons/fa6";;

export default function Love(){
    return(
        <div className="flex border rounded-lg px-4 py-2 bg-purple-600">
        <button className="flex items-center justify-center gap-6 text-[#FFFFFF] leading-6 tracking-tighter">
        <FaHeart />
         <a href="/board"><span>Nikaru Love Board</span></a>
        </button>
       </div>
    )
}