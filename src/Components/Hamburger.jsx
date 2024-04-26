import Button from "./Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
export default function Hamburger(){
    return(
        <div className="z-[150] w-[85%] min-h-[144px]  flex items-center justify-end font-roboto mr-0 md:ml-4 md:ml-0 fixed top-0 left-0">
       <div className="rounded-full bg-black flex items-center justify-center px-4 py-4"> <AiOutlineMenu size={20} className="text-[#FFFFFF]" /> </div>
        </div>
    )
}