import React, { useEffect, useState } from "react";
import axios from "axios";
import BassURl from "../Api/Api";
import { useStateValue } from "../Context/StateProvider";
import { actionType } from "../Context/reducer";
import $ from 'jquery';
import Addtocartbutton from "./Addtocartbutton";
import { motion } from "framer-motion";
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa';
import CartInfo from "../Cart/CartInfo";
import { VscClose } from 'react-icons/vsc'

let itemQty = [];







function TopProduct() {
  // const[product , setProduct]= useState(null);
  // useEffect(()=>{
  //   axios.get(`/web-api/top-product`).then((response)=>{
  //     setProduct(response.data.data)
  //   })
  // },[]);

  // product api call

  // api call
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [flag, setFlag] = useState(1);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://3.110.38.250/web-api/top-product`
        );
        setProduct(response.data.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  // add to cart  start
  //  hide and show add to cart
  const [{ user, cartShow, cartShowToast, cartItems }, dispatch] = useStateValue();

  // add to cart product show


  const [isActive, setIsActive] = useState(false);
  const [Addtocart, setAddToCart] = useState(true);
  const [hidden, setHidden] = useState([]);
  const handleClick = index => {


    setHidden({ ...hidden, [index]: !hidden[index + 1] });
    setHidden({ ...hidden, [index]: !hidden[index] });
    setIsActive(current => !current);
    // setAddToCart(current => !current);
    setButtonText("1")


  }
  // const [{ user, cartShow, cartShowToast, cartItems }, dispatch] = useStateValue();
  const [items, setItems] = useState([]);
  // const [flag, setFlag] = useState(1);


  // const [qtystyle, SetQtyStyle] = useState(false);

  const toastShow = () => {
    dispatch({
      type: actionType.SET_CART_SHOW_TOAST,
      cartShowToast: !cartShowToast
    })
  }
  const addtocart = (dt) => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });




    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    addtocart();


  }, [items]);









  const text = "Add to cart";
  const [buttonText, setButtonText] = useState(text)
  // add to cart  end

  // qty script start

  // qty script end

  // console.log(x1);

  // jquery
  // api call
  const [tot, setTot] = useState(0);















  return (
    <>
      {/* ============================ Latest Property For Sale Start ================================== */}
      <section className="min light-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 text-center">
              <div className="sec-heading center mb-4">
                <h2>Top Product</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {/* Single Property */}

            {product &&
              product?.slice(0, 4).map((data, index) => {

                return (
                  <div
                    className="col-xl-6 col-lg-12 col-md-12 col-sm-12"
                    key={index}
                    style={{ filter: " drop-shadow(2px 2px 6px #144273)" }}
                  >
                    <div className="property-listing list_view">
                      <div className="listing-img-wrapper">
                        {/* <div className="_exlio_125">For Sale</div> */}
                        <div className="list-img-slide">
                          <div className="click">
                            <div>
                              <a href="single-property-1.html">
                                <img
                                  src={BassURl + data?.product_image}
                                  className="img-fluid mx-auto product_img_width"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div>
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
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="list_view_flex">
                        <div className="listing-detail-wrapper mt-1">
                          <div className="listing-short-detail-wrap">

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
                            <div className="_card_list_flex mb-2">
                              <div className="_card_flex_01">
                                <span className="_list_blickes _netork">
                                  6 litre
                                </span>
                                {/* <span className="_list_blickes types">Family</span> */}
                              </div>
                              <div className="_card_flex_last">
                                <h6 className="listing-card-info-price mb-0">
                                  ₹ &nbsp;
                                  {data?.product_price
                                    .toString()
                                    .replace(
                                      /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                      ","
                                    )}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="listing-detail-footer">
                          <div className="footer-first">
                            <div className="foot-rates">
                              <span className="elio_rate good">4.2</span>
                              <div className="_rate_stio">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                          </div>


                          <div className="footer-flex" key={index}>


                            {
                              !!hidden[index] && (<>

                                <div className="row">
                                  <VscClose style={{ cursor: "pointer", margin: "12px 12px" }}
                                    className="product-qty" onClick={(e) => {
                                      handleClick(index)
                                    }} />
                                  <Addtocartbutton key={data.id}
                                    item={data}
                                    setFlag={setFlag}
                                    flag={flag}






                                  />
                                </div>




                              </>)




                            }
                            {!hidden[index] &&
                              <motion.button whileTap={{ scale: "1" }} className="prt-view" title="Add to Cart"
                                onClick={(e) => {
                                  setItems([...cartItems, data]);
                                  // toastShow();
                                  // setAddToCart(false)

                                  handleClick(index)
                                }
                                }
                              >
                                <i className="fa fa-shopping-basket" />
                                <span>Add to Cart</span>
                              </motion.button>}

                          </div>




                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {/* {cartShowToast && <CartInfo flag={flag}  tot={tot} setTot={setTot} />} */}
        </div>
      </section>

      {/* ============================ Latest Property For Sale End ================================== */}
    </>
  );
}

export default TopProduct;
