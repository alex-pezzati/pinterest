import React, { useEffect } from 'react';
import c from './Carousel.module.css'

function CarouselSlide({ idx, image, active }) {
    console.log(image, 'inside of slide comp')
    console.log(active, 'inside of slide comp')
    console.log(idx, 'inside of slide comp')

    const style = {background: `url('${image}') center`}


    const transitions = {
        transform: active == idx ? 'translateY(-40px)' : 'translateY(-80px)',
        opacity: active == idx ? 1 : 0,
        zIndex: active == idx ? 2 : 0
    }

    console.log(transitions)

    return (
        <div className={c.slide} >
            <div style={{width: '252px'}}>
                <div style={{marginTop: '0px'}}>
                    <div style={transitions}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                1
                            </div>
                        </div>
                    </div>
                    <div style={transitions}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                1
                            </div>
                        </div>
                    </div>
                    <div style={transitions}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                1
                            </div>
                        </div>
                    </div>
                    <div style={transitions}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                1
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '252px'}}>
                <div style={{marginTop: '160px'}}>
                    <div style={transitions}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                2
                            </div>
                        </div>
                    </div>
                    <div style={transitions}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                2
                            </div>
                        </div>
                    </div>
                    <div style={transitions}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '252px'}}>
                <div style={{marginTop: '240px'}}>
                    <div style={transitions}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                3
                            </div>
                        </div>
                    </div>
                    <div style={transitions}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                3
                            </div>
                        </div>
                    </div>
                    <div style={transitions}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '252px'}}>
                <div style={{marginTop: '400px'}}>
                    <div style={transitions}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                4
                            </div>
                        </div>
                    </div>
                    <div style={transitions}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                4
                            </div>
                        </div>
                    </div>
                    <div style={transitions}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                4
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '252px'}}>
                <div style={{marginTop: '240px'}}>
                    <div style={transitions}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                5
                            </div>
                        </div>
                    </div>
                    <div style={transitions}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                5
                            </div>
                        </div>
                    </div>
                    <div style={transitions}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                5
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '252px'}}>
                <div style={{marginTop: '160px'}}>
                    <div style={transitions}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                6
                            </div>
                        </div>
                    </div>
                    <div style={transitions}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                6
                            </div>
                        </div>
                    </div>
                    <div style={transitions}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                6
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '252px'}}>
                <div style={{marginTop: '0px'}}>
                    <div style={transitions}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                7
                            </div>
                        </div>
                    </div>
                    <div style={transitions}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                7
                            </div>
                        </div>
                    </div>
                    <div style={transitions}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                7
                            </div>
                        </div>
                    </div>
                    <div style={transitions}>
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                7
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselSlide;
