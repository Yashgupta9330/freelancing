import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Board(){
    return(
        <div className="w-full">
            <Navbar/>
        <div className="flex items-center justify-center w-full">
            <Footer/>
         </div>
        </div>
    )
}