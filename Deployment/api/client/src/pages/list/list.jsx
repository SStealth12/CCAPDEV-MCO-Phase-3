import Navbar from "../../components/navbar/Navbar"
import Promobar from "../../components/promobar/Promobar"
import Desktopnav from "../../components/desktopnav/Desktopnav"
import Banner from "../../components/banner/Banner"
import Footer from "../../components/footer/Footer"
import { Helmet } from 'react-helmet';
import "./list.css"
import Featured from "../../components/featured/Featured"


const List = () => {
  return (
    <div className="service-listings">
      <Promobar />
      <Navbar />
      <Desktopnav />
      <Banner />
      <div className="product-container">
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

        <Featured />
      </div>
      <Footer />
    </div>
  )
}

export default List