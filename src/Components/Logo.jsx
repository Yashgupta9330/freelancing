import { useEffect, useState } from 'react';
import output from "../assets/output.gif";
import logo2 from "../assets/logo2.svg";

export default function Logo({ classname, foot = '0' }) {
  
    return (
        <>
            <img src={logo2} className={classname} />
        </>
    );
}
