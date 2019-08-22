import React from 'react'
import './HomePage.css'
import DesertImage from '../assets/desert.jpg'

function HomePage() {
    let homeStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        width: "100%",
        height: "95vh",
        backgroundImage: `url(${DesertImage})`,
        backgroundSize: "cover",
      }
          
    return (
        <div style={homeStyle}>
            <div className="washu">
                {' Washington University in St Louis presents: '}
                <br/>
                <span className="wastelands">
                    {'Wastelands'}
                </span>
            </div>
        </div>
        )
}

export default HomePage

