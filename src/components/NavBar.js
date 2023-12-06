import React from 'react'
import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <nav>
                <h1>Narvin</h1>
                <ul className='menu'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar