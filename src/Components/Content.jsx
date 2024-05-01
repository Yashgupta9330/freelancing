import left from "../assets/left.png";
import right1 from "../assets/right1.png";
import center1 from "../assets/center1.jpg";
import { FaArrowRight } from "react-icons/fa6";

export default function Content() {
  return (
    <div className="w-full px-5 md:px-20 flex flex-col items-center gap-[32px] relative mb-32 mt-12">
      <h1
        className="text-4xl text-center text-[#0F172A] lg:text-5xl xl:text-[72px] font-extrabold"
        style={{ fontFamily: "Source Code Pro, monospace" }}
      >
        Introducing Nikaru Plugins!
      </h1>
      <div className="w-full font-regular md:text-[16px] lg:text-[18px] flex flex-col items-center justify-center text-center z-10 ">
        <p>
          Get ready to take your research to the next level with Nikaru Plugins!
        </p>
        <p>
          Stay tuned for our upcoming feature that will transform the way you
          explore topics, unlocking a wealth of specialized knowledge at your
          command. Prepare to be amazed by the possibilities!
        </p>
      </div>
      <button className="flex items-center justify-center rounded-full px-6 py-4 gap-3 text-[#FFFFFF] bg-[#7C3AED]  hover:scale-110 transition-transform duration-300">
        <span className="font-bold">Coming soon...</span>
        <FaArrowRight className="font-bold text-[20px] leading-[100%]" />
      </button>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="rounded-lg  w-full sm:w-[95%] md:w-[70%] shadow z-[1]"
      >
        <img src={center1} alt="center" className="w-full h-full rounded-lg" />
      </div>
      <div className="hidden md:block">
        <img
          src={left}
          alt="left"
          className="absolute left-0 top-[50%] sm:top-[30%]  w-[25%] xl:w-[300px]"
        />
      </div>
      <div className="hidden md:block">
        <img
          src={right1}
          alt="right"
          className="absolute right-0 bottom-0 w-[50%] xl:w-[600px]"
        />
      </div>
    </div>
  );
}
