import './style.css';
import React from 'react';
import ArtistStatement from '../../components/ArtistStatement';
import ResearchStatementModal from '../../components/ResearchStatement';
import TeachingPhilosophyModal from '../../components/TeachingPhilosophy';

export default function Philosophy () {
    return (
        <div className='page-body' id='philosophy-page'>

            <ArtistStatement />
            <TeachingPhilosophyModal />
            <ResearchStatementModal />
        </div>
    );
}
