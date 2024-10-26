import React, { Component } from 'react'
// import ReactFormInputValidation from "react-form-input-validation";

export class Contact extends Component {
    
    render() {
        return (
        <React.Fragment>
        {/* <div>
            <h1 className="con-tact">This is my Contact Page</h1>
            </div> */}
               <div className="contact">
                   <div className="content">
                       <h2>Contact Us</h2>
                       <p>For any detail about Sports Bikes & cars before or after purchase</p>
                   </div>
               </div>
               <div classNme="container">
               <div className="icon">
                   <i class="fa fa-map-marker" aria-hidden="true"></i>
                   </div>
                  <div className="Box">
                      <h3>Address</h3>
                      <p>Sector-15 Noida,Uttar Pradesh</p>
                   </div>
                   <br/><br/>
                   <div className="icon">
                   <i class="fa fa-phone" aria-hidden="true"></i>
                   </div>
                   <div className="Box">
                      <h3>Phone</h3>
                      <p>9835641255</p>
                   </div>
                   <br/><br/>
                   <div className="icon">
                   <i class="fa fa-envelope" aria-hidden="true"></i>
                   </div>
                   <div className="Box">
                      <h3>Email</h3>
                      <p>SportsCarsBikes15@gmail.com</p>
                   </div>
               </div>
               <div className="contactForm">
                   <form>
                       <h2>Send Message</h2>
                       <div className="inputBox">
                          <input type="text" name="" required="required"/>
                          <span>Full Name</span>
                       </div>
                       <div className="inputBox">
                          <input type="text" name="" required="required"/>
                          <span>Email</span>
                       </div>
                       <div className="inputBox">
                          <textarea required="required"></textarea>
                          <span>Type your Message..... </span>
                       </div>
                       <div className="inputBox">
                       <input type="submit" name="" value="Send"/>
                       </div>
                   </form>
               </div>
        </React.Fragment> 
        )
      }
    }

export default Contact
