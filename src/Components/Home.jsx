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
import bgChat from "../assets/bgChat.png";

export default function Home() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    // State to hold the height dynamically
    const [contentHeight, setContentHeight] = useState(720); // Default height, you can change as needed

    return (
        <>
            <div className='w-full min-h-screen overflow-x-hidden'>
                <div className=''>
                    {/* Dynamically set height and background image */}
                    <div className='bg-[url(bgChat)]  bg-cover bg-center z-[100] w-full h-full' style={{ height: `${contentHeight}px`,backgroundImage: `url(${bgChat})` }}>
                        <div className='w-full flex items-center justify-center'>
                            <Navbar />
                        </div>
                        <div className="w-full flex flex-col items-center justify-center rounded-lg relative mt-32">
                            <Logo classname='h-[253px] w-[253px] ' />
                            <Plays />
                            <AI />
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
