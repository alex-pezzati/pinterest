import React from 'react';
import c from './Carousel.module.css'

function CarouselSlide(image) {
    // console.log(image)
    // console.log(image.image)

    const style = {background: `url('${image.image}') center`}

    return (
        <div className={c.slide} >
            <div style={{width: '252px'}}>
                <div style={{'margin-top': '0px'}}>
                    <div style={{transform: 'translateY(-40px)', opacity: 1, 'z-index': 2}}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                1
                            </div>
                        </div>
                    </div>
                    <div style={{transform: 'translateY(-40px)', opacity: 1, 'z-index': 2}}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                1
                            </div>
                        </div>
                    </div>
                    <div style={{transform: 'translateY(-40px)', opacity: 1, 'z-index': 2}}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                1
                            </div>
                        </div>
                    </div>
                    <div style={{transform: 'translateY(-40px)', opacity: 1, 'z-index': 2}}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                1
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '252px'}}>
                <div style={{'margin-top': '160px'}}>
                    <div style={{transform: 'translateY(-40px)', opacity: 1, 'z-index': 2}}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                2
                            </div>
                        </div>
                    </div>
                    <div style={{transform: 'translateY(-40px)', opacity: 1, 'z-index': 2}}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                2
                            </div>
                        </div>
                    </div>
                    <div style={{transform: 'translateY(-40px)', opacity: 1, 'z-index': 2}}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '252px'}}>
                <div style={{'margin-top': '240px'}}>
                    <div style={{transform: 'translateY(-40px)', opacity: 1, 'z-index': 2}}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                3
                            </div>
                        </div>
                    </div>
                    <div style={{transform: 'translateY(-40px)', opacity: 1, 'z-index': 2}}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                3
                            </div>
                        </div>
                    </div>
                    <div style={{transform: 'translateY(-40px)', opacity: 1, 'z-index': 2}}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '252px'}}>
                <div style={{'margin-top': '400px'}}>
                    <div style={{transform: 'translateY(-40px)', opacity: 1, 'z-index': 2}}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                4
                            </div>
                        </div>
                    </div>
                    <div style={{transform: 'translateY(-40px)', opacity: 1, 'z-index': 2}}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                4
                            </div>
                        </div>
                    </div>
                    <div style={{transform: 'translateY(-40px)', opacity: 1, 'z-index': 2}}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                4
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '252px'}}>
                <div style={{'margin-top': '240px'}}>
                    <div style={{transform: 'translateY(-40px)', opacity: 1, 'z-index': 2}}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                5
                            </div>
                        </div>
                    </div>
                    <div style={{transform: 'translateY(-40px)', opacity: 1, 'z-index': 2}}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                5
                            </div>
                        </div>
                    </div>
                    <div style={{transform: 'translateY(-40px)', opacity: 1, 'z-index': 2}}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                5
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '252px'}}>
                <div style={{'margin-top': '160px'}}>
                    <div style={{transform: 'translateY(-40px)', opacity: 1, 'z-index': 2}}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                6
                            </div>
                        </div>
                    </div>
                    <div style={{transform: 'translateY(-40px)', opacity: 1, 'z-index': 2}}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                6
                            </div>
                        </div>
                    </div>
                    <div style={{transform: 'translateY(-40px)', opacity: 1, 'z-index': 2}}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                6
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '252px'}}>
                <div style={{'margin-top': '0px'}}>
                    <div style={{transform: 'translateY(-40px)', opacity: 1, 'z-index': 2}}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                7
                            </div>
                        </div>
                    </div>
                    <div style={{transform: 'translateY(-40px)', opacity: 1, 'z-index': 2}}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                7
                            </div>
                        </div>
                    </div>
                    <div style={{transform: 'translateY(-40px)', opacity: 1, 'z-index': 2}}> {/* remember to change this back to -80px, 0, 0*/}
                        <div className={c.innerdiv}>
                            <div className={c.imagediv} style={style}>
                                7
                            </div>
                        </div>
                    </div>
                    <div style={{transform: 'translateY(-40px)', opacity: 1, 'z-index': 2}}> {/* remember to change this back to -80px, 0, 0*/}
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
