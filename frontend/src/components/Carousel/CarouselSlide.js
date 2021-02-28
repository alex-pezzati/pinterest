import React, { useEffect } from 'react';
import c from './Carousel.module.css'

function CarouselSlide({ image, active }) {
    // console.log(image, 'inside of slide comp')
    // console.log(active, 'inside of slide comp')

    const style = {background: `url('${image}') center`}

    // let transitions;
    // useEffect(() => {
    //     if (active === 1) {
    //         transitions = {
    //             transform: 'translateY(-40px)',
    //             opacity: 1,
    //             zIndex: 2
    //         }
    //     } else {
    //         transitions = {
    //             transform: 'translateY(-80px)',
    //             opacity: 0,
    //             zIndex: 0
    //         }
    //     }
    // }, [active])

    let transitions;
    if (active === 1) {
        transitions = {
            transform: 'translateY(-40px)',
            opacity: 1,
            zIndex: 2
        }
    } else {
        transitions = {
            transform: 'translateY(-80px)',
            opacity: 0,
            zIndex: 0
        }
    }

    return (
        <div className={c.slide} >
            <div style={{width: '252px'}}>
                <div style={{marginTop: '0px'}}>
                    <div style={transitions}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                1
                            </div>
                        </div>
                    </div>
                    <div style={transitions}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                1
                            </div>
                        </div>
                    </div>
                    <div style={transitions}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                1
                            </div>
                        </div>
                    </div>
                    <div style={transitions}> {/* remember to change this back to -80px, 0, 0*/}
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
                    <div style={transitions}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                2
                            </div>
                        </div>
                    </div>
                    <div style={transitions}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                2
                            </div>
                        </div>
                    </div>
                    <div style={transitions}> {/* remember to change this back to -80px, 0, 0*/}
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
                    <div style={transitions}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                3
                            </div>
                        </div>
                    </div>
                    <div style={transitions}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                3
                            </div>
                        </div>
                    </div>
                    <div style={transitions}> {/* remember to change this back to -80px, 0, 0*/}
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
                    <div style={transitions}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                4
                            </div>
                        </div>
                    </div>
                    <div style={transitions}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                4
                            </div>
                        </div>
                    </div>
                    <div style={transitions}> {/* remember to change this back to -80px, 0, 0*/}
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
                    <div style={transitions}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                5
                            </div>
                        </div>
                    </div>
                    <div style={transitions}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                5
                            </div>
                        </div>
                    </div>
                    <div style={transitions}> {/* remember to change this back to -80px, 0, 0*/}
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
                    <div style={transitions}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                6
                            </div>
                        </div>
                    </div>
                    <div style={transitions}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                6
                            </div>
                        </div>
                    </div>
                    <div style={transitions}> {/* remember to change this back to -80px, 0, 0*/}
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
                    <div style={transitions}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                7
                            </div>
                        </div>
                    </div>
                    <div style={transitions}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                7
                            </div>
                        </div>
                    </div>
                    <div style={transitions}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                7
                            </div>
                        </div>
                    </div>
                    <div style={transitions}> {/* remember to change this back to -80px, 0, 0*/}
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
