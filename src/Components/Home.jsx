import { useEffect, useState } from 'react';
import '../App.css';
import AI from './AI';
import Card from './Card';
import Content from './Content';
import Download from './Download';
import Footer from './Footer';
import Logo from './Logo';
import Navbar from './Navbar';
import Plays from './Play';
import Youtube from './Youtube';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carausel from './Caraursel';
import bgChat23 from "../assets/bgChat23.png";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  
  return (
    <>
      <div className='w-full min-h-screen overflow-x-hidden'>
        <div className='bg-[#F0F1F5]'>
          <div className='flex flex-col gap-32 z-[100] bg-repeat bg-contain bg-opacity-40' style={{ backgroundImage: `url(${bgChat23})`}}>
            <Navbar />
            <div className='mt-32'>
            <div className="w-full flex flex-col items-center justify-center rounded-lg ">
            <Logo classname='h-[263px] w-[263px]' />
              <Plays />
              <AI />
            </div>
          </div>
        </div>
        </div>
        <Carausel />
        <div className="w-full flex flex-col items-center justify-center mb-12 mt-12">
          <Card />
        </div>
        <Content />
        <Youtube />
        <div className="w-full flex flex-col items-center justify-center mb-12 mt-12">
          <Download />
        </div>
        <div className="w-full flex flex-col items-center justify-center mb-4 mt-4">
          <Footer />
        </div>
      </div>
    </>
  )
}
