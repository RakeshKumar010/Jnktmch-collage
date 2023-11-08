import React from 'react'
import './Carousel.css'
import Img_1 from '../../assets/banner_4.jpg'
import Img_2 from '../../assets/campus.jpeg'
import Img_3 from '../../assets/banner_2.jpg'
import Notification from './Notification'
const Carousel = () => {
    return (
        <>
            <div className="carousel_main">
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Img_3} className="d-block  tales" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Img_2} className="d-block  tales" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Img_1} className="d-block tales" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <Notification />
            </div>
        </>
    )
}

export default Carousel