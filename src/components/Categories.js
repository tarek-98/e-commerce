import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchcCategories } from "../rtk/slices/category-slice";
import { Fragment } from "react";
import { Col } from "react-bootstrap";

function Categories() {
  const categories = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchcCategories());
  }, []);
  return (
    <Fragment>
      <div className="category">
        {categories.map((category) => {
          return (
            <Col>
              <h1>{category}</h1>
            </Col>
          );
        })}
      </div>
    </Fragment>
  );
}

export default Categories;
