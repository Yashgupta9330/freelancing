import { useEffect } from 'react'
import '../App.css'
import AI from './AI'
import Card from './Card'
import Content from './Content'
import Download from './Download'
import Footer from './Footer'
import Logo from './Logo'
import Merge from './Merge'
import Navbar from './Navbar'
import Plays from './Play'
import Qr from './QR'
import Youtube from './Youtube'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carausel from './Caraursel'


export default function Home() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <>
    <div className='w-full min-h-screen'>
    <div className='bg-[#F0F1F5]'>
     <div className='w-full flex items-center justify-center mx-auto'>
     <Navbar/>
      </div>
      <div className="w-full flex flex-col items-center justify-center rounded-lg relative">
        <Logo classname='h-[253px] w-[253px] ' />
        <Plays/>
        <AI/>
        <Merge/>
        <Qr/>
      </div>
    </div> 
    <Carausel/>
    <div className="w-full flex flex-col items-center justify-center mb-12 mt-12">
      <Card/>
    </div>
    <Content/>
    <Youtube/>
    <div className="w-full flex flex-col items-center justify-center mb-12 mt-12">
      <Download/>
    </div>
    <div className="w-full flex flex-col items-center justify-center mb-4 mt-4">
      <Footer/>
    </div>
   </div>
  </>
  )
}


