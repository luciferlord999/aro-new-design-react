import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BassURl from '../Api/Api';
import Navbar from '../Navbar/Navbar';


function PageAppliances() {
    const params = useParams();
    const [service, setService] = useState(null);
    useEffect(() => {
        axios.get(`/web-api/all-shop-category`).then((response) => {
            setService(response.data.data);
        })
    }, []);

    // console.log/(service)




    const [appliancesProdduct, setAppliancesProduct] = useState(null)


    useEffect(() => {
        axios.get(`/web-api/top-product`).then((response) => {
            setAppliancesProduct(response.data.data)
        })
    })






    return (
        <>
            <Navbar />

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
                                {/* <div className="row">
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
                                        </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ============================ All Property ================================== */}
            <section className="gray pt-4">
                <div className="container">
                    <div className="row m-0">
                        <div className="short_wraping">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-6 col-sm-12  col-sm-6">
                                    <ul className="shorting_grid">
                                        <li className="list-inline-item">
                                            <a href="grid-layout-with-sidebar.html" className="active">
                                                <span className="ti-layout-grid2" />
                                                Grid
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="list-layout-with-sidebar.html">
                                                <span className="ti-view-list" />
                                                List
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <span className="ti-map-alt" />
                                                Map
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 order-lg-2 order-md-3 elco_bor col-sm-12">
                                    {/* <div className="shorting_pagination">
                                       
                                        <div className="shorting_pagination_right">
                                            <ul>
                                                <li>
                                                    <a href="javascript:void(0);" className="active">
                                                        1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">2</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">3</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">4</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">5</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">6</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 order-lg-3 order-md-2 col-sm-6">
                                    <div className="shorting-right">
                                        {/* <label>Short By:</label>
                                        <div className="dropdown show">
                                            <a
                                                className="btn btn-filter dropdown-toggle"
                                                href="#"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <span className="selection">Most Rated</span>
                                            </a>
                                            <div className="drp-select dropdown-menu">
                                                <a className="dropdown-item" href="JavaScript:Void(0);">
                                                    Most Rated
                                                </a>
                                                <a className="dropdown-item" href="JavaScript:Void(0);">
                                                    Most Viewd
                                                </a>
                                                <a className="dropdown-item" href="JavaScript:Void(0);">
                                                    News Listings
                                                </a>
                                                <a className="dropdown-item" href="JavaScript:Void(0);">
                                                    High Rated
                                                </a>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* property Sidebar */}
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="page-sidebar p-0">

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


                                        {/* <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
                                                <button className="btn theme-bg rounded full-width">
                                                    Find New Home
                                                </button>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            {/* Sidebar End */}
                        </div>


                        {
                            appliancesProdduct && (
                                <div className="col-lg-8 col-md-12 col-sm-12">
                                    <div className="row justify-content-center">
                                        {
                                            appliancesProdduct?.map((data, index) => {
                                                return (<>
                                                    {/* Single Property */}
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="property-listing property-2">
                                                            <div className="listing-img-wrapper">
                                                                {/* <div className="_exlio_125">For Sale</div> */}
                                                                <div className="list-img-slide">
                                                                    <div className="click">
                                                                        <div>
                                                                            <a href="single-property-1.html">
                                                                                <img
                                                                                    src={BassURl + data?.product_image}
                                                                                    className="img-fluid  PageAppImg  mx-auto"
                                                                                    alt=""
                                                                                />
                                                                            </a>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="listing-detail-wrapper">
                                                                <div className="listing-short-detail-wrap">
                                                                    <div className="_card_list_flex mb-2">
                                                                        <div className="_card_flex_01">
                                                                            <span className="_list_blickes _netork">6 Litre</span>
                                                                         
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
                                                            </div>
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
                                                            <div className="listing-detail-footer">
                                                                <div className="footer-first">
                                                                    <h6 className="listing-card-info-price mb-0 p-0">$7,000</h6>
                                                                </div>
                                                                <div className="footer-flex">
                                                                    <a href="property-detail.html" className="prt-view">
                                                                        View Detail
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* End Single Property */}

                                                </>)
                                            })
                                        }

                                        {/* Single Property */}

                                    </div>
                                </div>

                            )
                        }

                    </div>
                </div>
            </section>
            {/* ============================ All Property ================================== */}



        </>





    )
}

export default PageAppliances