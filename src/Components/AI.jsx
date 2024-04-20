import Button from "./Button";



export default function AI(){
    return(
    <div className="p-[10px] md:w-[80%] lg:w-[70%] xl:w-[50%] flex flex-col items-center justify-center gap-4">
     <span className="font-bold text-5xl md:text-[86px] leading-[110%] tracking-[-3px] text-[#20294C] text-center ">YOUR 24/7 AI</span>
     <div className=" text-center">
     <p className=" text-lg md:text-[20px] font-regular flex items-center justify-center leading-9 text-[#20294C]">Score more marks in exams with ZuAI. Create unlimited Sample</p>
     <p className="text-lg md:text-[20px] font-regular flex items-center justify-center leading-9 text-[#20294C]">Papers, ask infinite doubts and boost your self study.</p>
    </div>
    <Button/>

    </div>
    );
}