import { Helmet } from 'react-helmet';
import "./promobar.css"

const Promobar = () => {
  return (
    <div className="header-top">
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
        <ul className="header-social-container">
          <li>
            <a href="/#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li>
            <a href="/#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li>
            <a href="/#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li>
            <a href="/#" className="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
        </ul>

        <div className="header-alert-news">
          <p>
            <b>10% Discount </b>
            Use code 'localize' for discounts on your bookings
          </p>
        </div>

        <div className="header-top-actions">
          <select name="currency">
            <option value="php">PHP &#8369;</option>
            <option value="usd">USD &#36;</option>
          </select>

          <select name="language">
            <option value="en-US">English</option>
            <option value="fil">Filipino</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Promobar