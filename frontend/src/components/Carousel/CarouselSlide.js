import React from 'react';
import c from './Carousel.module.css'

function CarouselSlide(image) {
    console.log(image)
    console.log(image.image)

    const style = {background: `url('${image.image}') center`}

    return (
        <div>
            slide
            <div
                className={c.image}
                style={style}
            >
            </div>
        </div>
    )
}

export default CarouselSlide;
