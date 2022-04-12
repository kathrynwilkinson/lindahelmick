import './style.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../data/artwork/qualia-exhibit/indigo-dreams.jpg';
import slide2 from '../../data/artwork/qualia-exhibit/you-and-i.JPG';
import slide3 from '../../data/artwork/qualia-exhibit/world-doesnt-appreciate-feminist.JPG';
import slide4 from '../../data/artwork/qualia-exhibit/wisdom-circle.JPG';
import slide5 from '../../data/artwork/qualia-exhibit/there-i-am.JPG';
import slide6 from '../../data/artwork/qualia-exhibit/spiritual-growth.JPG';
import slide7 from '../../data/artwork/qualia-exhibit/seed-pod.JPG';
import slide8 from '../../data/artwork/qualia-exhibit/rivers-blue.jpg';
import slide9 from '../../data/artwork/qualia-exhibit/poppies.jpg';
import slide10 from '../../data/artwork/qualia-exhibit/regenerative.JPG';
import slide11 from '../../data/artwork/qualia-exhibit/music-in-the-hills.JPG';
import slide12 from '../../data/artwork/qualia-exhibit/mountains-i-climb.jpg';
import slide13 from '../../data/artwork/qualia-exhibit/mapping-progress.jpg';
import slide14 from '../../data/artwork/qualia-exhibit/letter-to-children.JPG';
import slide15 from '../../data/artwork/qualia-exhibit/family-mandala.jpeg';

import QualiaExhibit from '../../components/QualiaExhibit';

export default function Gallery () {



    return (
        <div className='page-body' id='gallery-page'>
			<h1 className='page-header'>Gallery</h1>
            <div className='exhibit-container'>
                <h2 className='exhibit-title'>Qualia Exhibit</h2>

                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide1}
                        alt="Indigo dreams"
                        />
                        <Carousel.Caption>
                        <h3>Indigo dreams</h3>
                        <p>The Qualia Exhibit</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide2}
                        alt="You and I"
                        />

                        <Carousel.Caption>
                        <h3>You and I</h3>
                        <p>The Qualia Exhibit</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide3}
                        alt="The world doesn't always appreciate a feminist"
                        />

                        <Carousel.Caption>
                        <h3>The world doesn't always appreciate a feminist</h3>
                        <p>The Qualia Exhibit</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide4}
                        alt="Wisdom Circle"
                        />

                        <Carousel.Caption>
                        <h3>Wisdom Circle</h3>
                        <p>The Qualia Exhibit</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide5}
                        alt="Everywhere I go, there I am"
                        />

                        <Carousel.Caption>
                        <h3>Everywhere I go, there I am</h3>
                        <p>The Qualia Exhibit</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide6}
                        alt="Spiritual growth"
                        />

                        <Carousel.Caption>
                        <h3>Spiritual growth</h3>
                        <p>The Qualia Exhibit</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide7}
                        alt="Seed pod"
                        />

                        <Carousel.Caption>
                        <h3>Seed pod</h3>
                        <p>The Qualia Exhibit</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide8}
                        alt="Rivers of blue"
                        />

                        <Carousel.Caption>
                        <h3>Rivers of blue</h3>
                        <p>The Qualia Exhibit</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide9}
                        alt="Poppies"
                        />

                        <Carousel.Caption>
                        <h3>Poppies</h3>
                        <p>The Qualia Exhibit</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide10}
                        alt="Regenerative"
                        />

                        <Carousel.Caption>
                        <h3>Regenerative</h3>
                        <p>The Qualia Exhibit</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide11}
                        alt="There is music in the hills"
                        />

                        <Carousel.Caption>
                        <h3>There is music in the hills</h3>
                        <p>The Qualia Exhibit</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide12}
                        alt="The mountains I climb"
                        />

                        <Carousel.Caption>
                        <h3>The mountains I climb</h3>
                        <p>The Qualia Exhibit</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide13}
                        alt="Mapping my progress"
                        />

                        <Carousel.Caption>
                        <h3>Mapping my progress</h3>
                        <p>The Qualia Exhibit</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide14}
                        alt="A letter to my children"
                        />

                        <Carousel.Caption>
                        <h3>A letter to my children</h3>
                        <p>The Qualia Exhibit</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide15}
                        alt="Family mandala"
                        />

                        <Carousel.Caption>
                        <h3>Family mandala</h3>
                        <p>The Qualia Exhibit</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <QualiaExhibit />
            </div>
        </div>
    );
}
