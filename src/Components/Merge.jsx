import Copy from "../assets/Copy.png"
import Book from "../assets/Book.png"
import  QR from '../assets/QR.jpg'

export default function Merge(){
    return(
        <div className="flex flex-col border relative mt-36">
        <div className="">
        <img  src={Copy} alt="copy" className="absolute bottom-12 left-24 w-[178px] h-[253px]"/>
        <img src={Book} alt="Book" className="w-[400px] h-[200px]" />
        </div>
        </div>
    )
}