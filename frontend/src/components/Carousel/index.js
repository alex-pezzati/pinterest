import React, { useState } from 'react';

import CarouselSlide from './CarouselSlide';

import c from './Carousel.module.css';


function Carousel() {

    return (
        <div>
            carousel
            <CarouselSlide />
            <CarouselSlide />
        </div>
    )
}

export default Carousel;
