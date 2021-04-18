import React from 'react'
import logo from './logo.png';
import "./Navbar.css";

function Navbar() {
    
    return (
        <div className='Navbar'>
            <div className='Navbar__left'>
                <img src={logo} alt='logo'></img>
            </div>
            <div className='Navbar__right'>
                <ul>
                    <li><a href='#top' onClick={()=>window.scrollTo(0,0)}>Home</a></li>
                    <li><a href='#body'>Product</a></li>
                    <li><a href='#create' onClick={()=>window.scrollTo(0,3000)}>Faq</a></li>
                    <li><a href='#bottom'>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
