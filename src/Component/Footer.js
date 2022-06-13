import React from 'react'

function Footer() {
    return (
        <>
            {/* ============================ Footer Start ================================== */}
            <footer className="dark-footer skin-dark-footer style-2">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-5">
                                <div className="footer_widget">
                                    <img
                                        src="assets/img/logo.webp"
                                        className="img-footer small mb-2"
                                        alt=""
                                    />

                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, ullam ipsa fuga earum facilis praesentium quas porro laudantium eos dolorum, necessitatibus ut mollitia reiciendis dolor consectetur deserunt in eligendi quaerat!
                                    </p>
                                    <div className="foot-news-last">
                                        {/* <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Email Address"
                                            />
                                            <div className="input-group-append">
                                                <button
                                                    type="button"
                                                    className="input-group-text theme-bg b-0 text-light"
                                                >
                                                    Subscribe
                                                </button>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-7 ml-auto">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="footer_widget">
                                            <h4 className="widget_title">Product</h4>
                                            <ul className="footer-menu">
                                                <li>
                                                    <a href="#">Water Purifiers</a>
                                                </li>
                                                <li>
                                                    <a href="#">Water Softeners</a>
                                                </li>
                                                <li>
                                                    <a href="#">Kitchen</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Air Purifiers
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">Vacuum Cleaners</a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="footer_widget">
                                            <h4 className="widget_title">All Sections</h4>
                                            <ul className="footer-menu">
                                                <li>
                                                    <a href="#">
                                                        Headers<span className="new">New</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">Features</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Attractive<span className="new">New</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">Testimonials</a>
                                                </li>
                                                <li>
                                                    <a href="#">Videos</a>
                                                </li>
                                                <li>
                                                    <a href="#">Footers</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="footer_widget">
                                            <h4 className="widget_title">Company</h4>
                                            <ul className="footer-menu">
                                                <li>
                                                    <a href="#">About</a>
                                                </li>
                                                <li>
                                                    <a href="#">Blog</a>
                                                </li>
                                                <li>
                                                    <a href="#">Pricing</a>
                                                </li>
                                                <li>
                                                    <a href="#">Affiliate</a>
                                                </li>
                                                <li>
                                                    <a href="#">Login</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Changelog<span className="update">Update</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 col-md-12 text-center">
                                <p className="mb-0">
                                    © 2022  Designd By     {" "}
                                    <a href="https://www.digitalnawab.com/"><i className='fa fa-heart'></i> </a>
                                    Digital Nawab
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* ============================ Footer End ================================== */}
        </>
    )
}

export default Footer