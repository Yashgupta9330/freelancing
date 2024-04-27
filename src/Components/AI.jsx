import Button from "./Button";

export default function AI() {
  return (
    <div className="p-[10px] md:w-[80%] lg:w-[70%] xl:w-[80%] flex flex-col items-center justify-center gap-4">
      <span className="font-bold text-5xl md:text-[80px] leading-[110%] tracking-[-3px] text-[#20294C] text-center ">
        Unravel the “Why?” with Nikaru
      </span>
      <div className=" text-center">
        <p className=" text-lg md:text-[20px] font-regular flex items-center justify-center leading-9 text-[#20294C]">
          Nikaru revolutionizes problem-solving with its image recognition
          capabilities.
        </p>
        <p className="text-lg md:text-[20px] font-regular flex items-center justify-center leading-9 text-[#20294C]">
          From handwritten notes to complex diagrams, Nikaru delivers answers in
          seconds, sparking your curiosity and fueling your quest for knowledge.
        </p>
      </div>
      <Button />
    </div>
  );
}
