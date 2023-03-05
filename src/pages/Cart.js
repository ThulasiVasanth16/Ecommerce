import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Laptop from "../images/laptop.jpg";
import Airpods from "../images/acc.jpg";
import Tv from "../images/tv.jpg";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />

      <Container class1="cart-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="cart-header  py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data  py-3 mb-2 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src={Laptop}
                      className="image-fluid"
                      alt="Product Name"
                    />
                  </div>
                  <div className="w-75">
                    <p>Intel Core i5 Processor, 8GB RAM, 128GB SSD, 12.45"</p>
                    <p>S</p>
                    <p>#A85A5A</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$100</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      id=""
                      min={1}
                      max={10}
                    />
                  </div>
                  <div>
                    <span className="badge rounded-circle p-3 bg-dark">
                      <RiDeleteBin6Line className="text-secondary" />
                    </span>
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$100</h5>
                </div>
              </div>

              <div className="cart-data  py-3 mb-2 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img src={Tv} className="image-fluid" alt="Product Name" />
                  </div>
                  <div className="w-75">
                    <p>
                      VIZIO 24-inch D-Series Full HD 1080p Smart TV with Apple
                      AirPlay and Chromecast Built-in, Alexa Compatibility,
                      D24f-J09, 2022 Model
                    </p>
                    <p>S</p>
                    <p>#141607</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$150</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      id=""
                      min={1}
                      max={10}
                    />
                  </div>
                  <div>
                    <span className="badge rounded-circle p-3 bg-dark">
                      <RiDeleteBin6Line className="text-secondary" />
                    </span>
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$150</h5>
                </div>
              </div>

              <div className="cart-data  py-3 mb-2 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src={Airpods}
                      className="image-fluid"
                      alt="Product Name"
                    />
                  </div>
                  <div className="w-75">
                    <p>
                      Apple AirPods (2nd Generation) Wireless Earbuds with
                      Lightning Charging Case Included. Over 24 Hours of Battery
                      Life, Effortless Setup. Bluetooth Headphones for iPhone
                    </p>
                    <p>M</p>
                    <p>#1c1c1c</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$50</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      id=""
                      min={1}
                      max={10}
                    />
                  </div>
                  <div>
                    <span className="badge rounded-circle p-3 bg-secondary">
                      <RiDeleteBin6Line className="text-dark" />
                    </span>
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$50</h5>
                </div>
              </div>
              <div className="col-12 mt-4 py-2">
                <div className="d-flex justify-content-between align-items-baseline">
                  <Link to="/product" className="button">
                    Continue To Shopping
                  </Link>
                  <div className="d-flex flex-column align-items-end">
                    <h4>SubTotal: $ 300</h4>
                    <p>Taxes and shipping calculated at checkout</p>
                    <Link to="/checkout" className="button">Checkout</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default Cart;
