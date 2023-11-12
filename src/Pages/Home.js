import React, { Fragment } from "react";
import image1 from "../images/main-banner-1.jpg";
import catbanner1 from "../images/catbanner-01.jpg";
import catbanner2 from "../images/catbanner-02.jpg";
import catbanner3 from "../images/catbanner-03.jpg";
import catbanner4 from "../images/catbanner-04.jpg";
import service1 from "../images/service.png";
import service2 from "../images/service-02.png";
import service3 from "../images/service-03.png";
import service4 from "../images/service-04.png";
import item1 from "../images/camera.jpg";
import item2 from "../images/acc.jpg";
import item3 from "../images/laptop.jpg";
import item4 from "../images/tv.jpg";
import item5 from "../images/headphone.jpg";
import item6 from "../images/homeapp.jpg";
import item7 from "../images/speaker.jpg";
import item8 from "../images/watch.jpg";
import barnd1 from "../images/brand-01.png";
import barnd2 from "../images/brand-02.png";
import barnd3 from "../images/brand-03.png";
import barnd4 from "../images/brand-04.png";
import barnd5 from "../images/brand-05.png";
import barnd6 from "../images/brand-06.png";
import barnd7 from "../images/brand-07.png";
import barnd8 from "../images/brand-08.png";
import blogImage from "../images/blog-1.jpg";
import blogImage2 from "../images/blog02.jpg";
import blogImage3 from "../images/blog-03.jpg";
import blogImage4 from "../images/blog04.jpg";

import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/Blog-card";
import CollectionCard from "../components/Collection-card";

function Home({ imgSrc }) {
  return (
    <Fragment>
      <section className="home-wrapper-1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 mb-2">
              <div className="main-banner position-relative">
                <img
                  src={image1}
                  className="img-fluid rounded-3"
                  alt=""
                  srcset=""
                />
                <div className="main-banner-content position-absolute">
                  <h4>SuperCharged For Pros</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p className="m-0">From 999.99 % or $14.2/mo</p>
                  <p>for 24 mo. Footnote</p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="small-main-banner position-relative">
                  <img
                    src={catbanner1}
                    className="img-fluid rounded-3"
                    alt=""
                    srcset=""
                  />
                  <div className="small-main-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>Labtop Max</h5>
                    <p className="m-0">
                      From 999.99 % <br />
                      or $14.2/mo
                    </p>
                  </div>
                </div>
                <div className="small-main-banner position-relative">
                  <img
                    src={catbanner2}
                    className="img-fluid rounded-3"
                    alt=""
                    srcset=""
                  />
                  <div className="small-main-banner-content position-absolute">
                    <h4>15% OFF</h4>
                    <h5>Smart Watch 7</h5>
                    <p className="m-0">
                      From 999.99 % <br />
                      or $14.2/mo
                    </p>
                  </div>
                </div>
                <div className="small-main-banner position-relative">
                  <img
                    src={catbanner3}
                    className="img-fluid rounded-3"
                    alt=""
                    srcset=""
                  />
                  <div className="small-main-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>Buy IPad Air</h5>
                    <p className="m-0">
                      From 999.99 % <br />
                      or $14.2/mo
                    </p>
                  </div>
                </div>
                <div className="small-main-banner position-relative">
                  <img
                    src={catbanner4}
                    className="img-fluid rounded-3"
                    alt=""
                    srcset=""
                  />
                  <div className="small-main-banner-content position-absolute">
                    <h4>Free Engraving</h4>
                    <h5>AirPods Max</h5>
                    <p className="m-0">
                      From 999.99 % <br />
                      or $14.2/mo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 pt-3">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 mb-2">
                    <div className="content d-flex">
                      <img src={service1} alt="" />
                      <div className="text ms-3">
                        <h3>Free Shipping</h3>
                        <p className="text-black-50">
                          From all Orders Over 100$
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 mb-2">
                    <div className="content d-flex">
                      <img src={service2} alt="" />
                      <div className="text ms-3">
                        <h3>Daily Surprise</h3>
                        <p className="text-black-50">Save up to 25% off</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 mb-2">
                    <div className="content d-flex">
                      <img src={service3} alt="" />
                      <div className="text ms-3">
                        <h3>Support 24/7</h3>
                        <p className="text-black-50">Shop with an expert</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 mb-2">
                    <div className="content d-flex">
                      <img src={service4} alt="" />
                      <div className="text ms-3">
                        <h3>Offerdable Prices</h3>
                        <p className="text-black-50">
                          Get factory direct price
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 pt-4 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 p-2">
                      <div className="items d-flex align-items-center justify-content-center">
                        <div className="">
                          <h6>Camera</h6>
                          <p className="">10 Items</p>
                        </div>
                        <div>
                          <img src={item1} alt="" srcset="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 p-2">
                      <div className="items d-flex align-items-center justify-content-center">
                        <div className="">
                          <h6>Accessories</h6>
                          <p className="">10 Items</p>
                        </div>
                        <div>
                          <img src={item2} alt="" srcset="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 p-2">
                      <div className="items d-flex align-items-center justify-content-center">
                        <div className="">
                          <h6>Labtops</h6>
                          <p className="">10 Items</p>
                        </div>
                        <div>
                          <img src={item3} alt="" srcset="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 p-2">
                      <div className="items d-flex align-items-center justify-content-center">
                        <div className="">
                          <h6>Smart TV</h6>
                          <p className="">10 Items</p>
                        </div>
                        <div>
                          <img src={item4} alt="" srcset="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 p-2">
                      <div className="items d-flex align-items-center justify-content-center">
                        <div className="">
                          <h6>Headphones</h6>
                          <p className="">10 Items</p>
                        </div>
                        <div>
                          <img src={item5} alt="" srcset="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 p-2">
                      <div className="items d-flex align-items-center justify-content-center">
                        <div className="">
                          <h6>Home Application</h6>
                          <p className="">10 Items</p>
                        </div>
                        <div>
                          <img src={item6} alt="" srcset="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 p-2">
                      <div className="items d-flex align-items-center justify-content-center">
                        <div className="">
                          <h6>Portabal Speakers</h6>
                          <p className="">10 Items</p>
                        </div>
                        <div>
                          <img src={item7} alt="" srcset="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 p-2">
                      <div className="items watch d-flex align-items-center justify-content-center">
                        <div className="">
                          <h6>Smart Watchs</h6>
                          <p className="">10 Items</p>
                        </div>
                        <div>
                          <img src={item8} alt="" srcset="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marquee-wrapper pt-4 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="marque-inner">
                <Marquee speed={40} className="d-flex">
                  <div className="mx-4 w-25">
                    <img src={barnd1} alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={barnd2} alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={barnd3} alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={barnd4} alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={barnd5} alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={barnd6} alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={barnd7} alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={barnd8} alt="" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper pt-4 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-3 main-title">Feuture Collection</div>
            <div className="col-lg-12">
              <CollectionCard />
            </div>
          </div>
        </div>
      </section>
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
    </Fragment>
  );
}

export default Home;
