import  image123 from '../assets/image123.jpg'
import  image21 from '../assets/image21.jpg'
import  image23 from '../assets/image23.jpg'

export default function Card(){
    return(
        <div className='flex flex-col gap-[100px]'>
        <div className="flex items-center justify-between h-[460px] w-[1104px] border">
        <div className='px-[93px]'>
        <img src={image123} alt="image-1" className="w-[357px] h-[458px]"/>
        </div>
         <div className="flex flex-col w-[544px] h-full text-[#20294C]">
            <span className="font-semibold text-[60px] py-[20px] border leading-60 tracking-[-1.92px]" style={{fontFamily: 'Source Code Pro, monospace' }}>Stop worrying about exams</span>
            <p className="py-[20px] font-regular text-[24px] leading-9 text-left">
                ZuAI app is your new study buddy that hels you <span className="font-bold">prepare,practise,revise and learn smartly </span>Now you can
                mastering your subjects rather than judging study tasks
            </p>
        </div>
        </div>
        <div className="flex items-center justify-between h-[460px] w-[1104px] border">
        <div className='px-[93px]'>
        <img src={image21} alt="image-1" className="w-[357px] h-[458px]"/>
        </div>
         <div className="flex flex-col w-[544px] h-full text-[#20294C]">
            <span className="font-semibold text-[60px] py-[20px] border leading-60 tracking-[-1.92px]" style={{fontFamily: 'Source Code Pro, monospace' }}>Stop bored- Studying</span>
            <p className="py-[20px] font-regular text-[24px] leading-9 text-left">
                ZuAI app is your new study buddy that hels you <span className="font-bold">prepare,practise,revise and learn smartly </span>Now you can
                mastering your subjects rather than judging study tasks
            </p>
        </div>
        </div>
        <div className="flex items-center justify-between h-[460px] w-[1104px] border">
        <div className='px-[93px]'>
        <img src={image23} alt="image-1" className="w-[357px] h-[458px]"/>
        </div>
         <div className="flex flex-col w-[544px] h-full text-[#20294C]">
            <span className="font-semibold text-[60px] py-[20px] border leading-60 tracking-[-1.92px]" style={{fontFamily: 'Source Code Pro, monospace' }}>Stop Feeling Lonely</span>
            <p className="py-[20px] font-regular text-[24px] leading-9 text-left">
                ZuAI app is your new study buddy that hels you <span className="font-bold">prepare,practise,revise and learn smartly </span>Now you can
                mastering your subjects rather than judging study tasks
            </p>
        </div>
        </div>
        <div className="flex items-center justify-between h-[460px] w-[1104px] border">
        <div className='px-[93px]'>
        <img src={image23} alt="image-1" className="w-[357px] h-[458px]"/>
        </div>
         <div className="flex flex-col w-[544px] h-full text-[#20294C]">
            <span className="font-semibold text-[60px] py-[20px] border leading-60 tracking-[-1.92px]" style={{fontFamily: 'Source Code Pro, monospace' }}>Stop Wasting your Time</span>
            <p className="py-[20px] font-regular text-[24px] leading-9 text-left">
                ZuAI app is your new study buddy that hels you <span className="font-bold">prepare,practise,revise and learn smartly </span>Now you can
                mastering your subjects rather than judging study tasks
            </p>
        </div>
        </div>
        </div>
    );
}

