import React from 'react';
import './Footer.css';
import logo from '../navbar/logo.png';
import twitter from './twitter.png';
import facebook from './facebook.png';
import insta from './instagram.png';


function Footer() {
    return (
        <div className='Footer'>
            <div className='Footer__content'>
                <div className='Footer__left'>
                    <img src={logo} alt='logo' width='246px'></img>
                </div>
                <div className='Footer__middle'>
                        <a href='https://www.twitter.com' target='_blank' rel="noreferrer"><img src={twitter} alt='twitter'></img></a>
                        <a href='https://facebook.com' target='_blank' rel="noreferrer"><img src={facebook} alt='twitter'></img></a>
                        <a href='https://instagram.com' target='_blank' rel="noreferrer"><img src={insta} alt='twitter'></img></a>
                </div>
                <div className='Footer__right'>
                    <p>Copyright 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
