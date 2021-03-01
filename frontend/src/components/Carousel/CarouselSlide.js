import React, { useEffect } from 'react';
import c from './Carousel.module.css'

function CarouselSlide({ idx, image, active }) {
    console.log(image, 'inside of slide comp')
    console.log(active, 'inside of slide comp')
    console.log(idx, 'inside of slide comp')

    const style = {background: `url('${image}') center`}

    const transitions = {
        transform: active == idx ? 'translateY(-80px)' : 'translateY(-40px)',
        opacity: active == idx ? 1 : 0,
        zIndex: active == idx ? 2 : 0,
    }

    return (
        <div className={c.slide} >
            <div style={{width: '252px'}}>
                <div style={{marginTop: '0px'}}>
                    <div style={{...transitions, transition: '.3s ease-out'}}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                            </div>
                        </div>
                    </div>
                    <div style={{...transitions, transition: '.3s ease-out'}}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                            </div>
                        </div>
                    </div>
                    <div style={{...transitions, transition: '.3s ease-out'}}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                            </div>
                        </div>
                    </div>
                    <div style={{...transitions, transition: '.3s ease-out'}}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '252px'}}>
                <div style={{marginTop: '160px'}}>
                    <div style={{...transitions, transition: '.8s ease-out'}}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                            </div>
                        </div>
                    </div>
                    <div style={{...transitions, transition: '.8s ease-out'}}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                            </div>
                        </div>
                    </div>
                    <div style={{...transitions, transition: '.8s ease-out'}}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '252px'}}>
                <div style={{marginTop: '240px'}}>
                    <div style={{...transitions, transition: '1.3s ease-out'}}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                            </div>
                        </div>
                    </div>
                    <div style={{...transitions, transition: '1.3s ease-out'}}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                            </div>
                        </div>
                    </div>
                    <div style={{...transitions, transition: '1.3s ease-out'}}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '252px'}}>
                <div style={{marginTop: '400px'}}>
                    <div style={{...transitions, transition: '1.8s ease-out'}}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                            </div>
                        </div>
                    </div>
                    <div style={{...transitions, transition: '1.8s ease-out'}}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                            </div>
                        </div>
                    </div>
                    <div style={{...transitions, transition: '1.8s ease-out'}}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '252px'}}>
                <div style={{marginTop: '240px'}}>
                    <div style={{...transitions, transition: '2.3s ease-out'}}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                            </div>
                        </div>
                    </div>
                    <div style={{...transitions, transition: '2.3s ease-out'}}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                            </div>
                        </div>
                    </div>
                    <div style={{...transitions, transition: '2.3s ease-out'}}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '252px'}}>
                <div style={{marginTop: '160px'}}>
                    <div style={{...transitions, transition: '2.8s ease-out'}}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                            </div>
                        </div>
                    </div>
                    <div style={{...transitions, transition: '2.8s ease-out'}}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                            </div>
                        </div>
                    </div>
                    <div style={{...transitions, transition: '2.8s ease-out'}}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '252px'}}>
                <div style={{marginTop: '0px'}}>
                    <div style={{...transitions, transition: '3.3s ease-out'}}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                            </div>
                        </div>
                    </div>
                    <div style={{...transitions, transition: '3.3s ease-out'}}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                            </div>
                        </div>
                    </div>
                    <div style={{...transitions, transition: '3.3s ease-out'}}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                            </div>
                        </div>
                    </div>
                    <div style={{...transitions, transition: '3.3s ease-out'}}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselSlide;
