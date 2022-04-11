import './style.css';
import React from 'react';

export default function Home () {
    return (
        <div className='page-body' id='home-page'>

            <p className='body'>
                <strong>Linda Helmick </strong>
                <em>(she, her, hers) </em>earned her Ph.D. in Curriculum and Instruction,
                Art Education at Indiana University and currently works as an Assistant Professor
                of Art Education at the University of Missouri in Columbia. She is an artist/researcher/teacher
                who grounds her work in the belief that creative expression is a basic human right that should
                be accessible for all. She promotes creativity as a powerful force for change, healing,
                and transformation. Her areas of expertise include critical creative work with underserved populations
                and building art education/art therapy wellness and self-care curricula to better serve those who have experienced trauma.
            </p>

            <div id='current-exhibit'></div>

        </div>
    );
}
