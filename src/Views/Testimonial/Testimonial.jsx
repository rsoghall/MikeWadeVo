import React, { Component } from 'react'
import testimonial from "../../images/testimonial-2.png"
import "./Testimonial.css"
export class Testimonial extends Component {
    render() {
        return (
            <div className="Testimonials">
              <h1>Testimonials</h1>
                <img src={testimonial} className="Testimonial-img" alt="demo title bar" />
                <div className="Testimonials-text">
                    <div>
                        <p className="Testimonial1">"Mike, love your big, bold mature sound - your tone is authoritative, and you have a super deep resonance that is gorgeous. You have a nice expression in your delivery; your voice really makes people sit up and take notice. Easily one of the best talents. GREAT to listen to!"
              
                    <div className="Testimonial1-sig1">
                    - Lisa Foster, Talent Coach & Producer, SuchAVoice

                    </div>
              </p>
                    </div>
                    <div>
                <p className="Testimonial2">"Michael Wade was quick and responsive with us on a video project. 
                    When we needed adjustments done he was efficient and clear. 
                    Made it easy on our end!" 
                        <div className="Testimonial2-sig2">
                                       - Perrylayne Decker-Take 
                        </div>
                        </p>
                        
                    </div>
                </div>
                    <div className="Testimonial-available">
                        Currently available for auditions!
                        </div>
            </div>
        )
    }
}

export default Testimonial
