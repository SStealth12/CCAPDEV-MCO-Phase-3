import Promobar from '../../components/promobar/Promobar'
import Footer from '../../components/footer/Footer'
import Desktopnav from '../../components/desktopnav/Desktopnav'
import Searchitem from '../../components/searchitem/Searchitem';
import "./searchres.css"

import { useLocation } from 'react-router-dom'
import React, { useContext, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'
import { AuthContext } from '../../context/AuthContext';


const Searchres = () => {
  const { user, dispatch } = useContext(AuthContext);

  const location = useLocation();
  const [searchInput, setSearchInput] = useState(location.state?.searchInput);
  const navigate = useNavigate()

  const [searchResultsTitle, setSearchResultsTitle] = useState('Search Results');

  const handleSearch = () => {

    if (!searchInput.trim()) {
      return;
    }
    navigate("/listings/search", { state: { searchQuery: searchInput } });
    reFetch();
  }

  useEffect(() => {
    if (location.state?.searchQuery) {
      setSearchResultsTitle(`Search Results for "${location.state.searchQuery}"`);
    } else {
      setSearchResultsTitle('Search Results');
    }
  }, [location.state]);

  const { data, loading, error, reFetch } = useFetch(
    `/listing?name=${searchInput}`
  );

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "LOGOUT" });
      navigate("/");
    }
    catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className='search-results'>
      <Promobar />

      <div className="header-main">
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
          <a href="/#" class="header-logo">
            <img
              src="/assets/images/logo/localize_logo.png"
              alt="Localize Logo"
              width="150"
              height="30"
            />
          </a>

          <div className="header-search-container">
            <input
              type="search"
              id="searchInput"
              name="search"
              className="search-field"
              placeholder={searchInput}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />

            <button className="search-btn left-btn" onClick={handleSearch}>
              <ion-icon name="search-outline"></ion-icon>
            </button>

            <button className="category-btn" onclick="search()">
              <ion-icon name="reorder-three-outline"></ion-icon>
            </button>
          </div>

          <div className="header-user-actions">
            <div className="dropdown">
              <button className="action-btn">
                <ion-icon name="person-outline"></ion-icon>
              </button>

              <div className="dropdown-content">
                <div className="dropdown-title">Logged in as <b>{user.username}</b></div>
                <button onClick={handleLogout}>Log out</button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Desktopnav />

      <div className='results-listings'>
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

          <div className="container">
            <div className="product-main">
              <h2 className="title">{searchResultsTitle}</h2>

              <div className="product-grid">
                {loading ? (
                  "loading"
                ) : (
                  <>
                    {data.map((item) => (
                      <Searchitem item={item} key={item._id} />
                    ))}
                  </>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Searchres