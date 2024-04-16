import Logo from "./Logo";
import Love from "./Love";


export default function Footer(){
    return(
        <div className="flex flex-col w-4/5 h-[314px] px-[24px] py-[24px] border rounded-lg bg-[#F0F1F5]">
         <div className="w-full flex justify-end"><Love/></div>
         <div className="flex items-center justify-between">
            <Logo/>
            <div className="flex flex-col gap-2">
                <span className="font-bold text-2xl">Legal</span>
                <span>Privacy</span>
                <span>Terms and Condition</span>
            </div>
            <div className="flex flex-col gap-6">
                <span className="font-bold text-2xl">Contact Us</span>
                <span>Nikaru.official@gmail.com</span>
            </div>
         </div>
        </div>
    )
}