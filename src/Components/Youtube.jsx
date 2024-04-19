

export default function Youtube(){
    return(
        <div className="w-full px-8 lg:px-20 flex flex-col items-center gap-8">
        <h1 className="text-center font-semibold text-5xl lg:text-6xl text-[#20294C] leading-60" style={{fontFamily: 'Source Code Pro, monospace' }}>More than an app in your phone</h1>
       <div className="flex flex-col items-center justify-center text-[#676B89] text-xl lg:text-2xl leading-9">
        <p>Join more than 10,000+ students who have reported an</p>
        <p>increase in their marks. Download ZuAI from Google or Apple</p>
           <p>Play store</p>
       </div>
       <iframe 
        width="700" 
        height="393" 
        src="https://www.youtube.com/embed/TlLyi4qr3DY" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        className="rounded-lg md:w-[500px] h-[250px]"
        >      
        </iframe>
        </div>
    )
}