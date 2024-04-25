import car2 from "../assets/car2.png";

export default function Carausel() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center w-full bg-[#7C3AED] gap-12 lg:gap-16 xl:gap-20 p-12 lg:p-16 xl:p-20">
            <span className="font-bold text-center md:text-left text-5xl lg:text-6xl font-roboto leading-30 lg:leading-60 tracking-[-1.92px] text-[#FFFFFF]">EXPLORE THE POWER OF NIKARU AI</span>
           <div className="hidden md:block ">
            <img src={car2} alt="carausel" className="md:w-64 lg:w-72 xl:w-80" />
            </div>
            <div className="hidden md:block">
            <img src={car2} alt="carausel" className="md:w-64 lg:w-72 xl:w-80" />
            </div>
            <div className="block md:hidden">
            <img src={car2} alt="carausel" className="w-48" />
            </div>
        </div>
    );
}
