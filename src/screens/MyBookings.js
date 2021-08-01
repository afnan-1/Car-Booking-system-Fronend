import { Alert } from "@material-ui/lab";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { listBookings } from "../store/actions/bookingActions";
import { bookingListReducer } from "../store/reducers/bookingReducers";

function MyBookings() {
  const dispatch = useDispatch();
  const bookingList = useSelector((state) => state.bookingList);
  const { error, loading, bookings } = bookingList;

  useEffect(() => {
    dispatch(listBookings());
  }, [dispatch]);
  return (
    <div className="row mt-2 p-4 mx-0">
      <div className="col-md-12">
        <h3 className="text-center ">
          {" "}
          <span
            className="py-2 px-5 rounded text-light"
            style={{ backgroundColor: "black" }}
          >
            {" "}
            MY BOOKINGS
          </span>
        </h3>
        
        {bookings.length === 0 ? (
          <div className="mt-4">

          <Alert severity="warning">Please Book A Car</Alert>
          </div>
        ) : (
          <table className="table table-striped table-light mt-4">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Picture</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Status/Price</th>
              </tr>
            </thead>
            <tbody>
              {bookings &&
                bookings.map((v, i) => (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>
                      {" "}
                      <img
                        src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8MjAyMCUyMGNhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                        alt=""
                        width="100"
                        className="img-fluid"
                      />
                    </td>
                    <td> {v.car.name}</td>
                    <td>{v.address}</td>
                    <td> {v.price === 0 ? "pending..." : "RS:" + v.price}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default MyBookings;
