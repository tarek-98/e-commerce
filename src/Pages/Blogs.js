import React from "react";
import BlogCard from "../components/Blog-card";
import blogImage from "../images/blog-1.jpg";
import blogImage2 from "../images/blog02.jpg";
import blogImage3 from "../images/blog-03.jpg";
import blogImage4 from "../images/blog04.jpg";

function Blogs() {
  return (
    <section className="blog-wrapper pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 p-3 main-title">Our Latest Blogs</div>
          <BlogCard imgSrc={blogImage} />
          <BlogCard imgSrc={blogImage2} />
          <BlogCard imgSrc={blogImage3} />
          <BlogCard imgSrc={blogImage4} />
        </div>
      </div>
    </section>
  );
}

export default Blogs;
