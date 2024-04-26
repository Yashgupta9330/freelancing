
import "../index.css"

export default function Youtube(){
    return(
        <div className="w-full px-0 sm:px-8 lg:px-20 flex flex-col items-center gap-8">
        <h1  className=" text-center font-semibold text-5xl lg:text-6xl text-[#20294C] leading-10 md:leading-60" style={{fontFamily: 'Source Code Pro, monospace' }}>More than an app in your phone</h1>
       <div  className=" max-w-[680px] flex flex-col items-center justify-center text-[#676B89] text-center text-xl lg:text-2xl leading-normal md:leading-9">
        <p>Join more than 10,000+ students who have reported an increase in their marks. Download ZuAI from Google or Apple Play store</p>
       </div>
       <iframe 
  width="100%" 
  height="100%" 
  src="https://www.youtube.com/embed/TlLyi4qr3DY" 
  title="YouTube video player" 
  data-aos="flip-left"
  data-aos-easing="ease-out-cubic"
  data-aos-duration="2000"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowFullScreen
  className="rounded-lg animate-resize-width w-[70%] md:w-[500px]  sm:h-[250px] md:h-[300px] "
>
</iframe>
        </div>
    )
}