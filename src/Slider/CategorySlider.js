import React, { useEffect, useState } from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import BaseURL from "../Api/Api"
import axios from 'axios';

function CategorySlider() {
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
        items: 4,
      },
    },
  };


  // Api call

  const [serviceicon, setServiceIcon] = useState([]);


  useEffect(() => {
    axios.get(`/web-api/all-service-category`).then((response) => {


      setServiceIcon(response.data.data);
    });
  }, []);





  return (
    <>
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="_awards_group">




          <ul className="_awards_lists four">













            <OwlCarousel className=" owl-carousel " {...options}>
              {/* single list */}
              {
                serviceicon?.map((data) => {
                  return (
                    <>
                      <li key={data}>
                        <div className="_awards_list_wrap">
                          <div className="_awards_list_thumb op-1">
                            <img src={BaseURL + data?.service_img} className="img-fluid" alt /></div>
                          <div className="_awards_list_caption">

                            <span>{data?.service_title}</span>
                          </div>
                        </div>
                      </li></>
                  )

                })
              }






            </OwlCarousel>
          </ul>
        </div>
      </div>

    </>
  )
}

export default CategorySlider