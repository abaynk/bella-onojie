import React from 'react';
import './AppStoreButton.css';

function AppStoreButton({width, height, br, font}) {
    return (
        <div className='Appstore'>
            <a href='https://www.apple.com/app-store/' target='_blank' rel="noreferrer"><button style={{width:width, height:height, borderRadius: br, fontSize:font}}>App store</button></a>
        </div>
    )
}

export default AppStoreButton
