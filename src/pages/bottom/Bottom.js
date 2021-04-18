import React from 'react'
import AppStoreButton from '../../components/appstoreButton/AppStoreButton';
import PlaystoreButton from '../../components/playstoreButton/PlaystoreButton';
import './Bottom.css';

function Bottom() {
    return (
        <div className='Bottom' id='bottom'>
            <div className='Bottom__content'>
                <h2>Download the app now.</h2>
                <h4>Available on your favourite store. Start your premium experience now</h4>
                <div className='Bottom__buttons'>
                    <PlaystoreButton width={'142px'} height='64px' br='10px' font='16px'/>
                    <AppStoreButton  width={'142px'} height='64px' br='10px' font='16px' />
                </div>
            </div>
        </div>
    )
}

export default Bottom;
