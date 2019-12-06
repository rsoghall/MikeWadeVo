import React, { Component } from "react";
import logo from "./images/logo.png";
import play from "./images/play2.png";
import mainPic from "./images/mikeWadePic.jpg";
import commercial from "./audio/mikeWadeCommercial.mp3";
import narration from "./audio/mikeWadeNarration.mp3";
import ReactModal from "react-modal";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Work from "./Views/Work/Work";



const customStyles = {
  content: {
    top: "70%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    borderRadius: "25px",
    background: "transparent"
  },
  overlay: {
    background: "transparent"
  }
};

class App extends Component {
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
        <NavBar/>
      <div className="App">
        <header className="App-header">
          <div className="App-email">mike@mikewadevo.com</div>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-mainPic-container">
            <img src={mainPic} className="App-mainPic" alt="Microphne" />
            <div className="App-play-outer-container">
              <div className="App-play-container">
                <button style={{ outline: "none", background: "transparent", border: "none" }}>
                  <img
                    className="App-playImageCommercial"
                    src={play}
                    onClick={() => this.openModal("commercial")}
                    alt="play button"
                  />
                </button>
                <p className="App-textCommercial">Commercial</p>
              </div>
              <div className="App-play-container">
                <button style={{ outline: "none", background: "transparent", border: "none" }}>
                  <img
                    className="App-playImageNarration"
                    src={play}
                    onClick={() => this.openModal("narration")}
                    alt="play button"
                  />
                </button>
                <p className="App-textNarration">Narration</p>
              </div>
            </div>
          </div>
          {/* <div className="App-auth">Authentic VO Keeping You Relevant</div> */}
          <div className="App-available">
            {" "}
            Currently available for auditions!
          </div>
          {/* <button className="App-contact">Contact Me</button> */}
          </header>
          
          <Work />
          
        


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

export default App;
