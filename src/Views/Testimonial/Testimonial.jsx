import React, { Component } from 'react'
import testimonial from "../../images/testimonial-2.png"
import "./Testimonial.css"
export class Testimonial extends Component {
    render() {
        return (
            <div className="Testimonials-wrapper">
                <section id="Testimonials">

              <h1>Testimonials</h1>
                <img src={testimonial} className="Testimonial-img" alt="demo title bar" />
                </section>
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
                    <div>
                        <p className="Testimonial3">
                            As a personal develpment coach I wanted my book read by someone who cared about the message I delivered as much as I did. Mike Wade was that person for me. The way he presented my book made me excited to listen to it and have others listen to it as well. I have been trying to get a professional to record my book but all the people I interviewed seemed to care more about getting the “job” then the message itself. Thank you Mike for taking so much time and energy with this project and for going above and beyond to make sure it was exactly how I wanted it to be. You rock. 
                            <div className="Testimonial3-sig3">
                                       - Tyler Watson 
                        </div>
                        </p>
                        </div>
                    <div className="Testimonial-available">
                        Currently available for auditions!
                        </div>
            </div>
        )
    }
}

export default Testimonial
