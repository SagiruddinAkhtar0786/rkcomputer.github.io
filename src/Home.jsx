import React from 'react';
import './index.css';
import img from '../src/image/comp.png';
// import { NavLink } from 'react-router-dom';
import Common from './Common';


const Home = () =>{
return(
<>
    <Common
        name="Grow your business with"
        imgsrc={img} 
        visit="/service"
        btname="Get Started"
    />
</>
);
};
export default Home;