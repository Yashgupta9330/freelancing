import { FaHeart } from "react-icons/fa6";import { Link } from "react-router-dom";
;

export default function Love(){
    return(
        <div className="flex border rounded-lg px-4 py-2 bg-purple-600">
        <button className="flex items-center justify-center gap-6 text-[#FFFFFF] leading-6 tracking-tighter">
        <FaHeart />
         <Link to="/board"><span>Nikaru Love Board</span></Link>
        </button>
       </div>
    )
}