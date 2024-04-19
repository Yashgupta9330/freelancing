
import Love from "./Love";

export default function Navbar(){
    return(
        <div className="w-full h-[144px] flex items-center justify-center  font-roboto border">
        <div className="w-[95%] lg:w-4/5 h-[85px] rounded-lg bg-[#702DFF] bg-opacity-[.09] py-[24px] px-[24px]">
         <div className="flex items-center justify-between">
            <div className="flex gap-8 text-black">
             <span className="text-3xl font-bold text-[#20294C]">Nikaru</span>
             <ul className="flex gap-4 items-center text-normal justify-center text-[#20294C] font-medium leading-6 tracking-tighter">
             <li>About us</li>
             <li>Board of Love</li>
             <li>Plugins</li>
             <li>Contact Us</li>
             </ul>
            </div>
           <Love/>
         </div>
        </div>
        </div>
    )
}