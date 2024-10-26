import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="Abo-ut">
                <h1>ABOUT  SBC<br/><br/>
                You can never really have enough affordable bikes,<br/> especially in a country like India. Why do we say so?<br/><br/><br/>
                 Because the vast majority of the social structure<br/> in a developing country like ours belongs<br/>  to the middle class,
                  who are too poor to be rich and too<br/> rich to belong to the category of the poor! The people<br/> from this class highly
                   depend upon the entry level bikes as <br/>a means of their daily commute. </h1>
            </div>
            <div className="aboutbox"> 
                <div className="img-circle">
                    <h4>ABOUT US...</h4>
                    <h5> You can never really have enough affordable bikes, especially in a country like India. Why do we say so?<br/><br/>
                    Because the vast majority of the social structure in a developing country like ours belongs  to the middle class,
                  who are too poor to be rich and too rich to belong to the category of the poor! The people from this class highly
                   depend upon the entry level bikes as a means of their daily commute. .</h5>
                </div>
                <div className="read-btn">
                <button className="btn">Read More</button>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default About
