import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import NavbarService from '../Navbar/NavbarService';
import BassURl from '../Api/Api';
import { Scrollbars } from 'react-custom-scrollbars';


function Service() {
    const params = useParams();
    const [service, setService] = useState(null);
    useEffect(() => {
        axios.get(`/web-api/all-service-category`).then((response) => {
            setService(response.data.data);
        })
    }, []);




    const [product, setProduct] = useState(null);
    useEffect(() => {
        axios.get(`/web-api/top-product`).then((response) => {
            setProduct(response.data.data)
        })
    }, [])







    return (<>
        {service?.map((data, index) => {
            if (data?.service_url === params?.service_url) {
                return (<>


                    <NavbarService />

                    {/* ============================ All Property ================================== */}
                    <section className="gray pt-4">
                        <div className="container">

                            <div className="row">
                                {/* property Sidebar */}
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="page-sidebar p-0">
                                        <a
                                            className="filter_links"
                                            data-toggle="collapse"
                                            href="#fltbox"
                                            role="button"
                                            aria-expanded="false"
                                            aria-controls="fltbox"
                                        >
                                            Open Advance Filter
                                            <i className="fa fa-sliders-h ml-2" />
                                        </a>
                                        <div className="collapse" id="fltbox">
                                            {/* Find New Property */}
                                            <div className="sidebar-widgets p-4">
                                                <div className="form-group">
                                                    <div className="input-with-icon">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Neighborhood"
                                                        />
                                                        <i className="ti-search" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-with-icon">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Location"
                                                        />
                                                        <i className="ti-location-pin" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="simple-input">
                                                        <select id="ptype" className="form-control">
                                                            <option value="">&nbsp;</option>
                                                            <option value={1}>Apartment</option>
                                                            <option value={2}>Condo</option>
                                                            <option value={3}>Family</option>
                                                            <option value={4}>Houses</option>
                                                            <option value={5}>Villa</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="simple-input">
                                                        <select id="status" className="form-control">
                                                            <option value="">&nbsp;</option>
                                                            <option value={1}>Apartment</option>
                                                            <option value={2}>Condo</option>
                                                            <option value={3}>Houses</option>
                                                            <option value={4}>Villa</option>
                                                            <option value={5}>Land</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="simple-input">
                                                        <select id="price" className="form-control">
                                                            <option value="">&nbsp;</option>
                                                            <option value={1}>Less Then $1000</option>
                                                            <option value={2}>$1000 - $2000</option>
                                                            <option value={3}>$2000 - $3000</option>
                                                            <option value={4}>$3000 - $4000</option>
                                                            <option value={5}>Above $5000</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="simple-input">
                                                        <select id="bedrooms" className="form-control">
                                                            <option value="">&nbsp;</option>
                                                            <option value={1}>1</option>
                                                            <option value={2}>2</option>
                                                            <option value={3}>3</option>
                                                            <option value={4}>4</option>
                                                            <option value={5}>5</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="simple-input">
                                                        <select id="bathrooms" className="form-control">
                                                            <option value="">&nbsp;</option>
                                                            <option value={1}>1</option>
                                                            <option value={2}>2</option>
                                                            <option value={3}>3</option>
                                                            <option value={4}>4</option>
                                                            <option value={5}>5</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="simple-input">
                                                        <select id="garage" className="form-control">
                                                            <option value="">&nbsp;</option>
                                                            <option value={1}>Any Type</option>
                                                            <option value={2}>Yes</option>
                                                            <option value={3}>No</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="simple-input">
                                                        <select id="built" className="form-control">
                                                            <option value="">&nbsp;</option>
                                                            <option value={1}>2010</option>
                                                            <option value={2}>2011</option>
                                                            <option value={3}>2012</option>
                                                            <option value={4}>2013</option>
                                                            <option value={5}>2014</option>
                                                            <option value={6}>2015</option>
                                                            <option value={7}>2016</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <div className="simple-input">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Min Area"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <div className="simple-input">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Max Area"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12 pt-4 pb-4">
                                                        <h6>Choose Price</h6>
                                                        <div className="rg-slider">
                                                            <input
                                                                type="text"
                                                                className="js-range-slider"
                                                                name="my_range"
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    {/* Sidebar End */}
                                </div>

                                <div className="col-lg-8 col-md-12 col-sm-12">

                                    <div className="row justify-content-center">
                                        {/* Single Property */}

                                        <Scrollbars style={{ height: '900px', width: "800px", scrollBehavior: "none" }}>

                                            {
                                                product?.map((data, index) => {
                                                    return (<><div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                        <div className="property-listing list_view">
                                                            <div className="listing-img-wrapper">
                                                                {/* <div className="_exlio_125">For Sale</div> */}
                                                                <div className="like_unlike_prt">
                                                                    <label className="toggler toggler-danger">
                                                                        <input type="checkbox" />
                                                                        <i className="fa fa-heart" />
                                                                    </label>
                                                                </div>
                                                                <div className="list-img-slide">
                                                                    <div className="click">
                                                                        <div>
                                                                            <a href="single-property-1.html">
                                                                                <img
                                                                                    src={BassURl + data?.product_image}
                                                                                    className="img-fluid mx-auto icon_image_width"
                                                                                    alt=""
                                                                                />
                                                                            </a>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="list_view_flex">
                                                                <div className="listing-detail-wrapper mt-1">
                                                                    <div className="listing-short-detail-wrap">
                                                                        <div className="_card_list_flex mb-2">
                                                                            <div className="_card_flex_01">
                                                                                <span className="_list_blickes _netork">
                                                                                    6 litre
                                                                                </span>
                                                                                {/* <span className="_list_blickes types">Family</span> */}
                                                                            </div>
                                                                            <div className="_card_flex_last">
                                                                                <h6 className="listing-card-info-price mb-0">
                                                                                    ₹ {data?.product_price.toString()
                                                                                        .replace(
                                                                                            /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                                                                            ","
                                                                                        )}
                                                                                </h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="_card_list_flex">
                                                                            <div className="_card_flex_01">
                                                                                <h4 className="listing-name verified">
                                                                                    <a
                                                                                        href="single-property-1.html"
                                                                                        className="prt-link-detail"
                                                                                    >
                                                                                        {data?.product_title}
                                                                                    </a>
                                                                                </h4>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="listing-detail-footer pl-0">
                                                                    <div className="footer-first">
                                                                        <a href="tel:4048651904" className="call-view">
                                                                            ADD TO CART
                                                                        </a>
                                                                    </div>
                                                                    <div className="footer-flex">
                                                                        <a
                                                                            href="#"
                                                                            data-toggle="modal"
                                                                            data-target="#availability"
                                                                            className="prt-view theme-bg"
                                                                        >
                                                                            BUY NOW
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div></>)
                                                })
                                            }

                                        </Scrollbars>


                                    </div>

                                </div>

                            </div>
                        </div>
                    </section>
                    {/* ============================ All Property ================================== */}
















                </>)
            }
        })}</>)





}

export default Service