import React, { useState } from 'react';

import { CarouselData } from './CarouselData';
import CarouselSlide from './CarouselSlide';

import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import image4 from '../../images/4.jpg';

import c from './Carousel.module.css';


function Carousel() {
    const images = [ image1, image2, image3, image4 ]
    // const images = CarouselData

    const [state, setState] = useState({
        focusSlide: 0,
        opacity: 0,
        transform: 'translateY(-40px)',
        'z-index': 0,
    })

    const { focusSlide, opacity, transform } = state;


    return (
        <div className={c.container}>
            <div className={c.header__container}>
                <div className={c.title}>Get your next</div>
                <div className={c.subtitles}>
                    <p id={c.dinner} className={c.flavor}>
                        weeknight dinner idea
                    </p>
                    <p id={c.decor} className={c.flavor}>
                        home decor idea
                    </p>
                    <p id={c.outfit} className={c.flavor}>
                        new look outfit
                    </p>
                    <p id={c.thumb} className={c.flavor}>
                        green thumb idea
                    </p>
                </div>
                <div className={c.button__container}>
                    <ul className={c.button__list}>
                        <li>
                            <button className={c.button}></button>
                        </li>
                        <li>
                            <button className={c.button}></button>
                        </li>
                        <li>
                            <button className={c.button}></button>
                        </li>
                        <li>
                            <button className={c.button}></button>
                        </li>
                    </ul>
                </div>
            </div>
            {images.map((image, idx) => (
                <CarouselSlide key={idx} image={image}/>
            ))}
        </div>
    )
}

export default Carousel;
