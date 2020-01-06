import React, { Component } from "react";
// import "./App.css";
import NavBar from "./NavBar/NavBar";
import Work from "./Views/Work/Work";
import Demos from "./Views/Demos/Demos";
import Testimonial from "./Views/Testimonial/Testimonial";
import About from "./Views/About/About";
import Contact from "./Views/Contact/Contact";
import ContactForm from "./Components/ContactForm";


class App extends Component {

  render() {
    
    return (
      <div>
        <NavBar />
        <Demos />
        <Testimonial />
        <Work />
        <About />
        <Contact />
        <ContactForm />
           
            
          
      </div>
    );
  }
}

export default App;
