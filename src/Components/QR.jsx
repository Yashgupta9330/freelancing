import  QR from '../assets/QR.jpg'

export default function Qr(){
    return(
        <div className='relative mt-8 w-[326px]'>
        <div className="flex items-center justify-center gap-1 px-2 py-2 left-12 absolute bottom-[-36px] rounded-lg bg-[#DDDFE9]">
        <span className="text-[#676B89]">Download Nikaru AI</span>
        <img className="w-[53px] h-[53px]" src={QR} />
        </div>
        </div>
    );
}