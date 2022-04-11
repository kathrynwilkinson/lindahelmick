import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation () {
    return (
        <div className='nav-wrapper'>
            <div className='nav'>
                <Link to='/' className='nav-link'>
                    {/* homepage */}
                    Welcome
                </Link>
                <Link to='/gallery' className='nav-link'>
                    Gallery
                </Link>
                <Link to='/research' className='nav-link'>
                    Research
                </Link>
                <Link to='/teaching' className='nav-link'>
                    Teaching
                </Link>
                <Link to='/philosophy' className='nav-link'>
                    Philosophy
                </Link>
                <Link to='/blog' className='nav-link'>
                    Blog
                </Link>
                <Link to='/cv' className='nav-link'>
                    CV
                </Link>
            </div>
        </div>
    );
}
