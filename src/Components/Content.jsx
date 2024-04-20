import left from "../assets/left.png"
import right1 from "../assets/right1.png"
import center1 from "../assets/center1.jpg"
import { FaArrowRight } from "react-icons/fa6";
export default function Content(){
    return(
        <div className="w-full px-5 md:px-20 flex flex-col items-center gap-[32px] relative mb-32">
         <h1 className="text-4xl text-center text-[#0F172A] lg:text-5xl xl:text-[72px] font-extrabold" style={{fontFamily: 'Source Code Pro, monospace' }}>Introducing Nikaru Widgets!</h1>
         <div className="w-full font-regular md:text-[16px] lg:text-[18px] flex flex-col items-center justify-center text-center z-10 ">
            <p>Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.</p>
            <p>Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.</p>
        </div>
        <button className="flex items-center justify-center rounded-full px-6 py-4 gap-3 text-[#FFFFFF] bg-[#7C3AED]">
        <span className="font-bold">Start for Free</span>
        <FaArrowRight  className="font-bold text-[20px] leading-[100%]"/>
        </button>
        <img src={center1}  data-aos="zoom-in" alt="center" className="w-[70%] z-[1] rounded-lg"/>
        <img src={left} alt="left"  className="absolute left-0 top-[50%] sm:top-[30%]  w-[25%] xl:w-[300px]" />
        <img src={right1} alt="right"  className="absolute right-0 bottom-0 w-[50%] xl:w-[600px]" />
        </div>
    );
}