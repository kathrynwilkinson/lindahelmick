import './style.css';
import React from 'react';


export default function GalleryCard ({title, id, alt}) {


    return (
        <div className='gallery-card'>
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
