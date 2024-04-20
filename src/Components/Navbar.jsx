import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Love from "./Love";
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const navItems = ["About us", "Board of Love", "Plugins", "Contact Us"];
  
  return (
    <div className="w-full min-h-[144px] flex items-center justify-between md:justify-center font-roboto mr-0 ml-4 md:ml-0 ">
      <div className="w-[95%] lg:w-4/5 min-h-[85px] rounded-lg bg-[#702DFF] bg-opacity-[.09] py-[24px] px-[24px]">
        <div className="flex items-center justify-between">
          <div className="flex gap-8 text-black">
            <span className="text-3xl font-bold text-[#20294C]">Nikaru</span>
            <ul className="hidden md:flex gap-4 items-center text-normal justify-center text-[#20294C] font-medium leading-6 tracking-tighter">
              {navItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="h-full flex items-center gap-5">
            <div className="hidden md:inline-block">
              <Love />
              </div>
            <div onClick={() => setNav(!nav)} className="block md:hidden">
              {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <ul
              className={
                nav
                  ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r text-white border-r-gray-900 bg-[#28143a]  ease-in-out duration-500 z-50 "
                  : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
              }
            >
              <li className="p-4" >
              <Love />
              </li>
              {/* Mobile Navigation Items */}
              {navItems.map((item) => (
                <li
                  key={item}
                  className="p-4 border-b rounded-xl hover:bg-[#cccccc] hover:text-black duration-300 cursor-pointer border-gray-600"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
