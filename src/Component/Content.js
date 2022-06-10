import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BestofferSlider from '../Slider/BestofferSlider';
import Aplliances from '../Slider/Aplliances';
import TopProduct from '../Slider/TopProduct';


function Content() {

    const [service, setService] = useState([]);
    useEffect(() => {
        axios.get(`web-api/all-shop-category`).then((response) => {
            setService(response.data.data)
        })
    }, []);













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
            <TopProduct/>


            {/* ============================ Latest Property For Sale End ================================== */}




        </>
    )
}

export default Content