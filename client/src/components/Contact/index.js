import './style.css';
import React from 'react';
import email from '../../images/email.png'

export default function Contact () {
    return (
        <div className='contact-links'>
            {/* <div>Contact: Linda Helmick</div> */}
            <img className='mail-icon' alt='' src={email} />
            <img className='mail-icon' alt='' src={email} />
            <img className='mail-icon' alt='' src={email} />
        </div>
    );
}
