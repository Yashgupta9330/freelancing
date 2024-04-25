import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Board(){
    return( 
        <div className="w-full flex flex-col items-center justify-center">
            <Navbar/>
         <div className="w-[95%] h-[120px] flex items-center justify-center bg-[#9333EA] rounded-lg mt-32">
            <span  style={{fontFamily: 'Source Code Pro, monospace'}} className="font-bold text-4xl md:text-6xl py-2 lg:py-5 leading-30 lg:leading-60 tracking-[-1.92px] text-[#FFFFFF]">Nikaru Love Board</span>
         </div>
         <div className="flex items-center justify-center w-full">
            <Footer/>
         </div>
         </div>
    );
}