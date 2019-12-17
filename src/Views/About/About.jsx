import React, { Component } from 'react'
import about from "../../images/Bio3.jpg"
import mikeAbout from "../../images/mwBio50.jpg"
import "./About.css"

export class About extends Component {
    render() {
        return (
            <div className="About-wrapper">
                <section id="About">
                    
                <h1>About</h1>
                <img src={about} alt="demo title bar" />
               </section>
                <div className="About-info">
                    <div className="About-text">       
                    <div className="About-bio-img"> 
                        <img src={mikeAbout}  alt="mike wade" />

                    </div>
                        <p>Mike is a San Francisco-based Voice Over Professional. He loves his family and enrolling in life each day. As a 20-year veteran English teacher, he finds great joy in inspiring and deeply enrolling his teens in intentional living. His specialty is making you and your unique offerings shine so that your ideal client invests in you. He is skilled in Audio Recording, Editing, Narration, Public Speaking, Storytelling, Teaching, Announcing, and English. For a professional and memorable audio experience, choose MikeWade Voiceovers.
              </p>
                    </div>
               
                        
                    </div>
                </div>
        )
    }
}

export default About
