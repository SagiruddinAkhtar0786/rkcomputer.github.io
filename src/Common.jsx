import React from 'react';
import './index.css';
import img from '../src/image/comp.png';
import { NavLink } from 'react-router-dom';


const Common = (props) =>{
return(
<>
    <section id="header" className="d-flex align-items-center">
        <div conatainer-fluid>
            {/* <div className="row"> */}

                <div className="col-md-10 col-12 mx-auto">
                    <div className="row">


                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1  d-flex justify-content-center  flex-column">
                            <h1>
                                {props.name} 
                                <strong className="brand-name"> RK COMPUTER</strong>
                            </h1>
                            <h2 className="my-3">
                                This business is for all computer mobiles sales and service related
                            </h2>
                            <div className="mt-3">
                                <NavLink to={props.visit} className="btn btn-get-started">{props.btname} </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.imgsrc} className="img-fluid animated" alt="home img"></img>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    </section>
</>
);
};
export default Common;