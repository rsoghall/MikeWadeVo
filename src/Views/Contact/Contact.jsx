import React, { Component } from 'react'
import voContact from "../../images/Contact2.png"
import './Contact.css'
export class Contact extends Component {
    render() {
        return (
            <div className="Contact-wrapper">
                <section id="contact">
                    <div>

                    <h1>Contact</h1>
                    <img src={voContact} className="contact-img" alt="work title bar" />
                    </div>
                        </section>
                    <div className="Contact-email">

                    <a
                  className="Contact-email"
                  href="mailto:mike@mikewadevo.com">mike@mikewadevo.com
                  </a>
                  </div>
                    
            </div>
        )
    }
}

export default Contact
