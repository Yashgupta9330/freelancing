import QuestioningMind from "../assets/QuestioningMind.png";

export default function Carausel() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center w-full bg-[#7C3AED] gap-12 lg:gap-16 xl:gap-20 p-12 lg:p-16 xl:p-20 rounded-lg">
            <span className="font-bold text-center md:text-left text-5xl lg:text-6xl font-roboto leading-30 lg:leading-60 tracking-[-1.92px] text-[#FFFFFF]">EXPLORE THE POWER OF NIKARU AI</span>  
            <div className="">
            <img src={QuestioningMind} alt="carausel" className="w-64 md:w-64 lg:w-64 xl:w-72 rounded-lg" />
            </div>
        </div>
    );
}
