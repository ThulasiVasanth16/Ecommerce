import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import {AiOutlineHome, AiOutlineMail} from "react-icons/ai";
import {BiPhoneCall, BiInfoCircle} from "react-icons/bi";
import Container from "../components/Container";



const Contact = () => {
  return (
    <>
      
      <Meta title={"contact Us"} />
      <BreadCrumb title={"contact Us"} />
      <Container className="contact-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3492944893533!2d80.246964313222!3d13.0134146174842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267f29aa9a61f%3A0x6a79a69edf60842a!2sPatrician%20College%20of%20Arts%20and%20Science!5e0!3m2!1sen!2sin!4v1677705286862!5m2!1sen!2sin"
                width="600"
                height="450"
               className="border:0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex  flex-column gap-15">
                    <div>
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder="Email"/>
                    </div>
                    <div>
                      <input type="tel" className="form-control"placeholder="Mobile Number" />
                    </div>
                    <div>
                      <textarea name="" id="" className="w-100 form-control" placeholder="Comments"cols="30" rows="4"></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with Us</h3>
               <div>
                <ul className="ps-0">
                  <li className="mb-3 d-flex gap-15 align-items-center"><AiOutlineHome className="fs-5"/>
                  <address className="mb-0">  DoorNo: 4/31 Near VGP Theme Park, Vettuvankeni,chennai</address></li>
                  <li className="mb-3 d-flex gap-15 align-items-center"><BiPhoneCall className="fs-5"/><a href="tel:+91 9361562608">+91 9361562608</a></li>
                  <li className="mb-3 d-flex gap-15 align-items-center"><AiOutlineMail className="fs-5"/><a href="mailto:thulasivasanth@mail.com">thulasivasanth@mail.com</a></li>
                  <li className="mb-3 d-flex gap-15 align-items-center"><BiInfoCircle className="fs-5"/><p className="mb-0">Monday - Friday 10 AM - 8 PM</p></li>
                
                </ul>
              </div>
              </div> </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default Contact;
