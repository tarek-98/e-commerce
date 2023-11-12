import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ imgSrc }) {
  return (
    <div className="col-lg-3">
      <div className="blog-card">
        <div className="card-image">
          <img src={imgSrc} className="img-fluid" alt="" />
        </div>
        <div className="card-content">
          <p className="date">11/8/2023</p>
          <h4 className="title">Blog</h4>
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            nihil illo cupiditate repellendus nam dolore.
          </p>
          <Link className="button mt-2" to="/">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
