import React from 'react'

const Desktopnav = () => {
    return (
        <div className="desktopnav">
            <nav className="desktop-navigation-menu">
                <div className="container">
                    <ul className="desktop-menu-category-list">
                        <li className="menu-category">
                            <a href="/home" className="menu-title">Home</a>
                        </li>

                        <li className="menu-category">
                            <a href="/listings" className="menu-title">Service Listings</a>
                        </li>

                        <li className="menu-category">
                            <a href="/create" className="menu-title">Create a Listing</a>
                        </li>

                        <li className="menu-category">
                            <a href="/mylistings" className="menu-title"
                            >View My Listings</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Desktopnav