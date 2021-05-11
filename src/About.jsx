import React from 'react';
import './index.css';
import img from '../src/image/groupDiscussion.png';
// import { NavLink } from 'react-router-dom';
import Common from './Common';


const About = () =>{
return(
<>
    <Common name="Welcome to "
     imgsrc={img} 
     visit="/contact"
     btname="Contact Now"
     />
</>
);
};
export default About;