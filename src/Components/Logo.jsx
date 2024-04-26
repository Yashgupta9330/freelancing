import { useEffect, useState } from 'react';
import websiteunscreen from "../assets/websiteunscreen.gif";
import logo2 from "../assets/logo2.png";

export default function Logo({ classname, foot = '0' }) {
    const [isGif, setIsGif] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsGif(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {foot === '0' ? (
                <img
                    src={isGif ? websiteunscreen : logo2}
                    alt="logo"
                    className={`${isGif ? 'h-[253px] w-[420px]' : ''} ${classname}`}
                />
            ) : (
                <img src={logo2} className={classname} />
            )}
        </>
    );
}
