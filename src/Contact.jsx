import React, { useState } from 'react';

const Contact = () => {

 const[data, setData]= useState({
   fullname:"",
   phone:"",
   email:"",
   message:"",
 })

 const InputEvent=(event)=>{
    const {name, value} = event.target;
    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value,
      }
    })
 }

 const formSubmit=(e)=>{
   e.preventDefault();
   alert(`My name is ${data.fullname}, My phone is ${data.phone}, My email is ${data.email} and i want to say${data.message} `)

 }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="form-group">
                <label for="exampleFormControlInput1">Full Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" 
                name="fullname"
                value={data.fullname}
                onChange={InputEvent}
                placeholder="Enter Your Name" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Phone</label>
                <input type="text" class="form-control" id="exampleFormControlInput1"
                 name="phone"
                 value={data.phone}
                 onChange={InputEvent}
                placeholder="Enter your Phone" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                 name="email"
                 value={data.email}
                 onChange={InputEvent}
                placeholder="Enter your Email" />
              </div>
             
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea type="text" class="form-control" id="exampleFormControlTextarea1" rows="3" 
                name="message"
                value={data.message}
                onChange={InputEvent}
                placeholder="Write Something"></textarea>
              </div>
              <div className="col-12">
              <button class="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
