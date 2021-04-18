import React from 'react';
import './MiddleSection.css';

function MiddleSection({img, text, dir}) {
    return (
        <div className='Middle__section'>
            <div className='Middle__section__content' dir={dir}>
                <img src={img} alt='iphone3'></img>
                <div className='Middle__section__text'>
                    <h3>{text['h3']}</h3>
                    <h2>{text['h2']}</h2>
                    <h4>{text['h4']}</h4>
                </div>
            </div>
        </div>
    )
}

export default MiddleSection
