import React ,{useState} from 'react';

const Footer = () =>{
    let currTime = new Date().toLocaleTimeString();
    const [cTime , setTime] = useState(currTime);

    const updateTime = () =>{
         currTime = new Date().toLocaleTimeString();
         setTime(currTime);
    }

    setInterval(updateTime,1000);

    let cYear = new Date().getFullYear();
    const [CurrYear , setCurrYear] = useState(cYear);

    const updateYear = () =>{
         cYear = new Date().getFullYear();
         setCurrYear(cYear);
    }

    setInterval(updateYear);
    
    return (
        <>
            <footer className="w-100 bg-light text-center">
                <p> @ {CurrYear} {cTime} SR TECHNICAL. All right reserved | Terms and Condition  </p>
            </footer>
        </>
    )
}
export default Footer;