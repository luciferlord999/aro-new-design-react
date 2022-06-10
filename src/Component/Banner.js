import React, { useEffect, useState } from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from 'axios';
import BaseURL from "../Api/Api"
import CategorySlider from '../Slider/CategorySlider';


function Banner() {

    const options = {
        margin: 40,
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



    const [serviceicon, setServiceIcon] = useState([]);


    useEffect(() => {
        axios.get(`/web-api/all-service-category`).then((response) => {


            setServiceIcon(response.data.data);
        });
    }, []);












    return (
        <>
            {/* ============================ Hero Banner  Start================================== */}
            <div className="image-cover hero_banner " style={{ background: 'url(/assets/img/banner/banner.webp) no-repeat' }} data-overlay={4}>
                <div className="container">

                    {/* Type */}

                    <div className="simple-search-wrap search-top-wrap  ">
                        <div className="hero_search-2">

                            <div className="search_hero_wrapping">
                                <div className="row">
                                    <div className="col-lg-5 col-md-5 col-sm-12 small-padd">
                                        <div className="form-group">
                                            <div className="input-with-icon">
                                                <input
                                                    type="text"
                                                    className="form-control b-0 b-r"
                                                    placeholder="Neighborhood"
                                                />
                                                <i className="ti-search" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-4 col-sm-12 small-padd">
                                        <div className="form-group">
                                            <div className="input-with-icon">
                                                <input
                                                    type="text"
                                                    className="form-control b-0"
                                                    placeholder="Location"
                                                />
                                                <i className="ti-location-pin" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-sm-12 small-padd">
                                        <div className="form-group">
                                            <a href="#" className="btn search-btn">
                                                Search
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>









                </div>
            </div>
            {/* ============================ Hero Banner End ================================== */}





            {/* ============================ Our Awards Start ================================== */}
            <section className="p-0">
                <div className="container">
                    <div className="row justify-content-center">

                        <CategorySlider />


                    </div>
                </div>
            </section>
            <section className="p-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="_awards_group">
                                <ul className="_awards_lists four">

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ============================ Our Awards End ================================== */}




        </>
    )
}

export default Banner