import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
  return (
    <>
      <div className="col-6 mb-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div>
              <img src="images/samsung.jpg" /* 229.65*/ className="img-fluid" alt="phone" />
            </div>
            <div className="special-product-content">
              <h5 className="brand">Havells</h5>
              <h6 className="title">
                Samsung Galaxy Note10+ Mobile Phone; Sim..
              </h6>
              <ReactStars
                count={5}
                size={24}
                value={5}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">
                  $60 &nbsp; <strike>$75.00 </strike>
                </span>
              </p>
              <div className="discount-till d-flex align-items-center  gap-10">
                <p className="mb-0">
                  <b>10</b> days
                </p>
                <div className="d-flex gap-10 align-items-center">
                  <span className="badge rounded-circle p-3 bg-danger">05</span>:
                  <span className="badge rounded-circle p-3 bg-danger">31</span>:
                  <span className="badge rounded-circle p-3 bg-danger">06</span>
                </div>
              </div>
              <div className="prod-count my-3">
                <p>Products: 5</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button">Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 mb-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div>
              <img src="images/lap.png" className="img-fluid" alt="Lap" />
            </div>
            <div className="special-product-content">
              <h5 className="brand">Bajaj</h5>
              <h6 className="title">
              
              Intel Core i5 Processor, 8GB RAM, 128GB SSD, 12.45"
              </h6>
              <ReactStars
                count={5}
                size={24}
                value={4}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">
                  $60 &nbsp; <strike>$85.00</strike>
                </span>
              </p>
              <div className="discount-till d-flex align-items-center  gap-10">
                <p className="mb-0">
                  <b>25</b> days
                </p>
                <div className="d-flex gap-10 align-items-center">
                  <span className="badge rounded-circle p-3 bg-danger">05</span>:
                  <span className="badge rounded-circle p-3 bg-danger">28</span>:
                  <span className="badge rounded-circle p-3 bg-danger">35</span>
                </div>
              </div>
              <div className="prod-count my-3">
                <p>Products: 42</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button">Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 mb-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div>
              <img src="images/tabsp.jpg" /* 229.65*/ className="img-fluid" alt="watch" />
            </div>
            <div className="special-product-content">
              <h5 className="brand">Sony</h5>
              <h6 className="title">
                Samsung Galaxy Tab A SM-T295, 4G...
              </h6>
              <ReactStars
                count={5}
                size={24}
                value={3}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">
                  $11.00 &nbsp; <strike>$25.00 </strike>
                </span>
              </p>
              <div className="discount-till d-flex align-items-center  gap-10">
                <p className="mb-0">
                  <b>40</b> days
                </p>
                <div className="d-flex gap-10 align-items-center">
                  <span className="badge rounded-circle p-3 bg-danger">05</span>:
                  <span className="badge rounded-circle p-3 bg-danger">28</span>:
                  <span className="badge rounded-circle p-3 bg-danger">35</span>
                </div>
              </div>
              <div className="prod-count my-3">
                <p>Products: 200</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button">Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProduct;
