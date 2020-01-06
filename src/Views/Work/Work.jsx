import React, { Component } from 'react'
import voWork from "../../images/voice-work.jpg"
import bookForeclosure from "../../images/bookForeclosure.jpg"
import bookCant from "../../images/bookCantSell.jpg"
import bookEnrollment from "../../images/twEnrollment.png"
import './Work.css'
import VideoPlayer from '../../Components/VideoPlayer'


export class Work extends Component {
    render() {
        return (
            <div className="work-wrapper">
                <section id="work">
                    <h1>Work</h1>
                <img src={voWork} className="work-img" alt="work title bar" />
                </section>
                <div className="work-displayWrapper">

                <div className="work-images">
                    <div>
                        <img src={bookForeclosure} className="work-image1" alt="Foreclosure Book"/>
                    </div>
                    <div>
                        <img src={bookCant} className="work-image2" alt="Foreclosure Book" />
                    </div>
                    <div>
                        <img src={bookEnrollment} className="work-image3" alt="Foreclosure Book"/>
                    </div>
                </div>
                <div className="work-video">

                <VideoPlayer />
                </div>
                </div>
            </div>
        )
    }
}

export default Work
