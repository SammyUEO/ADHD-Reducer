import React from 'react'
import "./NavBar.css"

const NavBar = () => {
    return (
        <div className='navbar'>
            <h1>ADHD Reducer</h1>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}
export default NavBar
