import React, { Component } from 'react'
import logo from '../images/MW.ico'
import './NavBar.css'

export class NavBar extends Component {
    render() {
        return (

            <div className="navbar-container">
                <div>
                    <a href="#Demos-demo-img">
                        
                <img className="navbar-logo" src={logo} alt="Mike Wade logo" />
                </a>
                </div>
                <a href="#Testimonials" > Testimonials</a>
                <a href="#work" > Work </a>
                <a href="#About" > About</a>
                <a href="#contact" > Contact</a>
            </div>

            
        )
    }
}

export default NavBar
