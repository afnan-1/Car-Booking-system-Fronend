import { LinearProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import { listCars } from "../store/actions/carActions";
function Home({ history }) {
  const dispatch = useDispatch();
  const carList = useSelector((state) => state.carList);
  const { error, loading, products, page, pages } = carList;
  let keyword = history.location.search;

  useEffect(() => {
    dispatch(listCars(keyword));
  }, [dispatch, keyword]);
  return (
    <div>
      {!keyword && <Carousel />}
      {loading && <LinearProgress />}
      {error ? (
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
            
          {products && products.length === 0 && (
            <div className="py-2">
                <Alert severity="warning">There is no Car Available or booking !</Alert>
                </div>
              )}
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
