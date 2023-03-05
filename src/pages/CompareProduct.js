import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Container from "../components/Container";
import Meta from "../components/Meta";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
          <div className="row">
           {/*43*/ } 
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/watch-1.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                Milanese Loop Watch Band For 42mm/44mm Apple Watch
                  </h5>
                  <h6 className="price mt-3 mb-3">$10.00</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>Sony</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>Watches</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availablity:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <p><Color/></p>
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10" >
                        <p>S</p>
                        <p>M</p>
                        <p>XXL</p>
                      </div>
    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/sony-1.jpg" alt="speaker" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Beoplay A1 Portable Bluetooth Speaker With Microphone
                  </h5>
                  <h6 className="price mt-3 mb-3"><r>500.00</r> <strike>$750.00</strike></h6>
                  <div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>Bajaj</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>Speakers</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availablity:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <p><Color/></p>
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10" >
                        <p>S</p>
                        <p>M</p>
                        <p>XL</p>
                      </div>
    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/tabpen.jpg" alt="tab" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor T1 7.0 1 GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mt-3 mb-3">$100</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>Tablet Computers</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availablity:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <p><Color/></p>
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10" >
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                      </div>
    
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/sony.jpg" alt="Bass" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
      Sony EXTRA BASS Portable Splash-Proof Wireless Speaker
                  </h5>
                  <h6 className="price mt-3 mb-3">$220.00</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>Bajaj</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>Camera Lenses</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availablity:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <p><Color/></p>
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10" >
                        <p>S</p>
                        <p>M</p>
                        <p>XXL</p>
                      </div>
    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default CompareProduct;
