import React, { Component } from 'react'
import logo from '../images/MW.ico'
import './NavBar.css'

export class NavBar extends Component {
    render() {
        return (

            <div className="navbar-container">
                <img className="navbar-logo" src={logo} alt="Mike Wade logo" />
                <a href="#demos" > Demos</a>
                <a href="#work" > Work </a>
                <a href="#bio" > Bio</a>
                <a href="testimonials" > Testimonials</a>
                <a href="#contact" > Contact</a>

            </div>

            
        )
    }
}

export default NavBar
