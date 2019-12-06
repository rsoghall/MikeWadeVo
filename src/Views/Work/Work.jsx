import React, { Component } from 'react'

import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Work.css'
import VideoPlayer from '../../Components/VideoPlayer'


export class Work extends Component {
    render() {
        return (
            <div>
                <section id="work">
                    <h2>Work</h2>
                </section>
                <VideoPlayer/>
            </div>
        )
    }
}

export default Work
