import React from 'react'
import './Styles/Nav.css'
import './index.js'

const Nav = () => {
    return (
        <header className='header'>
            <nav className='nav'>
            {/* <img className='logo nav-link' src="/Public/Logo_Douglas.png" alt="Logo" /> */}
                <a href="#"  className='logo nav-link'>DouglasCastillo</a>
                <button className='nav-toggle'><i class="fa-solid fa-bars"></i></button>
               <ul className='nav-menu'>
                    <li className='nav-menu-item'> <a  className ='nav-menu-link' href="#">Projects</a></li>
                    <li className='nav-menu-item'> <a className ='nav-menu-link'  href="#">About me</a></li>
                    <li className='nav-menu-item'> <a  className ='nav-menu-link nav-menu-link_active' href="#">Contact me</a></li>
                </ul>
            </nav>
            
        </header>
        
    )
}

export default Nav
