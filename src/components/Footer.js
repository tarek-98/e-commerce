import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { BsFillSendCheckFill } from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import googleImg from "./download.png";
import storeImge from "./google.png";

function Footer() {
  return (
    <Fragment>
      <footer className="footer-top pt-4 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-4 d-flex">
              <div className="icon pt-1">
                <BsFillSendCheckFill className="text-white me-2" />
              </div>
              <p className="pt-1 text-white">Sing up for NewsLetter</p>
            </div>
            <div className="col-8">
              <div className="container">
                <div className="row">
                  <div className="col-8">
                    <Form.Group controlId="formGridEmail">
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                  </div>
                  <div className="col-4">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-upper pt-4 pb-4">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 mb-3">
              <h4>Conact Us</h4>
              <ul className="p-0 mt-3">
                <li>
                  <a className="text-white" href="/">
                    16501 Collins Ave, Sunny Isles Beach, FL 33160, United
                    States
                  </a>
                </li>
                <li>
                  <a href="/">hexashop@company.com</a>
                </li>
                <li>
                  <a href="/">010-020-0340</a>
                </li>
                <li className="mt-2">
                  <AiFillFacebook />
                  <AiFillInstagram />
                  <AiFillLinkedin />
                  <AiFillYoutube />
                </li>
              </ul>
            </div>
            <div class="col-lg-2 mb-3">
              <h4>Information</h4>
              <ul className="p-0">
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Refund Policy</a>
                </li>
                <li>
                  <a href="/">Shipping Policy</a>
                </li>
                <li>
                  <a href="/">Terms of Services</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 mb-3">
              <h4>Account</h4>
              <ul className="p-0">
                <li>
                  <a href="/">Search</a>
                </li>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Faq</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 mb-3">
              <h4>Quick Links</h4>
              <ul className="p-0">
                <li>
                  <a href="/">Accessories</a>
                </li>
                <li>
                  <a href="/">Labtops</a>
                </li>
                <li>
                  <a href="/">HeadPhones</a>
                </li>
                <li>
                  <a href="/">Smart Watches</a>
                </li>
                <li>
                  <a href="/">Tablets</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 mb-3">
              <h4>Our App</h4>
              <ul className="p-0">
                <li>
                  <p className="text-white">
                    Download Our App and get 15% discount on your first order
                  </p>
                </li>
                <li>
                  <a href="/">
                    <img className="me-1" src={googleImg} alt="" />
                  </a>
                  <a href="/">
                    <img className="" src={storeImge} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-botton pt-3 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div class="box text-center">
                <p className="text-white">
                  Copyright &copy; 2023 E-Commerce. Tarek. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
