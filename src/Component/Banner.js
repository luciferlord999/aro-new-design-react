import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import BaseURL from "../Api/Api";
import CategorySlider from "../Slider/CategorySlider";
import BassURl from "../Api/Api";

function Banner() {
  const options = {
    margin: 40,
    responsiveClass: true,
    dots: true,
    nav: true,

    navText: [
      "<img src='/assets/img/left-arrow.webp' class='nav-button  owl-prev'/>",
      " <img src='/assets/img/right-arrow.webp' class='nav-button owl-next'/>",
    ],
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

  //   console.log(data, "new gf")

  // api call
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `/web-api/all-service-category`
        );
        setData(response.data.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      {/* ============================ Hero Banner  Start================================== */}
      <div
        className="image-cover hero_banner "
        style={{ background: "url(/assets/img/banner/banner.webp) no-repeat" }}
        data-overlay={4}
      >
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
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="_awards_group">
                <ul className="_awards_lists four">


                  {
                    data && (
                      <OwlCarousel className=" owl-carousel " {...options}>
                        {/* single list */}
                        {
                          data?.map((data) => {
                            return (
                              <>
                                <li key={data}>
                                  <div className="_awards_list_wrap">
                                    <div className="_awards_list_thumb op-1">
                                      <a href={`/service/${data?.service_url}`}>
                                        <img
                                          src={BaseURL + data?.service_img}
                                          className="img-fluid"
                                          alt
                                        />
                                      </a>
                                    </div>
                                    <div className="_awards_list_caption">
                                      <span>{data?.service_title}</span>
                                    </div>
                                  </div>
                                </li>
                              </>
                            );
                          })}
                      </OwlCarousel>
                    )
                  }

                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="_awards_group">
                <ul className="_awards_lists four"></ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============================ Our Awards End ================================== */}
    </>
  );
}

export default Banner;
