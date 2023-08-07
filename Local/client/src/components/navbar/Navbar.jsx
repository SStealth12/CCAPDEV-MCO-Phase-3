import { Helmet } from 'react-helmet';
import "./navbar.css"
import { useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext);

    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate()

    const handleSearch = () => {
        if (!searchInput.trim()) {
            return;
        }
        navigate("/listings/search", { state: { searchQuery: searchInput } });
    }

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
                <a href="/home" className="header-logo">
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
                        placeholder="Search for a service.."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />

                    <button className="search-btn left-btn" onClick={handleSearch}>
                        <ion-icon name="search-outline"></ion-icon>
                    </button>

                    <button className="category-btn">
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
    )
}

export default Navbar