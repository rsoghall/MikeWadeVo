import React, { Component } from 'react'
import voWork from "../../images/voice-work.jpg"
import bookForeclosure from "../../images/bookForeclosure.jpg"
import bookCant from "../../images/bookCantSell.jpg"
import bookEnrollment from "../../images/twEnrollment.png"
import './Work.css'
import VideoPlayer from '../../Components/VideoPlayer'
import ReactModal from "react-modal";
import Play from "../../images/Play11.png";
import CantSell from '../../audio/Cant_Sell.mp3'
import DefFor from '../../audio/Defend_Foreclosure.mp3'
import EnEff from '../../audio/Enrollment_Effect.mp3'

const customStyles = {
    content: {
      top: "31%",
      left: "15%",
      position: "absolute",
      bottom: "auto",
      padding: "0",
      width: "12rem",
      transform: "translate(-50%, -50%)",
      border: "none",
      borderRadius: "50px",
      background: "none",
      },
    overlay: {
      background: "none"
    }
  };


export class Work extends Component {
    constructor() {
        super();
        this.state = {
          modalIsOpen: false,
          audioSource: ""
        };
    }

    openModal = audioSource => {
        this.setState({ modalIsOpen: true, audioSource });
      };
    
      afterOpenModal() {
        this.subtitle.style.color = "#f00";
      }
    
      closeModal = () => {
        this.setState({ modalIsOpen: false, audioSource: "" });
      };
    
    render() {
        let audioSource = this.state.audioSource
    if (audioSource === 'CantSell') {
      audioSource = CantSell
    } else if (audioSource === 'DefFor') {
      audioSource = DefFor
    } else if (audioSource === 'EnEff') {
      audioSource = EnEff
    }
           
        return (
            <div className="work-wrapper">
                <section id="work">
                    <h1>Work</h1>
                <img src={voWork} className="work-img" alt="work title bar" />
                </section>
                <div className="work-displayWrapper">

                <div className="work-images">
                        <div className = "work-bookplay">  
                            <img
                                src={bookForeclosure}
                                className="work-image1"
                                alt="Foreclosure Book"
                            />
                            
                            <img
                                src={Play}
                                className="work-play"
                                alt="Play Button"
                                onClick={() => this.openModal("DefFor")}
                            />
                    </div>
                    <div className = "work-bookplay">
                            <img
                                src={bookCant}
                                className="work-image2"
                                alt="Can't Sell Book"
                            />

                            <img
                                src={Play}
                                className="work-play"
                                alt="Play Button"
                                onClick={() => this.openModal("CantSell")}
                            />
                    </div>
                    <div className = "work-bookplay">
                            <img
                                src={bookEnrollment}
                                className="work-image3"
                                alt="Foreclosure Book"
                            />
                            <img
                                src={Play}
                                className="work-play"
                                alt="Play Button"
                                onClick={() => this.openModal("EnEff")}
                            />
                    </div>
                    </div>
                    
                    <ReactModal
            style={customStyles}
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
          >
            <audio
              controls
              autoPlay
              controlsList="nodownload"
              style={{ opacity: "0.5" }}
            >
              <source src={audioSource} type="audio/mpeg" />
            </audio>
                    </ReactModal>
                    
                <div className="work-video">

                <VideoPlayer />
                </div>
                </div>
            </div>
        )
    }
}

export default Work
