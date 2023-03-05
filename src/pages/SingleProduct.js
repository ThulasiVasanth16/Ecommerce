import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import {Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import ReactImageZoom from "react-image-zoom";
import {TbGitCompare} from "react-icons/tb";
import {AiOutlineHeart} from "react-icons/ai";
import Container from "../components/Container";

const SingleProduct = () => {
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=wood-wristwatch-time-190819.jpg&fm=jpg",
  };

  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title={" Product Name"} />
      <BreadCrumb title=" Product Name" />
      <Container className="main-product-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.XpcS8T-V6fcJivjp0UB2iwHaHa&pid=Api&P=0 "
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.1N0PY98UB64yFFaBoykG6gHaHa&pid=Api&P=0 "
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.d3QvRVHlGWt-fhyyBEF8zQHaHa&pid=Api&P=0"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://i.pinimg.com/originals/e2/f3/a1/e2f3a1e4c313e289c3ab14a4ec0dab0d.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Finding a High-Quality Watch at a Great Price Shouldn't be a
                    Challenge.
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ 100</p>

                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">(2 Reviews)</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className=" py-3">
                  <div className="d-flex gap-10 align-items-center my-2 ">
                    <h3 className="product-heading">Type:</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand:</h3>
                    <p className="product-data">Rolex</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags:</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availablity:</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center mt-2 mb-3">
                    <h3 className="product-heading">Size:</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color:</h3>
                    <Color />
                  </div>
                  <div className="d-flex align-items-center gap-15  flex-row mt-2 mb-3">
                    <h3 className="product-heading">Quantity:</h3>
                    <div className="">
                      <input
                        type="number"
                        min={1}
                        max={10}
                        style={{ width: "50px" }}
                        name=""
                        className="form-control"
                        id=""
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button className="button border-0" type="submit">ADD TO CART</button>
                      <button className="button signup">Buy It Now</button>
                    
                    </div>


                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href=""><TbGitCompare className="fs-5 me-2" />Add to Compare</a>
                    </div>
                    <div>
                      <a href=""><AiOutlineHeart className="fs-5 me-2"/>Add to Wishlist</a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column  my-3">
                  <h3 className="product-heading">Shipping & Returns :</h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders! <br /> We
                    ship all US domestic orders within
                    <b>5-10 business days!</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Product Link:</h3>
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(
                        "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                      );
                    }}
                  >
                    Copy Product Link
                  </a>
                </div>
             
                </div>
              </div>
            </div>
          </div>
      </Container>
      <Container className="description-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Headphones are a pair of small loudspeaker drivers worn on or
                  around the head over a user's ears. They are electroacoustic
                  transducers, which convert an electrical signal to a
                  corresponding sound. Headphones let a single user listen to an
                  audio source privately, in contrast to a loudspeaker, which
                  emits sound into the open air for anyone nearby to hear.
                  Headphones are also known as earphones or, colloquially, cans.
                  Circumaural ('around the ear') and supra-aural ('over the
                  ear') headphones use a band over the top of the head to hold
                  the speakers in place. Another type, known as earbuds or
                  earpieces consist of individual units that plug into the
                  user's ear canal. A third type are bone conduction headphones,
                  which typically wrap around the back of the head and rest in
                  front of the ear canal, leaving the ear canal open. In the
                  context of telecommunication, a headset is a combination of
                  headphone and microphone.
                </p>
              </div>
            </div>
          </div>
      </Container>
      <Container className="reviews-wrapper  home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reviews</h3>
              <div className="review-inner-wrapper">
                \
                <div className="review-head d-flex justify-content-between  align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>

                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex  flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>

                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        placeholder="Comments"
                        cols="30"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div
                      className="d-flex gap-10 align-items-center
                  "
                    >
                      <h6 className="mb-0">ThulasiVasanth</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      got this for my mom, it was alittle difficult at first to
                      connect it through bluetooth but i kept messing with it &
                      finally got it to connect after a few minutes! love that
                      the keyboard lights can change colors & my mom really
                      enjoys using it!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
      <Container className="popular-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
      </Container>
    </>
  );
};

export default SingleProduct;
