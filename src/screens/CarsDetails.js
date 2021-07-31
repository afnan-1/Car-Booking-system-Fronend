import { LinearProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import {
  listCarDetails,
  createProductReview,
} from "../store/actions/carActions";
function CarsDetails({ match }) {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listCarDetails(match.params.id));
  }, []);
  return (
    <div className="container p-3">
      {product && (
        <>
          <div className="row">
            <div className="col-md-6">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid"
              />
            </div>

            <div className="col-md-3">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h3>{product.name}</h3>
                </li>
                <li className="list-group-item">
                  <Rating
                    text={`${product.numReviews} reviews`}
                    value={product.rating}
                    color="yellow"
                  />
                </li>{" "}
                <li className="list-group-item">
                  Description: {product.description}
                </li>
                <li className="list-group-item">
                  <button className="btn btn-primary">Book Car</button>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <h4> Reviews</h4>
              {product &&
                product.car_review &&
                product.car_review.length === 0 && (
                  <Alert severity="warning">No Reviews</Alert>
                )}
              <ul className="list-group list-group-flush">
                {product &&
                  product.car_review &&
                  product.car_review.map((v, i) => {
                    return (
                      <li className="list-group-item">
                        <Rating value={v.rating} color="yellow" />
                        <p>{v.created_at.substring(0, 10)}</p>
                        <p>{v.comment}</p>
                      </li>
                    );
                  })}

                <li className="list-group-item">
                  <h4>Write a review</h4>
                  {/* {loadingProductReview && <LinearProgress />}
                  {successProductReview && (
                    <Alert variant="success">Review Submitted</Alert>
                  )}
                  {errorProductReview && (
                    <Alert variant="danger">{errorProductReview}</Alert>
                  )} */}
                  <form action="">
                    <div className="form-group">
                      <label htmlFor="">Rating</label>
                      <select class="custom-select">
                        <option selected value="1">
                          1
                        </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Review</label>
                      <textarea
                        name=""
                        rows="6"
                        className="form-control"
                      ></textarea>
                    </div>

                    <button className="btn btn-primary">submit</button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CarsDetails;
