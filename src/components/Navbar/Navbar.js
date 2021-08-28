import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="container">
            <div className="logo">
                <h1>Recipe App</h1>
            </div>
 
             <div className="nav">
                 <span>Home</span>
             </div>
             <div className="nav">
                 <span>Order</span>
             </div>
             <div className="nav">
                 <span>Contact</span>
             </div>
        </div>
    )
}

export default Navbar
