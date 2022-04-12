import './style.css';
import React from 'react';
import Exhibit from '../../components/Exhibit';
import qualiaPieces from '../../data/artwork/qualia.json';
import './qualia.css';

export default function Gallery () {
    return (
        <div className='page-body' id='gallery-page'>
			<div className='page-header'>Gallery</div>
            <div className='exhibit-container'>
                {/* Exhibits are appended here */}
                {qualiaPieces.map( qualiaPiece => ( <Exhibit {...qualiaPiece} key={qualiaPiece.id}/>))}
            </div>
        </div>
    );
}
