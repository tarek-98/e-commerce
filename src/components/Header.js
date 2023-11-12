import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsCartDash } from "react-icons/bs";
import { BiGitCompare } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { fetchcCategories } from "../rtk/slices/category-slice";

function Header() {
  const cart = useSelector((state) => state.cart);

  const totlaPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  const categories = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchcCategories());
  }, []);

  return (
    <Fragment>
      <header className="header-top-strip pt-3">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shopping over 100$ and Free Returns
              </p>
            </div>
            <div className="col-6 mb-0">
              <p className="text-end text-white">
                Hotline:{" "}
                <a className="text-white" href="tel: 01141844174">
                  01141844174
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper pt-3 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6 col-sm-12 pt-2">
              <h2>
                <Link className="text-decoration-none text-white">TArek</Link>
              </h2>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 pt-2">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Product"
                  aria-label="Search Product"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="header-upper-links d-flex">
                <div>
                  <Link className="text-decoration-none text-white d-flex me-1">
                    <BiGitCompare />
                    <p className="ms-2 pt-1">Copmare Products</p>
                  </Link>
                </div>
                <div>
                  <Link className="text-decoration-none text-white d-flex me-1">
                    <AiOutlineHeart />
                    <p className="ms-2 pt-1">Favorite WishList</p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="text-decoration-none text-white d-flex me-1"
                  >
                    <AiOutlineUser />
                    <p className="ms-2 pt-1">Log in - My Accounts</p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="text-decoration-none text-white d-flex"
                  >
                    <BsCartDash />
                    <p className="ms-2 pt-1">
                      <span className="badge bg-white text-dark">
                        {cart.length}
                      </span>
                      <p>{totlaPrice.toFixed(2)}$</p>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-botton pt-1 pb-1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Navbar expand="lg" className="text-white">
                <Container>
                  <NavDropdown title="Shop Categories" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                      <Link to="/categories/electronics" className="category">
                        electronics
                      </Link>
                      <Link to="/categories/jewelery" className="category">
                        jewelery
                      </Link>
                      <Link
                        to="/categories/men's clothing"
                        className="category"
                      >
                        men's clothing
                      </Link>
                      <Link
                        to="/categories/women's clothing"
                        className="category"
                      >
                        women's clothing
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ms-5">
                      <Link
                        to="/"
                        className="text-white text-decoration-none p-2"
                        href="#home"
                      >
                        Home
                      </Link>
                      <Link
                        to="products"
                        className="text-white text-decoration-none p-2"
                        href="#link"
                      >
                        Our Store
                      </Link>
                      <Link
                        to="/blogs"
                        className="text-white text-decoration-none p-2"
                        href="#link"
                      >
                        Blogs
                      </Link>
                      <Link
                        to="/contact"
                        className="text-white text-decoration-none p-2"
                        href="#link"
                      >
                        Contact
                      </Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
