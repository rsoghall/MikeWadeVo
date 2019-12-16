import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Work from "./Views/Work/Work";
import Demos from "./Views/Demos/Demos";
import Testimonial from "./Views/Testimonial/Testimonial";
import Bio from "./Views/Bio/Bio";


class App extends Component {

  render() {
    
    return (
      <div>
        <NavBar />
        <Demos />
        <Testimonial />
        <Work />
        <Bio />
        
           
            
          
      </div>
    );
  }
}

export default App;
