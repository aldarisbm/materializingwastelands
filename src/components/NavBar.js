import React from 'react'
import './NavBar.css'
import Media from 'react-media'
import DropDownMenu from './DropDownMenu';

function NavBar() {
    return (
        <Media query='(min-width: 1200px)'>
            {matches => 
            matches ? (
                <div className="topnav">
                    <a href="/">A Mellon Sawyer Seminar</a>
                    <a href="/contact-us">Contact Us</a>
                    <a href="/people">People</a>
                    <a href="/courses">Courses</a>
                    <a href="/history">History</a>
                    <a href="/representation">Representation</a>
                    <a href="/events">Events</a>
                    <a href="/sawyer-seminar">Sawyer Seminar</a>
                </div>
            ) : (
                <div className="topnav">
                    <a className="home-link" href="/">A Mellon Sawyer Seminar</a>
                    <DropDownMenu/>
                </div>
            )
            }
        </Media>
    )
}

export default NavBar