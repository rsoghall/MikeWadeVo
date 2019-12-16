import React, { Component } from 'react'
import voWork from "../../images/voice-work.jpg"
// import AnchorLink from 'react-anchor-link-smooth-scroll'
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
                <div className="work-video">

                <VideoPlayer />
                </div>
            </div>
        )
    }
}

export default Work
