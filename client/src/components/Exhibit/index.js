import './style.css';
import React from 'react';


export default function Exhibit ({title, id, alt}) {


    return (
        <div className='exhibit-card'>
            <div
                id={id}
                className='thumbnail'
                alt={alt+title}
            >
            </div>
            <div className='thumb-info painting-titles'>{title}</div>
        </div>
    );
}
