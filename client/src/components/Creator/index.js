import React from 'react';
import './style.css';

export default function Creator () {
    return (

                <div className='footer-wrapper'>
                    <div className='copyright footer-text'>
                        &copy; K WILKINSON 2021
                </div>
                    <div className='term-of-use'>
                        <a href='' className='footer-text' target='_blank' rel='noreferrer'>TERMS OF USE</a>
                    </div>
                    <div className='privacy-policy'>
                        <a href='' className='footer-text' target='_blank' rel='noreferrer'>PRIVACY POLICY</a>
                    </div>
                    <div className='contact'>
                        <a href='' className='footer-text' target='_blank' rel='noreferrer'>CONTACT</a>
                    </div>
                </div>
    );
}
