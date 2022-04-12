import './style.css';
import React from 'react';
import QualiaCarousel from '../../components/QualiaCarousel';
import QualiaModal from '../../components/QualiaModal';

export default function Gallery () {



    return (
        <div className='page-body' id='gallery-page'>
			<h1 className='page-header'>Gallery</h1>
            <div className='exhibit-container'>
                <h2 className='exhibit-title'>Qualia Exhibit</h2>
                <p>Qualia is a term in philosophy that refers to the subjective or qualitative properties of experiences. Qualia are the feel of something rather than the object itself. It is rooted in the ideology that no two people will experience a work of art in the same way. Paintings are not static. Their appearance is modified by the viewers context and experience. This subjective phenomenon is qualia. </p>
                <QualiaCarousel />
                <QualiaModal />
            </div>
        </div>
    );
}
