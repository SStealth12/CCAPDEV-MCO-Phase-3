import React from 'react'
import Promobar from '../../components/promobar/Promobar'
import Navbar from '../../components/navbar/Navbar'
import Desktopnav from '../../components/desktopnav/Desktopnav'
import Footer from '../../components/footer/Footer'

const Home = () => {
    return (
        <div className='Home'>
            <Promobar />
            <Navbar />
            <Desktopnav />

            <div className="banner">

                <div className="container">

                    <div className="slider-container has-scrollbar">

                        <div className="slider-item">

                            <img src="./assets/images/homepage-banner1.svg" alt="bg1 banner" className="banner-img" />


                        </div>

                        <div className="slider-item">

                            <img src="./assets/images/homepage-banner2.svg" alt="bg2 banner" className="banner-img" />

                        </div>

                    </div>

                </div>

            </div>

            <div className="product-container">

                <div className="container">


                    <div className="product-main">

                        <h2 className="title">About Us</h2>
                        <p className="about-paragraph">
                            In today's digital era, there is a growing demand for convenient and dependable access to local services. Traditional approaches to locating local services, such as word-of-mouth recommendations and online directories, can be time-consuming, limited in scope, and opaque. Consequently, there is a growing demand for an online marketplace that simplifies the process of locating, evaluating, and booking local services, providing users with a platform to discover and interact with service providers quickly and simply.
                        </p>
                        <p className="about-paragraph">
                            The proposed Online Marketplace for Local Services Web Application addresses the difficulty and inefficiency associated with locating and engaging local service providers. Existing methods do not provide a centralized platform that addresses comprehensively the diverse requirements of consumers seeking local services. Users frequently struggle to identify trustworthy and suitable service providers, while service providers struggle to effectively reach their target audience. This disparity hinders the overall experience, squandering users' and service providers' time and resources.
                        </p>
                        <p className="about-paragraph">
                            Localize is an innovative web application that seeks to transform the way in which users discover and interact with local services. By providing a user-friendly platform, Localize connects users with a vast selection of reputable service providers, enabling them to peruse, evaluate, and book services based on their specific requirements. Localize empowers service providers by providing them with a platform to exhibit their skills and offerings, thereby expanding their reach and clientele. Localize assures a dependable and effective experience for the users and providers through the seamless integration of user reviews, ratings, and transparent communication channels. Localize simplifies, verifies, and adapts the process of accessing local services for the specific requirements of each user.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home