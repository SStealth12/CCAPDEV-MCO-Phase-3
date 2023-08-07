import React from 'react'

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="slider-container has-scrollbar">
                    <div className="slider-item">
                        <img
                            src="/assets/images/banner-1.png"
                            alt="repairs banner"
                            className="banner-img"
                        />

                        <div className="banner-content">
                            <p className="banner-subtitle">Repair Services</p>

                            <h2 className="banner-title">Home Repair Sale</h2>

                            <p className="banner-text"></p>

                            <a href="/listings" className="banner-btn">Book now</a>
                        </div>
                    </div>

                    <div className="slider-item">
                        <img
                            src="/assets/images/banner-2.png"
                            alt="pet grooming banner"
                            className="banner-img"
                        />

                        <div className="banner-content">
                            <p className="banner-subtitle">Pet Services</p>

                            <h2 className="banner-title">Pet Grooming Galore</h2>

                            <p className="banner-text"></p>

                            <a href="/listings" className="banner-btn">Book now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner