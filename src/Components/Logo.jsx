import { useEffect, useState } from 'react';
import output from "../assets/output.gif";
import logo2 from "../assets/logo2.png";

export default function Logo({ classname, foot = '0' }) {
  
    return (
        <>
         {/*   {foot === '0' ? (
                <img
                    src={output}
                    alt="logo"
                    className="w-[300px] h-[300px]"
                />
            ) : (
                <img src={logo2} className={classname} />
            )}  */}
            <img src={logo2} className={classname} />
        </>
    );
}
