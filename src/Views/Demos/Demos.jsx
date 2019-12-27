import React, { Component } from "react";
import demoBar from "../../images/mwDemo.jpg";
import logo from "../../images/logo.png";
import play from "../../images/play2.png";
import mainPic from "../../images/mikeWadePic.jpg";
import commercial from "../../audio/mikeWadeCommercial.mp3";
import narration from "../../audio/mikeWadeNarration.mp3";
import ReactModal from "react-modal";
import "./Demos.css";

const customStyles = {
  content: {
    top: "39%",
    left: "20%",
    position: "absolute",
    // right: "auto",
    bottom: "auto",
    padding: "0",
    width: "12rem",
    // height: "1rem",
    // display: "flex",
    // justifyContent: "center",
    // marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    borderRadius: "50px",
    background: "transparent",
    // height: "100vh",
    // overflowY: "hidden",
    // paddingRight: "15px",
  },
  overlay: {
    background: "transparent"
  }
};

class Demos extends Component {
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
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false, audioSource: "" });
  };
  render() {
    const audioSource =
      this.state.audioSource === "narration" ? narration : commercial;

    return (
      <div>
        <div className="Demos">
          <header className="Demos-header">
            <div className="Demos-demo">
              <img
                src={demoBar}
                id="Demos-demo-img"
                alt="demo title bar"
              />
              <div className="Demos-play-outer-container">
                <div className="Demos-play-container">
                  <button
                    style={{
                      outline: "none",
                      background: "transparent",
                      border: "none"
                    }}
                  >
                    <img
                      className="Demos-playImageCommercial"
                      src={play}
                      onClick={() => this.openModal("commercial")}
                      alt="play button"
                    />
                  </button>
                  <p className="Demos-textCommercial">Commercial</p>
                </div>
                <div className="Demos-play-container">
                  <button
                    style={{
                      outline: "none",
                      background: "transparent",
                      border: "none"
                    }}
                  >
                    <img
                      className="Demos-playImageNarration"
                      src={play}
                      onClick={() => this.openModal("narration")}
                      alt="play button"
                    />
                  </button>
                  <p className="Demos-textNarration">Narration</p>
                </div>
              </div>
            </div>
            <div className="Demos-logoemail">

            <div >
            <img src={logo} className="Demos-logo" alt="logo" />
            </div>
                <a
                  className="Demos-email"
                  href="mailto:mike@mikewadevo.com">mike@mikewadevo.com
                  </a>
            </div>
            <div className="Demos-mainPic-container">
              <img src={mainPic} className="Demos-mainPic" alt="Microphne" />
            </div>
          </header>

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
        </div>
      </div>
    );
  }
}

export default Demos;
