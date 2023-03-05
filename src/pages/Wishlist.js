import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch-1.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>
            <div className="py-3 px-3">
                <h5 className="title">          Milanese Loop Watch Band For 42mm/44mm Apple Watch</h5>
           <h6 className="price">$10.00</h6>
            </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/sony-1.jpg"
                    className="img-fluid w-100"
                    alt="Speaker"
                  />
                </div>
            <div className="py-3 px-3">
                <h5 className="title">                             Beoplay A1 Portable Bluetooth Speaker With Microphone</h5>
           <h6 className="price"> <r> $500.00</r> <strike>$750.00</strike></h6>
            </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/tabpen.jpg"
                    className="img-fluid w-100"
                    alt="Speaker"
                  />
                </div>
            <div className="py-3 px-3">
                <h5 className="title">                              Honor T1 7.0 1 GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
           <h6 className="price"> $100.00</h6>
            </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/sony.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>
            <div className="py-3 px-3">
                <h5 className="title">             Sony EXTRA BASS Portable Splash-Proof Wireless Speaker</h5>
           <h6 className="price">220.00</h6>
            </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default Wishlist;
