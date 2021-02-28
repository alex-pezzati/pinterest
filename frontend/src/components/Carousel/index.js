import React, { useEffect, useState } from 'react';

import { CarouselData } from './CarouselData';
import CarouselSlide from './CarouselSlide';

import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import image4 from '../../images/4.jpg';

import c from './Carousel.module.css';


function Carousel() {
    // const images = CarouselData
    const images = [ image1, image2, image3, image4 ]

    const [active, setActive] = useState( 1 )

    // const setActiveSlide = (e) => {
    //     setActive(e)
    // }

    // useEffect(() => {

    // })
        // images.map((image, idx) => {
        //     console.log(image)
        //     console.log(idx)
        //     console.log(active === idx ? true : false)
        // })

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
                            <button
                                onClick={(e) => setActive(e.target.id)}
                                id={0}
                                className={c.button}
                            >
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={(e) => setActive(e.target.id)}
                                id={1}
                                className={c.button}
                            >
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={(e) => setActive(e.target.id)}
                                id={2}
                                className={c.button}
                            >
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={(e) => setActive(e.target.id)}
                                id={3}
                                className={c.button}
                            >
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            {images.map((image, idx) => (
                <CarouselSlide
                    key={idx}
                    image={image}
                    active={active === idx ? 1 : -1}
                />
            ))}
        </div>
    )
}

export default Carousel;
