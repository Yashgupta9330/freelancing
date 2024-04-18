import left3 from "../assets/left3.png"
import left4 from "../assets/left4.png"
import Plays from "./Play"

export default function Download(){
    return(
        <div className="w-[90%] px-[80px] py-[80px]  h-[400px] bg-[#7C3AED] rounded-lg flex items-center justify-center relative">
        <img src={left3} alt="left3" className="w-[500px] left-[-60px] bottom-0 absolute "/> 
        <div className="flex flex-col items-center justify-center z-[1] gap-20">
            <h1 className="font-extrabold text-[56px] text-[#FFFFFF]">Download Now!</h1>
            <Plays/>
        </div>
        <img src={left4} alt="left3" className="absolute right-[-36px] bottom-0"/> 
        </div>
    )
}