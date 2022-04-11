import './style.css';
import React from 'react';
import paintings from '../../data/artwork/gallery.json';
import GalleryCard from '../../components/GalleryCard';

export default function Gallery () {
    return (
        <div className='page-body' id='gallery-page'>
			<div className='page-header'>Gallery</div>
            <div id='gallery-card-container'>
                {/* GalleryCards are appended here */}
                {paintings.map( painting => ( <GalleryCard {...painting} key={painting.id}/>))}
            </div>
        </div>
    );
}
