import React from "react";
import {HiOutlineArrowLeft} from "react-icons/hi";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import {Link} from "react-router-dom";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";


const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />

      <Container className="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10"><HiOutlineArrowLeft />Go back to Blogs</Link>
                <h3 className="title">
                  A beautiful sunday morning renaissance
                </h3>
                <img src={blog} className="img-fluid w-100 my-4" alt="blog" />
                <p>
                  Step inside new realities with Oculus Quest 2, our most
                  advanced VR system yet. Explore new dimensions of gaming,
                  social and entertainment, or revolutionize your fitness
                  regime. With no wires, no limits and no PC or console
                  required, you’ll be ready to go within minutes by setting up
                  using the Oculus smartphone app, your Facebook account and a
                  wireless internet connection. An incredible multi-sensory
                  experience immerses you in cinematic, 3D positional audio
                  through built-in speakers, while mind-blowing high resolution
                  graphics mean you see every detail of every virtual world,
                  even when you’re moving at speed. An integrated 10,000mAh
                  battery giving up to three hours’ gameplay or ten hours of
                  entertainment combined with a comfort-driven design lets you
                  explore deeper and further for longer, every time you step
                  into VR. Choose between 128BG and 256GB options to meet the
                  realities of your budget and your VR memory needs. Intuitive
                  Touch controllers transport your movements directly into VR.
                  Explore over 1,000 titles by connecting your VR headset to a
                  gaming-compatible computer with an Oculus Link cable (PC and
                  cable sold separately). Share the experience with virtual
                  social spaces, multi-player gaming and virtual stadiums. Let
                  others watch your performance by casting your VR experience to
                  compatible TVs and other screens. There’s no end to what you
                  can play, create and discover with Oculus Quest..
                </p>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default SingleBlog;
