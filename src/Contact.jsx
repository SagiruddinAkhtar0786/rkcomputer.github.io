import React, { useState } from 'react';


const Contact = () =>{
    const [data , setData] = useState({
        fullname:"",
        phone: "",
        email: "",
        msg : "",
    });
    const inputEvent = (event) =>{
        const {name,value} = event.target;
        setData((preVal) => {
            return{
                ...preVal,
                [name] : value,
            };
        });
    };

const formSubmit = (e) => {
    e.preventDefault();
    alert(`my name is ${data.fullname} . my Mobile number is ${data.phone} . email is ${data.email}`);
}

    return(
    <>
        <div className="container text-center">
            <h1>Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row col-md-6 col-10 mx-auto">
            <form onSubmit = {formSubmit}>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                    Enter your name
                    </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" 
                    name="fullname"
                    value={data.fullname}
                    onChange={inputEvent}
                    placeholder="Enter your name"                        
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                    Mobile Number
                    </label>
                    <input type="Number" class="form-control" id="exampleFormControlInput1" 
                    name="phone"
                    value={data.phone}
                    onChange={inputEvent}
                    placeholder="Phone Number"                        
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                    Email address
                    </label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" 
                    name="email"
                    value={data.email}
                    onChange={inputEvent}
                    placeholder="name@example.com"                        
                    />
                </div>
                
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                   Message
                    </label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                     name="msg"
                    value={data.msg}
                    onChange={inputEvent}
                    >
                   </textarea>
                </div>
                <div class="col-12">
                    <button class="btn btn-outline-primary" type="submit">Submit form</button>
                </div>    
            </form>
            </div>
        </div>
    </>
    );
};
export default Contact;