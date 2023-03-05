import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import head from "../images/head.jpg";
import head2 from "../images/head-2.jpg";
import pad from "../images/pad.jpg";
import pad2 from "../images/pad-1.jpg";
import sony from "../images/sony.jpg";
import sony2 from "../images/sony-1.jpg";

import watch from "../images/watch.jpg";
import addcart from "../images/add-cart.svg";
import watch2 from "../images/watch-1.jpg";
import view from "../images/view.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={` ${
          location.pathname == "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product image" />
            <img src={watch2} className="img-fluid" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Sony</h6>
            <h5 className="product-title">
              Milanese Loop Watch Band
              <br /> For 42mm/44mm Apple.. {/*Watch..*/}
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              A watch is a portable timepiece intended to be carried or worn by
              a person. It is designed to keep a consistent movement despite the
              motions caused by the person's activities.
            </p>
            <p className="price">$10.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>

      <div
        className={` ${
          location.pathname == "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link
          to={`${
            location.pathname == "/"
              ? "/product/:id"
              : location.pathname == "/product/:id"
              ? "/product/1"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={head} className="img-fluid" alt="product image" />
            <img src={head2} className="img-fluid" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Bajaj</h6>
            <h5 className="product-title">
              Kids headphones bulk multi colored for.. {/*students*/}
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              which emits sound into the open air for anyone nearby to hear.They
              also have a plastic or light metal headband to connect them.A
              headphone specific term referring to a sense of space where the
              instruments reside within the music.
            </p>
            <p className="price">$150.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>

      <div
        className={` ${
          location.pathname == "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link
          to={`${
            location.pathname == "/"
              ? "/product/:id"
              : location.pathname == "/product/:id"
              ? "/product/1"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={pad} className="img-fluid" alt="product image" />
            <img src={pad2} className="img-fluid" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havells</h6>
            <h5 className="product-title">
              Honor T17.0 1GB <br />
              RAM 8 GB ROM..
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />

            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Wider Screen for Visual Joy - With an ultra-wide 10.36 inch FHD+
              screen, this large tablet allows you to enjoy vivid visuals in the
              stunning 2K resolution (2000 x 1200).
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>

      <div
        className={` ${
          location.pathname == "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link
          to={`${
            location.pathname == "/"
              ? "/product/:id"
              : location.pathname == "/product/:id"
              ? "/product/1"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={sony} className="img-fluid" alt="product image" />
            <img src={sony2} className="img-fluid" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Bajaj</h6>
            <h5 className="product-title">
              Sony EXTRA BASS Portable Splash-Proof..{/* Wireless..*/}
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={1.5}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              A sleek detachable grille in front; with multiple line- and
              speaker-level inputs and outputs, POWER-SAVER ON/AUTO SWITCH,
              independent volume control and a TOGGLE PHASE SWITCH on the back
              panel make this sub a cohesive unit that outperforms its
              competition
            </p>
            <p className="price">$220.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
