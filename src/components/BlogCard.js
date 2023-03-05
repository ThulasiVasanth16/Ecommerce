import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <>
       <div className="col-3">
        <div className="blog-card">
          <div className="card-image">
            <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
          </div>
          <div className="blog-content">
            <p className="date">1 Dec 2022</p>
            <h5 className="title">A beautiful sunday morning renaissance</h5>
            <p className="desc">
              Most people are unaware that entire body tracking headsets are
              unnecessary for a successful virtual reality headset.
            </p>
            <Link to="/blog/:id" className="button">
              Read More
            </Link>
          </div>
        </div>
        </div>

        <div className="col-3">
        <div className="blog-card">
          <div className="card-image">
            <img src="images/blog-2.jpg" className="img-fluid w-100" alt="blog" />
          </div>
          <div className="blog-content">
            <p className="date">7 Mar 2023</p>
            <h5 className="title">but that you may see whence all</h5>
            <p className="desc">
              Every app requires some level of manual testing. Automated test
              runs can only discover bugs to a certain degree. testers.
            </p>
            <Link to="/blog/:id" className="button">
              Read More
            </Link>
          </div>
        </div>
      
        </div>


      <div className="col-3">
        <div className="blog-card">
          <div className="card-image">
            <img src="images/blog-3.jpg" className="img-fluid w-100" alt="blog" />
          </div>
          <div className="blog-content">
            <p className="date">14 Nov 2022</p>
            <h5 className="title">Best smart notebook for drawing</h5>
            <p className="desc">
              Here's something a little different. While not exactly a smart
              notebook, it lets you draw precisely on your computer...
            </p>

            <Link to="/blog/:id" className="button">
              Read More
            </Link>
          </div>
        </div>
        </div>
        <div className="col-3">

        
        <div className="blog-card">
          <div className="card-image">
            <img src="images/blog-4.jpg" className="img-fluid w-100" alt="blog" />
          </div>
          <div className="blog-content">
            <p className="date">16 May 2022</p>
            <h5 className="title">Smartwatch Popularity Chart</h5>
            <p className="desc">
              Generally,unless you need a smartwatch with great battery life or
              one that works with Android, this is an experience with very few
              compromises.
            </p>
            <Link to="/blog/:id" className="button">
              Read More
            </Link>
          
 </div>
 </div>
 </div>
    </>
  );
};

export default BlogCard;
