import left3 from "../assets/left3.png"
import left4 from "../assets/left4.png"
import Plays from "./Play"

export default function Download(){
    return(
        <div className="w-[95%] px-20  py-12 xl:py-20 bg-[#7C3AED] rounded-lg flex items-center justify-center relative overflow-hidden">
        <img src={left3} alt="left3" className="w-2/5 left-[-60px] bottom-0 absolute"/> 
        <div className="flex flex-col items-center justify-center z-[1] gap-20">
            <h1 className="font-extrabold text-3xl md:text-[56px] text-[#FFFFFF]">Download Now!</h1>
            <Plays/>
        </div>
        <img src={left4} alt="left3" className="absolute w-1/2 right-[-36px] bottom-0"/> 
        </div>
    )
}