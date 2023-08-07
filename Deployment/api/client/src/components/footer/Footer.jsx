import { Helmet } from 'react-helmet';
import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="footer-nav">
                <Helmet>
                    <script
                        type="module"
                        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
                    />
                    <script
                        nomodule
                        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
                    />
                </Helmet>

                <div className="container">
                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <h2 className="nav-title">Popular Categories</h2>
                        </li>

                        <li className="footer-nav-item">
                            <a href="/home" className="footer-nav-link">Repairs</a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="/home" className="footer-nav-link">Healthcare</a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="/home" className="footer-nav-link">Pets</a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="/home" className="footer-nav-link">Personal Care</a>
                        </li>
                    </ul>

                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <h2 className="nav-title">Whats new</h2>
                        </li>

                        <li className="footer-nav-item">
                            <a href="/home" className="footer-nav-link">Price drop</a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="/home" className="footer-nav-link">New Services</a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="/home" className="footer-nav-link">Discounts</a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="/home" className="footer-nav-link">Contact us</a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="/home" className="footer-nav-link">Sitemap</a>
                        </li>
                    </ul>

                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <h2 className="nav-title">Our Company</h2>
                        </li>

                        <li className="footer-nav-item">
                            <a href="/home" className="footer-nav-link">Legal Notice</a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="/home" className="footer-nav-link">Terms and conditions</a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="/home" className="footer-nav-link">About us</a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="/home" className="footer-nav-link">Secure payment</a>
                        </li>
                    </ul>

                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <h2 className="nav-title">Contact</h2>
                        </li>

                        <li className="footer-nav-item flex">
                            <div className="icon-box">
                                <ion-icon name="location-outline"></ion-icon>
                            </div>

                            <a
                                href="https://goo.gl/maps/vSTM1RhE2WHAFXaA9"
                                className="footer-nav-link"
                            >2401 Taft Ave, Malate, Manila, 1004 Metro Manila</a>
                        </li>

                        <li className="footer-nav-item flex">
                            <div className="icon-box">
                                <ion-icon name="call-outline"></ion-icon>
                            </div>

                            <a href="tel:+607936-8058" className="footer-nav-link"
                            >(02) 8524 4611</a>
                        </li>

                        <li className="footer-nav-item flex">
                            <div className="icon-box">
                                <ion-icon name="mail-outline"></ion-icon>
                            </div>

                            <a href="example@dlsu.edu.ph" className="footer-nav-link"
                            >example@dlsu.edu.ph</a>
                        </li>
                    </ul>

                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <h2 className="nav-title">Follow Us</h2>
                        </li>

                        <li>
                            <ul className="social-link">
                                <li className="footer-nav-item">
                                    <a href="/home" className="footer-nav-link">
                                        <ion-icon name="logo-facebook"></ion-icon>
                                    </a>
                                </li>

                                <li className="footer-nav-item">
                                    <a href="/home" className="footer-nav-link">
                                        <ion-icon name="logo-twitter"></ion-icon>
                                    </a>
                                </li>

                                <li className="footer-nav-item">
                                    <a href="/home" className="footer-nav-link">
                                        <ion-icon name="logo-linkedin"></ion-icon>
                                    </a>
                                </li>

                                <li className="footer-nav-item">
                                    <a href="/home" className="footer-nav-link">
                                        <ion-icon name="logo-instagram"></ion-icon>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <img
                        src="/assets/images/payment.png"
                        alt="payment method"
                        className="payment-img"
                    />
                </div>
            </div>    
        </footer>
    )
}

export default Footer