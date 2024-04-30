import { Link } from "react-router-dom";
import Logo from "./Logo";
import Love from "./Love";


export default function Footer(){
    return(
        <div className="flex flex-col w-full md:w-[95%] lg:w-4/5 min-h-[314px] px-[12px] md:px-[24px] py-[24px] border rounded-lg bg-[#F0F1F5] mt-16">
        <div className="flex items-start justify-between w-full"> {/* Changed items-center to items-start */}
          <Logo classname="sm:h-[208px] sm:w-[208px] h-1/3 w-1/3" foot='1' />
          <div className="h-full flex flex-col sm:flex-row items-start justify-between sm:items-center md:w-[60%]">
            <div className="text-left flex flex-col gap-2">
              <span className="font-bold text-2xl">Legal</span>
              <Link to="/Privacy"><span>Privacy</span></Link>
              <Link to="/Privacy"><span>Terms and Condition</span></Link>
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
            <div className="flex flex-col ml-[-12px] sm:ml-0 gap-2">
              <Link to="/Privacy"><span className="font-bold text-2xl text-center">Contact Us</span></Link>
              <span>Nikaru.official@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    )}      