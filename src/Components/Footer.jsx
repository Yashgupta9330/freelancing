import Logo from "./Logo";
import Love from "./Love";


export default function Footer(){
    return(
        <div className="flex flex-col w-[95%] lg:w-4/5 min-h-[314px] px-[24px] py-[24px] border rounded-lg bg-[#F0F1F5] mt-16">
         <div className="w-full flex justify-center md:justify-end mb-8 md:mb-0 "><Love/></div>
         <div className="flex items-center justify-between w-full">
            <Logo classname="sm:h-[208px] sm:w-[208px] h-[150px] w-[150px] "  />
            <div className="flex h-full items-center justify-between  sm:items-center sm:flex-row flex-col md:w-[60%] border">
            <div className="flex flex-col gap-2">
                <span className="font-bold text-2xl">Legal</span>
                <span>Privacy</span>
                <span>Terms and Condition</span>
            </div>
            <div className="hidden md:block">
            <div className="flex flex-col gap-2">
                <span className="font-bold text-2xl">Nav</span>
                <a href=""><span>About us</span></a>
                <a href=""><span>Board of love</span></a>
                <a href=""><span>Plugins</span></a>
                <a href=""><span>Contact us</span></a>
            </div>
            </div>
            <div className="flex flex-col gap-2">
                <span className="font-bold text-2xl">Contact Us</span>
                <span>Nikaru.official@gmail.com</span>
            </div>
            </div>
         </div>
        </div>
    )
}