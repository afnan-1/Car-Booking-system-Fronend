import React from "react";
import { Link } from "react-router-dom";

function MyBookings() {
  return (
    <div className="row mt-4">
      <div className="col-md-8">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div className="row">
              <div className="col-md-2">
                  <img src="" alt="" />
              </div>
              <div className="col-md-3">
                  <Link />
              </div>
              <div className="col-md-2">
                  price
              </div>
              <div className="col-md-3">
                <select class="form-control">
                  <option>Default select</option>
                  <option>Default select</option>
                  <option>Default select</option>
                  <option>Default select</option>
                  <option>Default select</option>
                  <option>Default select</option>

                </select>
              </div>
              <div className="col-md-1">
                <button>trash</button>
              </div>
            </div>
          </li>
        
        </ul>
      </div>
      <div className="col-md-4">
        <div className="card">
          <ul className="list-group list-group-flush">
            <li class="list-group-item">sub total</li>
            <li class="list-group-item">
              <button> chckout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyBookings;
