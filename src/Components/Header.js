import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div>
               <Link className="nav-links" to="/">Home</Link>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <Link className="nav-links" to="/about">About</Link>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <Link className="nav-links" to="/contact">Contact</Link>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               {/* <Link className="nav-links" to="/form">Form</Link>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
               <Link className="nav-links" to="/Gallery">Gallery</Link>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <Link className="nav-links" to="/services">Services</Link> 
            </div>
        )
    }
}

export default Header
