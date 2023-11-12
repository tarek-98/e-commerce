import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Fragment } from "react";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import AllProducts from "./Pages/AllProducts";
import Cart from "./components/Cart";
import Categories from "./components/Categories";
import MenCat from "./components/Men-cat";
import WomenCat from "./components/Women-cat";
import JeweleryCat from "./components/Jewelery-cat";
import ElectronicsCat from "./components/Electronics-cat";
import Login from "./components/Login";
import Blogs from "./Pages/Blogs";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/men's clothing" element={<MenCat />} />
            <Route path="/categories/women's clothing" element={<WomenCat />} />
            <Route path="/categories/jewelery" element={<JeweleryCat />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/categories/electronics"
              element={<ElectronicsCat />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
