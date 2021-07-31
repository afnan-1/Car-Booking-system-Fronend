import { LinearProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import { listProducts } from "../store/actions/carActions";
function Home() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products, page, pages } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      <Carousel />
      {loading ? (
        <LinearProgress />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <>
          <h2 className="text-center mt-3 ">
            {" "}
            <span
              className="py-2 px-5 rounded text-light"
              style={{ backgroundColor: "black" }}
            >
              {" "}
              Cars for booking
            </span>
          </h2>

          <div className="container">
            <div className="row">
              {products &&
                products.map((v, i) => {
                  return (
                    <div className="col-md-3 col-lg-4 col-xs-12" key={i}>
                      <Card data={v} />
                    </div>
                  );
                })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
