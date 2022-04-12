import './style.css';
import React from 'react';


export default function DisplayCard ({title, id, alt, exhibit}) {


    return (
        <div className='display-card'>
            <div
                id={id}
                className='thumbnail'
                alt={alt+title}
            >
            </div>
            <div className='thumb-info'>
                <div className='title'>{title}</div>
                {/* <div className='exhibit'>{exhibit+' Exhibit'}</div> */}
                <button className='details-btn'><span id='details-txt'> ... </span></button>
            </div>
        </div>
    );
}
