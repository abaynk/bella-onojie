import React from 'react';
import './PlaystoreButton.css';

function PlaystoreButton({width, height, br, font}) {
    return (
        <div className='PlaystoreButton'>
            <a href='https://play.google.com/store/apps?gl=AT' target='_blank' rel="noreferrer"><button style={{width:width, height:height, borderRadius: br, fontSize:font}}>Playstore</button></a>
        </div>
    )
}

export default PlaystoreButton;
