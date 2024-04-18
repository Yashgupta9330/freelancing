import left from "../assets/left.png"
import right1 from "../assets/right1.png"
import center from "../assets/center.jpg"
import { FaArrowRight } from "react-icons/fa6";
export default function Content(){
    return(
        <div className="w-full px-[80px] flex flex-col items-center gap-[32px] h-[1289px] relative">
         <h1 className="text-6xl xl:text-[72px] font-extrabold" style={{fontFamily: 'Source Code Pro, monospace' }}>Introducing Nikaru Widgets!</h1>
         <div className="font-regular text-[18px] flex flex-col items-center justify-center">
            <p>Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.</p>
            <p>Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.</p>
        </div>
        <button className="flex flex items-center justify-center rounded-full px-6 py-4 gap-3 text-[#FFFFFF] bg-[#7C3AED]">
        <span className="font-bold">Start for Free</span>
        <FaArrowRight  className="font-bold text-[20px] leading-[100%]"/>
        </button>
        <img src={center} alt="center" className="w-[900px] z-[1]"/>
        <img src={left} alt="left"  className="absolute left-0 top-[160px] w-[300px]" />
        <img src={right1} alt="right"  className="absolute right-0 bottom-[400px] w-[600px]" />
        </div>
    );
}