import React from 'react'
import './DropDownMenu.css'

class DropDownMenu extends React.Component {

    render() {
        return (
            <div className="dropdown">
                <div className="menu">{'Menu'}</div>
                <a className="hide-show" href="/sawyer-seminar">Sawyer Seminar</a>
                <a className="hide-show" href="/events">Events</a>
                <a className="hide-show" href="/representation">Representation</a>
                <a className="hide-show" href="/history">History</a>
                <a className="hide-show" href="/courses">Courses</a>
                <a className="hide-show" href="/people">People</a>
                <a className="hide-show"href="/contact-us">Contact Us</a>
            </div>
        )
    }
}

export default DropDownMenu