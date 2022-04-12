import './style.css';
import React from 'react';
import headshot from '../../images/headshot-round.png';
import QualiaCarousel from '../../components/QualiaCarousel';

export default function Home () {
    return (
        <div className='page-body' id='home-page'>

            <p className='artist-bio'>
                <strong>Linda Helmick </strong>
                <em>(she, her, hers) </em>earned her Ph.D. in Curriculum and Instruction,
                Art Education at Indiana University and currently works as an Assistant Professor
                of Art Education at the University of Missouri in Columbia. She is an artist/researcher/teacher
                who grounds her work in the belief that creative expression is a basic human right that should
                be accessible for all. She promotes creativity as a powerful force for change, healing,
                and transformation. Her areas of expertise include critical creative work with underserved populations
                and building art education/art therapy wellness and self-care curricula to better serve those who have experienced trauma.
            </p>
            <img id='headshot' src={headshot} alt='artist headshot' />

            <div id='current-exhibit-container'>
                <a href='../Gallery'><h2 id='current-exhibit-header-txt'>Current Exhibit</h2></a>
                <QualiaCarousel />
            </div>

            <div className='main-btns-wrapper'>
                <a className='main-btns-link' href='../Gallery'>
                    <button className='main-btns' id='see-work-btn'>
                        <span className='btn-txt' id='see-work'>Gallery</span>
                        <span className='btn-txt guillemet'>&raquo;</span>
                    </button>
                </a>
                <a className='main-btns-link' href='../Contact'>
                    <button className='main-btns' id='contact-btn'>
                        <span className='btn-txt' id='contact-me'>Contact</span>
                        <span className='btn-txt guillemet'>&raquo;</span>
                    </button>
                </a>
            </div>


        </div>
    );
}
