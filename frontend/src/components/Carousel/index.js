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

    return (
        <div>
            carousel
            {images.map((image, idx) => (
                <CarouselSlide key={idx} image={image}/>
            ))}
        </div>
    )
}

export default Carousel;
