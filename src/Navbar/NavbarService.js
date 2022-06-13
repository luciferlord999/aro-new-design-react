import React from 'react'

function NavbarService() {
    return (
        <>

            {/* Start Navigation */}
            <div className="header header-light">
                <div className="container">
                    <nav id="navigation" className="navigation navigation-landscape">
                        <div className="nav-header">
                            <a className="nav-brand" href="/">
                                <img src="assets/img/logo.png" className="logo" alt="" />
                            </a>
                            <div className="nav-toggle" />
                            <div className="mobile_nav">
                                <ul>
                                    <li className="_my_prt_list">
                                        <a href="#">
                                            <span>2</span>My List
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-toggle="modal" data-target="#login">
                                            <i className="fas fa-user-circle fa-lg" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="nav-menus-wrapper"
                            style={{ transitionProperty: "none" }}
                        >
                            <ul className="nav-menu">
                                <li className="active">
                                    <a href="/">
                                        Home
                                        <span className="submenu-indicator" />
                                    </a>
                                    <ul className="nav-dropdown nav-submenu">
                                        <li>
                                            <a href="index.html">Home 1</a>
                                        </li>
                                        <li>
                                            <a href="home-2.html">Home 2</a>
                                        </li>
                                        <li>
                                            <a href="home-3.html">Home 3</a>
                                        </li>
                                        <li>
                                            <a href="home-4.html">Home 4</a>
                                        </li>
                                        <li>
                                            <a href="home-5.html">Home 5</a>
                                        </li>
                                        <li>
                                            <a href="home-6.html">Home 6</a>
                                        </li>
                                        <li>
                                            <a href="home-7.html">Home 7</a>
                                        </li>
                                        <li>
                                            <a href="map.html">Map Home</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">
                                        Listings
                                        <span className="submenu-indicator" />
                                    </a>
                                    <ul className="nav-dropdown nav-submenu">
                                        <li>
                                            <a href="#">
                                                Listing Grid
                                                <span className="submenu-indicator" />
                                            </a>
                                            <ul className="nav-dropdown nav-submenu">
                                                <li>
                                                    <a href="grid-layout-with-sidebar.html">Grid Style 1</a>
                                                </li>
                                                <li>
                                                    <a href="grid-layout-2.html">Grid Style 2</a>
                                                </li>
                                                <li>
                                                    <a href="grid-layout-3.html">Grid Style 3</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Listing List
                                                <span className="submenu-indicator" />
                                            </a>
                                            <ul className="nav-dropdown nav-submenu">
                                                <li>
                                                    <a href="list-layout-with-sidebar.html">List Style 1</a>
                                                </li>
                                                <li>
                                                    <a href="list-layout-with-map-2.html">List Style 2</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Listing Map
                                                <span className="submenu-indicator" />
                                            </a>
                                            <ul className="nav-dropdown nav-submenu">
                                                <li>
                                                    <a href="half-map.html">Half Map</a>
                                                </li>
                                                <li>
                                                    <a href="half-map-2.html">Half Map 2</a>
                                                </li>
                                                <li>
                                                    <a href="classical-layout-with-map.html">
                                                        Classical With Sidebar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="list-layout-with-map.html">List Sidebar Map</a>
                                                </li>
                                                <li>
                                                    <a href="grid-layout-with-map.html">Grid Sidebar Map</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Agents View
                                                <span className="submenu-indicator" />
                                            </a>
                                            <ul className="nav-dropdown nav-submenu">
                                                <li>
                                                    <a href="agents.html">Agent Grid Style</a>
                                                </li>
                                                <li>
                                                    <a href="agents-2.html">Agent Grid 2</a>
                                                </li>
                                                <li>
                                                    <a href="agent-page.html">Agent Detail Page</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Agency View
                                                <span className="submenu-indicator" />
                                            </a>
                                            <ul className="nav-dropdown nav-submenu">
                                                <li>
                                                    <a href="agencies.html">Agency Grid Style</a>
                                                </li>
                                                <li>
                                                    <a href="agency-page.html">Agency Detail Page</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">
                                        Property
                                        <span className="submenu-indicator" />
                                    </a>
                                    <ul className="nav-dropdown nav-submenu">
                                        <li className="">
                                            <a href="#">
                                                User Admin
                                                <span className="submenu-indicator" />
                                            </a>
                                            <ul className="nav-dropdown nav-submenu">
                                                <li>
                                                    <a href="dashboard.html">User Dashboard</a>
                                                </li>
                                                <li>
                                                    <a href="my-profile.html">My Profile</a>
                                                </li>
                                                <li>
                                                    <a href="my-property.html">My Property</a>
                                                </li>
                                                <li>
                                                    <a href="messages.html">Messages</a>
                                                </li>
                                                <li>
                                                    <a href="bookmark-list.html">Bookmark Property</a>
                                                </li>
                                                <li>
                                                    <a href="submit-property.html">Submit Property</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Single Property
                                                <span className="submenu-indicator" />
                                            </a>
                                            <ul className="nav-dropdown nav-submenu">
                                                <li>
                                                    <a href="single-property-1.html">Single Property 1</a>
                                                </li>
                                                <li>
                                                    <a href="single-property-2.html">Single Property 2</a>
                                                </li>
                                                <li>
                                                    <a href="single-property-3.html">Single Property 3</a>
                                                </li>
                                                <li>
                                                    <a href="single-property-4.html">Single Property 4</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="compare-property.html">Compare Property</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">
                                        Pages
                                        <span className="submenu-indicator" />
                                    </a>
                                    <ul className="nav-dropdown nav-submenu">
                                        <li>
                                            <a href="blog.html">Blog Style</a>
                                        </li>
                                        <li>
                                            <a href="about-us.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="pricing.html">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="404.html">404 Page</a>
                                        </li>
                                        <li>
                                            <a href="checkout.html">Checkout</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                        <li>
                                            <a href="component.html">Elements</a>
                                        </li>
                                        <li>
                                            <a href="privacy.html">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="faq.html">FAQs</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="nav-menu nav-menu-social align-to-right">
                                <li>
                                    <a
                                        href="#"
                                        className="alio_green"
                                        data-toggle="modal"
                                        data-target="#login"
                                    >
                                        <i className="fas fa-sign-in-alt mr-1" />
                                        <span className="dn-lg">Sign In</span>
                                    </a>
                                </li>
                                <li className="add-listing">
                                    <a href="submit-property.html" className="theme-cl">
                                        <i className="fas fa-plus-circle mr-1" />
                                        Add Property
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            {/* End Navigation */}






        </>
    )
}

export default NavbarService