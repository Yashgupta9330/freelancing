import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Love from "./Love";

export default function Hamburger() {
  const [nav, setNav] = useState(false);
  const navItems = ["About us", "Board of Love", "Plugins", "Contact Us"];

  return (
    <div className="z-[150] w-[90%] md:w-[95%] min-h-[144px] flex items-center justify-end font-roboto mr-0 md:ml-4 md:ml-0 fixed top-0 left-0">
      <div onClick={() => setNav(!nav)} className="rounded-full bg-black text-[#FFFFFF] flex items-center justify-center px-4 py-4">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] md:w-[30%] h-full border-r text-white border-r-gray-900 bg-[#28143a] ease-in-out duration-500 z-50"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <li className="p-4">
          {/* You haven't defined Love component, assuming it's already imported */}
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
  );
}
