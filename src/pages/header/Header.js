import React from 'react';
import './Header.css';
import AppStoreButton from '../../components/appstoreButton/AppStoreButton';
import PlaystoreButton from '../../components/playstoreButton/PlaystoreButton';

function Header() {
    return (
        <div className='Header' >
            <div className='Header__content' id='top'>
                <h3>Food app</h3>
                <h1>Why stay hungry when you can order from Bella Onojie</h1>
                <h4>Download the bella onojie's food app now on</h4>
                <div className='Header__buttons'>
                    <PlaystoreButton width={'236px'} height={'68px'} br={'30px'}/>
                    <AppStoreButton width={'236px'} height={'68px'} br={'30px'}/>
                </div>
            </div>
            
        </div>
    )
}

export default Header;
