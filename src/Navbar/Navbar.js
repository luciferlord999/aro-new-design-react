import React, { useState } from 'react'
import { actionType } from '../Context/reducer';
import { useStateValue } from '../Context/StateProvider';

function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [{ user, cartShow, cartShowToast, cartItems }, dispatch] = useStateValue();
    // const [{ user, cartShow, cartShowToast, cartItems }, dispatch] = useStateValue();
    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    };







    const changeHeader = () => {
        if (window.scrollY >= 50) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeHeader);

    return (
        <>
            {/* Start Navigation */}
            <div className={navbar ? "header  header-transparent change-logo  header-fixed  " : "header  header-transparent change-logo "}>
                <div className="container">
                    <nav id="navigation" className="navigation navigation-landscape">
                        <div className="nav-header">
                            <a className="nav-brand static-logo" href="/">
                                <img src="assets/img/logo.webp" className="logo" alt="" />
                            </a>
                            <a className="nav-brand fixed-logo" href="/">
                                <img src="assets/img/logo2.webp" className="logo" alt="" />
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
                        <div className="nav-menus-wrapper" style={{ transitionProperty: "none" }}>
                            <ul className="nav-menu">
                                <li className="active">
                                    <a href="/">
                                        Home

                                    </a>

                                </li>
                                <li>
                                    <a href="#">
                                        Listings
                                        <span className="submenu-indicator" />
                                    </a>

                                </li>
                                <li>
                                    <a href="#">
                                        Property
                                        <span className="submenu-indicator" />
                                    </a>

                                </li>

                            </ul>
                            <ul className="nav-menu nav-menu-social align-to-right">
                                <li className="_my_prt_list"><a >
                                    {
                                        cartItems && cartItems.length > 0 && (<span>{cartItems.length}</span>)

                                    }
                                    <i class="fa fa-shopping-cart" aria-hidden="true" onClick={showCart} style={{ cursor: "pointer" }}></i></a></li>


                                <li className="add-listing">
                                    <a href="#" data-toggle="modal" data-target="#login" class="theme-cl">
                                        <i className="fas fa-sign-in-alt mr-1"></i>Sign In
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            {/* End Navigation */}
            <div className="clearfix" />

        </>
    )
}

export default Navbar