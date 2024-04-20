import  image123 from '../assets/image123.jpg'
import  image21 from '../assets/image21.jpg'
import  image23 from '../assets/image23.jpg'
import { TypeAnimation } from 'react-type-animation';
export default function Card(){
    return(
        <div className=' md:max-w-[1104px] w-[95%] flex flex-col items-center justify-center gap-24 mt-24'>
        <div className=" md:w-full w-[95%] flex flex-col md:flex-row sm:items-center justify-center md:justify-between">
        <div  data-aos="fade-right"  data-aos-duration="1000" className=' md:px-12 lg:px-24 flex items-center justify-center'>
        <img src={image123} alt="image-1" className="w-1/2 md:w-[357px]"/>
        </div>
         <div className="pl-4 md:px-0 flex flex-col items-center justify-center w-[95%] md:w-[544px] text-[#20294C]  ">
         <TypeAnimation
          sequence={['Stop worrying about exams',1000,""]}
          repeat={Infinity} 
          cursor={true}
          className="font-semibold text-4xl lg:text-6xl py-2 lg:py-5 leading-30 lg:leading-60 tracking-[-1.92px]"
          style={{
            whiteSpace: "pre-line",
            display: "block",
            fontFamily: 'Source Code Pro, monospace'}}
          omitDeletionAnimation={true}
          />
           
            <p className="py-2 px-2 lg:py-5 font-regular text-xl lg:text-2xl leading-9  md:text-left font-inter">
                ZuAI app is your new study buddy that hels you <span className="font-bold">prepare,practise,revise and learn smartly </span>Now you can
                mastering your subjects rather than judging study tasks
            </p>
        </div>
        </div>
        <div className="flex  flex-col md:flex-row-reverse sm:items-center justify-center md:justify-between w-[95%] ">
        <div data-aos="fade-left" data-aos-duration="1000" className='px-12 lg:px-24'>
        <img src={image21} alt="image-1" className="w-[357px]"/>
        </div>
         <div className="pl-4 md:px-0 flex flex-col md:w-[544px] text-[#20294C]">
         <TypeAnimation
          sequence={['Stop bored Studying',1000,""]}
          repeat={Infinity} 
          cursor={true}
          className="font-semibold text-4xl lg:text-6xl py-2 lg:py-5 leading-30 lg:leading-60 tracking-[-1.92px]"
          style={{
            whiteSpace: "pre-line",
            display: "block",
            fontFamily: 'Source Code Pro, monospace'}}
          omitDeletionAnimation={true}
          />
            <p className="py-2 lg:py-5 font-regular text-xl lg:text-2xl leading-9 text-left font-inter">
            Textbooks are boring, you will sleep faster than learning concepts and clear doubts. With ZuAI, say hello to interactive learning experiences
             that make you forget you're even studying. Who knew learning could be this fun (or that textbooks could be this jealous)
            </p>
        </div>
        </div>
        <div className="flex flex-col md:flex-row sm:items-center justify-center md:justify-between w-[95%]">
        <div data-aos="fade-right" data-aos-duration="1000" className='px-12 lg:px-24'>
        <img src={image23} alt="image-1" className="w-[357px]"/>
        </div>
         <div className="pl-4 md:px-0 flex flex-col md:w-[544px] text-[#20294C]">
         <TypeAnimation
          sequence={['Stop Feeling Lonely',1000,""]}
          repeat={Infinity} 
          cursor={true}
          className="font-semibold text-4xl lg:text-6xl py-2 lg:py-5 leading-30 lg:leading-60 tracking-[-1.92px]"
          style={{
            whiteSpace: "pre-line",
            display: "block",
            fontFamily: 'Source Code Pro, monospace'}}
          omitDeletionAnimation={true}
          />
            <p className="py-2 md:py-5 font-regular text-xl lg:text-2xl leading-9 text-left font-inter">
            Remember that angry time, when no one was Remember that angry time, when no one was parent, and no friends? ZuAI is 24X7 there for you, 
            it's a teacher that you always wanted and <span className='text-xs'> friend you never had.</span>
            </p>
        </div>
        </div>
        <div className="flex flex-col  md:flex-row-reverse sm:items-center justify-center md:justify-between w-[95%]">
        <div data-aos="fade-left" data-aos-duration="1000" className='px-12 lg:px-24'>
        <img src={image23} alt="image-1" className="w-[357px]"/>
        </div>
         <div className="pl-4 md:px-0 flex flex-col md:w-[544px] text-[#20294C]">
         <TypeAnimation
          sequence={['Stop Wasting your Time',1000,""]}
          repeat={Infinity} 
          cursor={true}
          className="font-semibold text-4xl lg:text-6xl py-2 lg:py-5 leading-30 lg:leading-60 tracking-[-1.92px]"
          style={{
            whiteSpace: "pre-line",
            display: "block",
            fontFamily: 'Source Code Pro, monospace'}}
          omitDeletionAnimation={true}
          />
            <p className="font-inter py-2 lg:py-5 font-regular text-xl lg:text-2xl leading-9 text-left">
             Don't wait for someone to solve your doubts or go through the same things again to get a follow-up doubt cleared. ZuAI solves any doubt for every difficulty you face on the spot
             so that you don't waste time and keep going effectively.
            </p>
        </div>
        </div>
        </div>
    );
}

