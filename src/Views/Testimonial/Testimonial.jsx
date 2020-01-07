import React, { Component } from 'react'
import testimonial from "../../images/testimonial-2.png"
import Enrollment from "../../images/twEnrollment.png"
import bookForeclosure from "../../images/bookForeclosure.jpg"
import bookCant from "../../images/bookCantSell.jpg"
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
                        <img src={Enrollment} className="Testimonial-book" alt="Enrollment Effect Book Cover"/>
                        <p className="Testimonial3">
                            "As a personal development coach I wanted my book read by someone who cared about the message I delivered as much as I did. Mike Wade was that person for me. The way he presented my book made me excited to listen to it and have others listen to it as well. I have been trying to get a professional to record my book but all the people I interviewed seemed to care more about getting the 'job' then the message itself. Thank you Mike for taking so much time and energy with this project and for going above and beyond to make sure it was exactly how I wanted it to be. You rock!". 
                            <div className="Testimonial3-sig3">
                                       - Tyler Watson, Author
                        </div>
                        </p>
                        </div>
                    <div>
                        <img src={bookForeclosure}  className="Testimonial-bookForeclosure" alt="Foreclosure Book Cover"/>
                        <img src={bookCant} className="Testimonial-bookCant" alt="Can't SellBook Cover"/>
                        <p className="Testimonial4">
                        "Mike has an amazing voice and attention to detail. He's transformed my two books into a production that I'm proud to share with the world. Thanks again Mike!"
                            <div className="Testimonial4-sig4">
                                       - Ryan Nickel
                        </div>
                        </p>
                        </div>
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
                                       - Perrylayne Decker-Tate 
                        </div>
                        </p>
                    </div>
                    <div className="Testimonial-available">
                        Currently available for auditions!
                        </div>
                </div>
            </div>
        )
    }
}

export default Testimonial
