import React from 'react';
import './index.css';

import { Switch,Route,Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Services';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const App = () =>{
    return(
    <>
        <Navbar />

        <Switch>
            <Route exact path="/" component={Home}/>  
            <Route exact path="/about" component={About}/>             
            <Route exact path="/service" component={Service}/>
            <Route exact path="/contact" component={Contact}/>
            {/* <Route component={Error}/> */}
            <Redirect to="/"/>
        </Switch>
        {/* <About/>
        <Service/>
        <Footer/> */}
        <Footer/>
    </>
    )
}
export default App;