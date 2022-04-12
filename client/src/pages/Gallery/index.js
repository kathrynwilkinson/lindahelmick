import './style.css';
import React from 'react';
import DisplayCard from '../../components/DisplayCard';
import qualiaPieces from '../../data/artwork/qualia.json';
import './qualia.css';

export default function Gallery () {
    return (
        <div className='page-body' id='gallery-page'>
            {/* className='page-header' */}
			<h1>Gallery</h1>
            <div className='exhibit-container'>
                <h2 className='exhibit-title'>Qualia Exhibit</h2>
                <div className='display-card-container'>
                    {/* DisplayCards are appended here */}
                    {qualiaPieces.map( qualiaPiece => ( <DisplayCard {...qualiaPiece} key={qualiaPiece.id}/>))}
                </div>
            </div>

        </div>
    );
}
