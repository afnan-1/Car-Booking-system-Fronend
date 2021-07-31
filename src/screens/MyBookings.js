import React from "react";
import { Link } from "react-router-dom";

function MyBookings() {
  return (
    <div className="row mt-4 p-4">
      <div className="col-md-8">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div className="row">
              <div className="col-md-2">
                <img
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8MjAyMCUyMGNhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-md-3">
                <Link to="/">hello world my name is afnan</Link>
              </div>
              <div className="col-md-5">ismail valley p#156 Faisalabad</div>
              <div className="col-md-2">Rs 200</div>
            </div>
          </li>
          <li class="list-group-item">
            <div className="row">
              <div className="col-md-2">
                <img
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8MjAyMCUyMGNhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-md-3">
                <Link to="/">hello world my name is afnan</Link>
              </div>
              <div className="col-md-5">ismail valley p#156 Faisalabad</div>
              <div className="col-md-2">Rs 200</div>
            </div>
          </li>{" "}
          <li class="list-group-item">
            <div className="row">
              <div className="col-md-2">
                <img
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8MjAyMCUyMGNhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-md-3">
                <Link to="/">hello world my name is afnan</Link>
              </div>
              <div className="col-md-5">ismail valley p#156 Faisalabad</div>
              <div className="col-md-2">Rs 200</div>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <div className="card">
          <ul className="list-group list-group-flush">
            <li class="list-group-item"><strong>Subtotal:</strong></li>
            <li class="list-group-item">RS 1200</li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyBookings;
