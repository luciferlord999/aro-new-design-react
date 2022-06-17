import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BestofferSlider from '../Slider/BestofferSlider';
import Aplliances from '../Slider/Aplliances';
import TopProduct from '../Slider/TopProduct';
import BassURl from '../Api/Api';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


function Content() {

    const [service, setService] = useState([]);
    const [appliances, setAppliances] = useState([]);
    useEffect(() => {
        axios.get(`web-api/all-shop-category`).then((response) => {
            setService(response.data.data)
        })
    }, []);

    // banner api call
    const [banner, setBanner] = useState([]);
    useEffect(() => {
        axios.get(`web-api/banner`).then((response) => {
            setBanner(response.data.data)
        })
    }, []);



    // console.log(banner)

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




    return (
        <>

            {/* ============================ Property Type Start ================================== */}
            <section className="gray-simple min">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 ">
                            <div className="sec-heading center">
                                <h2>Our Service</h2>

                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg col-md-4">
                            {/* Single Category */}
                            <div className="property_cats_boxs">
                                <a href="grid-layout-with-sidebar.html" className="category-box">
                                    <div className="property_category_short">
                                        <div className="category-icon clip-1">
                                            <img src="/assets/img/ourservice/ac.svg" alt="" />
                                        </div>
                                        <div className="property_category_expand property_category_short-text">
                                            <h4>AC Service</h4>

                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg col-md-4">
                            {/* Single Category */}
                            <div className="property_cats_boxs">
                                <a href="grid-layout-with-sidebar.html" className="category-box">
                                    <div className="property_category_short">
                                        <div className="category-icon clip-2">
                                            <img src="/assets/img/ourservice/appliances.svg" alt="" />
                                        </div>
                                        <div className="property_category_expand property_category_short-text">
                                            <h4>Appliance</h4>

                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>


                        <div className="col-lg col-md-4">
                            {/* Single Category */}
                            <div className="property_cats_boxs">
                                <a href="grid-layout-with-sidebar.html" className="category-box">
                                    <div className="property_category_short">
                                        <div className="category-icon clip-3">
                                            <img src="/assets/img/ourservice/electrical.svg" alt="" />
                                        </div>
                                        <div className="property_category_expand property_category_short-text">
                                            <h4>Electrical</h4>

                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg col-md-4">
                            {/* Single Category */}
                            <div className="property_cats_boxs">
                                <a href="grid-layout-with-sidebar.html" className="category-box">
                                    <div className="property_category_short">
                                        <div className="category-icon clip-4">
                                            <img src="/assets/img/ourservice/home_cleaning.svg" alt="" />
                                        </div>
                                        <div className="property_category_expand property_category_short-text">
                                            <h4>Cleaning</h4>

                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg col-md-4">
                            {/* Single Category */}
                            <div className="property_cats_boxs">
                                <a href="grid-layout-with-sidebar.html" className="category-box">
                                    <div className="property_category_short">
                                        <div className="category-icon clip-5">
                                            <img src="/assets/img/ourservice/Salon_at_Home.svg" alt="" />
                                        </div>
                                        <div className="property_category_expand property_category_short-text">
                                            <h4>Salon</h4>

                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ============================ Property Type End ================================== */}


            {/* ============================ Latest Property For Sale Start ================================== */}
            <section className="gray p-0" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-10 text-center">
                            <div className="sec-heading center mb-4">
                                <h2>Best Offer</h2>

                            </div>
                        </div>
                    </div>

                    <BestofferSlider />

                    {/* Pagination */}

                </div>
            </section>
            {/* ============================ Latest Property For Sale End ================================== */}


            {/* ============================ Latest Property For Sale Start ================================== */}

            <Aplliances />







            {/* Pagination */}
            <TopProduct />


            {/* ============================ Latest Property For Sale End ================================== */}




            {/* banner start  */}
            {/* ============================ Property Tag Start ================================== */}
            <div className="shadow-lg p-3 mb-5 bg-white rounded">

                <div className=' shadow p-3 mb-5 bg-white rounded'>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            {
                                banner?.map((data, index) => {
                                    return (<div className="carousel-item active" key={index}>
                                        <img className="d-block w-100" src={BassURl + data?.banner_url} alt="First slide" style={{ height: "350px" }} />
                                    </div>)

                                })
                            }

                            {/* <div className="carousel-item">
                        <img className="d-block w-100" src="..." alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="..." alt="Third slide" />
                    </div> */}
                        </div>
                    </div>

                </div></div>




            {/* ============================ Property Tag End ================================== */}


            {/* why choose us start */}
            <div className="section-full content-inner bg-gray shadow-lg p-3 mb-5 bg-white rounded">
                <div className="container">
                    <div className="section-head text-center">
                        <h2 className="box-title">WHAT OUR USERS SAY</h2>
                        <div className="dlab-separator bg-primary" />
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="single-choose-right shadow-sm mb-5 bg-white rounded ">
                                <i className="fa fa-thumbs-up" />
                                <h3>Service Reliability</h3>
                                <p className="p">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eir mod tempor invidunt ut labore et.
                                </p>
                            </div>
                            <div className="single-choose-right shadow-sm mb-5 bg-white rounded">
                                <i className="fa fa-link" />
                                <h3>Flexibility</h3>
                                <p className="p">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eir mod tempor invidunt ut labore et.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div
                                className="choose-image"
                                style={{ backgroundImage: 'url("assets/img/d.png")' }}
                            >
                                <div className="square-shape">
                                    <img
                                        src="assets/img/shape.png"
                                        alt="Shape"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-choose-left shadow-sm  mb-5 bg-white rounded">
                                <i className="fa fa-ban" />
                                <h3>Quality Control</h3>
                                <p className="p">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eir mod tempor invidunt ut labore et.
                                </p>{" "}
                            </div>
                            <div className="single-choose-left shadow-sm  mb-5 bg-white rounded">
                                <i className="fa fa-comment-o" />
                                <h3>Staff, You'll Like</h3>
                                <p className="p">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eir mod tempor invidunt ut labore et.
                                </p>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* why choose us end */}






            {/* banner end  */}




        </>
    )
}

export default Content