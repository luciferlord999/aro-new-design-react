import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BassURl from '../Api/Api';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Slider from 'react-slick';



function Aplliances() {





    const [appliances, setAppliances] = useState([]);
    useEffect(() => {
        axios.get(`web-api/all-shop-category`).then((response) => {


            setAppliances(response.data.data);
        });
    }, []);

    // console.log(appliances)
    const settings = {
        arrows: true,
        centerMode: true,
        edgeFriction: 1,
        infinite: false,
        swipeToSlide: true,
        variableWidth: true,
        accessibility: true,
        // prevArrow: <SlickArrowLeft />,
        // nextArrow: <SlickArrowRight />,
        focusOnSelect: true,
        draggable: true

        // afterChange: this.nextClick
    };




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
            <section >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-10 text-center">
                            <div className="sec-heading center mb-4">
                                <h2>Our Appliances</h2>

                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">


                        <OwlCarousel
                            {...options}
                            className="slider-items owl-theme owl-carousel  "
                        >

                            {

                                (
                                    appliances?.map((data, index) => {
                                        return (
                                            <>
                                                <div className="cardtr" key={index}>
                                                    <div className="card-headertr">
                                                        <img src={BassURl + data?.image} alt="user" />
                                                    </div>
                                                    <div className="card-bodytr">


                                                        <h5 className='Heading-6' style={{ textTransform: " uppercase" }}>
                                                            {data?.category_title}
                                                        </h5>




                                                        <div className="usertr">
                                                            &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;
                                                            <div className="user-infotr">
                                                                <a href="/our-apliances/air-purifier">View </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }))








                            }




                        </OwlCarousel>














                    </div>
                </div>
            </section>




        </>
    )
}

export default Aplliances