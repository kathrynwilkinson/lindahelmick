import './style.css';
import React from 'react';
import Navigation from '../../components/Navigation';
// import header1 from '../../images/headers/1q-color.JPG';
// import header2 from '../../images/headers/4q-mono.JPG';
// import header3 from '../../images/headers/angel-collage-mono.JPG';
// import header4 from '../../images/headers/poppies-color.JPG';


export default function Header () {
    return (
        <div>
            <div className='header-img'>
                <Navigation />
            </div>
        </div>
    );
}
