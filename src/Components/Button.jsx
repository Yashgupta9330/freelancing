import { FaArrowRight } from "react-icons/fa6";

export default function Button(){
    return(
        <button className="flex items-center justify-center rounded-full px-6 py-4 gap-3 text-[#FFFFFF] bg-gradient-to-br from-[#D446F1] to-[#9A35EB] tracking-[0.05em] shadow-lg">
        <span className="font-bold text-[16px] leading-[100%] ">Try Now</span>
        <FaArrowRight  className="font-bold text-[20px] leading-[100%] "/>
        </button>
    )
}