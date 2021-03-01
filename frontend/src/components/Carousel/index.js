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

    const [active, setActive] = useState( 0 )


    useEffect(() => {
        const interval = setInterval(() => {
            if (active == 3) {
                setActive(0);
            } else {
                setActive(active + 1)}
        }, 4500);

        return () => {
            clearInterval(interval);
        }
    }, [active]);



    const transitionIn = {
            transform: 'translateY(-40px)',
            transition: '1s ease-out 1.5s',
            opacity: 1,
            zIndex: 2
        }

    const transitionOut = {
            transform: 'translateY(-80px)',
            transition: '1s ease-out',
            opacity: 0,
            zIndex: 0
    }

    return (
        <>
            <div className={c.container}>
                <div className={c.header__container}>
                    <div className={c.title}>Get your next</div>
                    <div className={c.subtitles}>
                        <p
                            className={c.dinner}
                            style={active == 0 ? transitionIn : transitionOut}
                        >
                            weeknight dinner idea
                        </p>
                        <p
                            className={c.decor}
                            style={active == 1 ? transitionIn : transitionOut}
                        >
                            home decor idea
                        </p>
                        <p
                            className={c.outfit}
                            style={active == 2 ? transitionIn : transitionOut}
                        >
                            new outfit look
                        </p>
                        <p
                            className={c.thumb}
                            style={active == 3 ? transitionIn : transitionOut}
                        >
                            green thumb idea
                        </p>
                    </div>
                    <div className={c.button__container}>
                        <ul className={c.button__list}>
                            <li>
                                <button
                                    onClick={(e) => setActive(0)}
                                    id={0}
                                    className={active == 0 ? c.button0 : c.button}
                                >
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={(e) => setActive(1)}
                                    id={1}
                                    className={active == 1 ? c.button1 : c.button}
                                >
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={(e) => setActive(2)}
                                    id={2}
                                    className={active == 2 ? c.button2 : c.button}
                                >
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={(e) => setActive(3)}
                                    id={3}
                                    className={active == 3 ? c.button3 : c.button}
                                >
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                {images.map((image, idx) => (
                    <CarouselSlide
                        key={idx}
                        idx={idx}
                        image={image}
                        active={active}
                    />
                ))}
            </div>
            <div className={c.footer}>
            </div>
        </>
    )
}

export default Carousel;
