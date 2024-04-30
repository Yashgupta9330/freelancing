import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Privacy(){
    return(
            <div className="w-full flex flex-col items-center justify-center">
                <Navbar/>
             <div className="flex items-center justify-center w-full">
                <Footer/>
             </div>
             </div>
    )
}