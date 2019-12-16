import React, { Component } from 'react'
import bio from "../../images/Bio3.jpg"
import mikeBio from "../../images/mwBio33.jpg"
import "./Bio.css"

export class Bio extends Component {
    render() {
        return (
            <div className="Bio">
               
                <h1>Bio</h1>
                <img src={bio} className="Bio-title-img" alt="demo title bar" />
                <div className="Bio-info">
                    <div className="Bio-text">       
                        <img src={mikeBio}  alt="mike wade" />
                    {/* <div className="Bio-img"> 

                    </div> */}
                        <p>Mike is a San Francisco-based Voice Over Professional. He loves his family and enrolling in life each day. As a 20-year veteran English teacher, he finds great joy in inspiring and deeply enrolling his teens in intentional living. His specialty is making you and your unique offerings shine so that your ideal client invests in you. He is skilled in Audio Recording, Editing, Narration, Public Speaking, Storytelling, Teaching, Announcing, and English. For a professional and memorable audio experience, choose MikeWade Voiceovers.
              </p>
                    </div>
               
                        
                    </div>
                </div>
        )
    }
}

export default Bio
