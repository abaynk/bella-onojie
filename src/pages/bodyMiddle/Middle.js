import React from 'react'
import MiddleSection from '../../components/middleSection/MiddleSection';
import './Middle.css';

import iphoneTop1 from './iphoneTop1.png';
import iphoneTop2 from './iphoneTop2.png';

import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';



function Middle() {
    const text1 = {
        'h3' : 'Create an account',
        'h2' : 'Create/login to an existing account to get started',
        'h4' : 'An account is created with your email and a desired password'
    }
    return (
        <div className='Middle' id='body'>
            <div className='Middle__top'>
                <div className='Middle__top__iphones'>
                    <img id='iphoneTop1' src={iphoneTop1} alt='iphone1'></img>
                    <img id='iphoneTop2' src={iphoneTop2} alt='iphone2'></img>
                </div>
                <h1>How the app works</h1>
            </div>
            <MiddleSection className='Middle__create' img={img1} text={text1} dir={'ltr'}/>
            <MiddleSection className='Middle__explore' img={img2} text={text1} dir={'rtl'}/>
            <MiddleSection  id='create' className='Middle__checkout' img={img3} text={text1} dir={'ltr'}/>
        </div>
    )
}

export default Middle
