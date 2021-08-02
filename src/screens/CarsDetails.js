import { LinearProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useState, useEffect, createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Rating from "../components/Rating";
import { AddBooking } from "../store/actions/bookingActions";
import {
  listCarDetails,
  createProductReview,
} from "../store/actions/carActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../store/constants/carConstants";
function CarsDetails({ match }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const productReviewCreate = useSelector((state) => state.productReviewCreate);

  const bookingAdd = useSelector((state) => state.bookingAdd);
  const { loadingBooking, errorBooking, successBooking } = bookingAdd;
  const {
    loading: loadingProductReview,
    error: errorProductReview,
    success: successProductReview,
  } = productReviewCreate;

  useEffect(() => {
    if (successProductReview) {
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listCarDetails(match.params.id));
  }, [dispatch, successProductReview, match]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    );
  };
  return (
    <>
      {(loading || loadingBooking) && <LinearProgress />}
      {successBooking && (
        <Alert severity="success"> Car is successfully booked </Alert>
      )}
      {errorBooking && <Alert severity="error"> Car is Already Booked </Alert>}

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

              <div className="col-md-4">
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
                    <button
                      type="button"
                      className="btn bg-black text-light  w-100"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      Book Car
                    </button>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <h5>{product.car_driver}</h5>
                  </li>
                  {product && product.car_driver_image && (
                    <li className="list-group-item">
                      <img
                        className="img-fluid"
                        src={product.car_driver_image}
                      />
                    </li>
                  )}
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <h4
                  style={{ backgroundColor: "black" }}
                  className="py-2 px-5 mt-2 text-center rounded text-light"
                >
                  {" "}
                  <span
                    className="py-2 px-5 rounded text-light"
                    style={{ backgroundColor: "black" }}
                  >
                    {" "}
                    Reviews
                  </span>
                </h4>
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
                    {userInfo ? (
                      <form onSubmit={submitHandler}>
                        <div className="form-group">
                          <label htmlFor="">Rating</label>
                          <select
                            class="custom-select"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                          >
                            <option value="">Select...</option>
                            <option selected value="1">
                              1
                            </option>
                            <option value="2">2</option>
                            <option value="3">3</option>

                            <option value="3">4</option>
                            <option value="3">5</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Review</label>
                          <textarea
                            name=""
                            rows="6"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="form-control"
                          ></textarea>
                        </div>

                        <button className="btn bg-black text-light ">
                          submit
                        </button>
                      </form>
                    ) : (
                      <Alert severity="info">
                        Please <Link to="/login">login</Link> to write a review
                      </Alert>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
        <BookingModal carId={match.params.id} />
      </div>
    </>
  );
}

export default CarsDetails;

function BookingModal({ carId }) {
  const history = useHistory();
  const modelRef = createRef();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [address, setAddress] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (userInfo) {
      dispatch(AddBooking(mobileNo, address, carId));
      setMobileNo("");
      setAddress("");
      modelRef.current.click();

      setTimeout(() => {
        history.push("/my-bookings");
      }, 2000);
    }
  };
  return (
    <div>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Book a Car
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form onSubmit={submitHandler}>
              <div className="modal-body">
                {" "}
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    value={address}
                    required
                    onChange={(e) => setAddress(e.target.value)}
                    id="address"
                    aria-describedby="addressHelp"
                    placeholder="Enter Address"
                  />
                  <small id="addressHelp" className="form-text text-muted">
                    We'll never share your address with anyone other than
                    driver.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Mobile Number</label>
                  <input
                    type="text"
                    required
                    onChange={(e) => setMobileNo(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail2"
                    aria-describedby="mobile_no"
                    placeholder="Enter Mobile No"
                    name="mobile_no"
                  />
                  <small id="mobile_no" className="form-text text-muted">
                    To asure that driver approach you as soon as possible
                  </small>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  ref={modelRef}
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
              {!userInfo && <Alert severity="error">Please Login First</Alert>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
