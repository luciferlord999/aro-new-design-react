import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


function BestofferSlider() {
    const options = {

        responsiveClass: true,
        dots: true,
        nav: true,

        navText: ["<img src='/assets/img/left-arrow.webp' class='nav-button  owl-prev'/>", " <img src='/assets/img/right-arrow.webp' class='nav-button owl-next'/>"],
        loop: true,
        autoplay: false,
        // autoWidth:true, 

        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 3,
            },
        },
    };


    const product = [
        {
            id: "1",
            image: "/assets/img/offer/2.webp",


        },
        {
            id: "2",

            image: "/assets/img/offer/1.webp",

        },
        {
            id: "3",

            image: "/assets/img/offer/4.webp",


        },
        {
            id: "4",

            image: "/assets/img/offer/3.webp",

        }
    ];




    return (
        <>
            <div className="row justify-content-center">
                {/* Single Property */}
                <OwlCarousel className="slider-items owl-carousel " {...options}>

                    {
                        product?.map((data, index) => {



                            return (<>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="property-listing property-2 propertyWidth">
                                        <div className="listing-img-wrapper">
                                            {/* <div className="_exlio_125">For Sale</div> */}
                                            <div className="list-img-slide">
                                                <div className="click">
                                                    <div>
                                                        <a href="single-property-1.html">
                                                            <img
                                                                src={data.image}
                                                                className="img-fluid mx-auto"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                    {/* <div>
                                                <a href="single-property-1.html">
                                                    <img
                                                        src="assets/img/p-2.png"
                                                        className="img-fluid mx-auto"
                                                        alt=""
                                                    />
                                                </a>
                                            </div>
                                            <div>
                                                <a href="single-property-1.html">
                                                    <img
                                                        src="assets/img/p-3.png"
                                                        className="img-fluid mx-auto"
                                                        alt=""
                                                    />
                                                </a>
                                            </div> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="listing-detail-wrapper">
                                    <div className="listing-short-detail-wrap">
                                        <div className="_card_list_flex mb-2">
                                            <div className="_card_flex_01">
                                                <span className="_list_blickes _netork">6 Network</span>
                                                <span className="_list_blickes types">Family</span>
                                            </div>
                                            <div className="_card_flex_last">
                                                <div className="prt_saveed_12lk">
                                                    <label className="toggler toggler-danger">
                                                        <input type="checkbox" />
                                                        <i className="ti-heart" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="_card_list_flex">
                                            <div className="_card_flex_01">
                                                <h4 className="listing-name verified">
                                                    <a
                                                        href="single-property-1.html"
                                                        className="prt-link-detail"
                                                    >
                                                        7012 Shine Sehu Street, Liverpool London, LC345AC
                                                    </a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                        {/* <div className="price-features-wrapper">
                                    <div className="list-fx-features">
                                        <div className="listing-card-info-icon">
                                            <div className="inc-fleat-icon">
                                                <img src="assets/img/bed.svg" width={13} alt="" />
                                            </div>
                                            3 Beds
                                        </div>
                                        <div className="listing-card-info-icon">
                                            <div className="inc-fleat-icon">
                                                <img src="assets/img/bathtub.svg" width={13} alt="" />
                                            </div>
                                            1 Bath
                                        </div>
                                        <div className="listing-card-info-icon">
                                            <div className="inc-fleat-icon">
                                                <img src="assets/img/move.svg" width={13} alt="" />
                                            </div>
                                            800 sqft
                                        </div>
                                    </div>
                                </div> */}
                                        {/* <div className="listing-detail-footer">
                                    <div className="footer-first">
                                        <h6 className="listing-card-info-price mb-0 p-0">$7,000</h6>
                                    </div>
                                    <div className="footer-flex">
                                        <a href="property-detail.html" className="prt-view">
                                            View Detail
                                        </a>
                                    </div>
                                </div> */}
                                    </div>
                                </div>
                            </>)

                        })
                    }

                </OwlCarousel>



            </div>

        </>
    )
}

export default BestofferSlider