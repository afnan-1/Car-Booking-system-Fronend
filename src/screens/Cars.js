import { LinearProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Card from "../components/Card";
import { listAvailableCars } from "../store/actions/carActions";

function Cars() {
  const dispatch = useDispatch();
  const carAvailableList = useSelector((state) => state.carAvailableList);
  const { error, loading, cars } = carAvailableList;

  useEffect(() => {
    dispatch(listAvailableCars());
  }, [dispatch]);
  return (
    <>
      {loading ? <LinearProgress  /> : ""}
      <div className="container">
        <h3 className="text-center mt-3 ">
          {" "}
          <span
            className="py-2 px-5 rounded text-light"
            style={{ backgroundColor: "black" }}
          >
            {" "}
            List of cars
          </span>
        </h3>
        {error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <>
            <div className="container">
              <div className="row">
                {cars &&
                  cars.map((v, i) => {
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
    </>
  );
}

export default Cars;

