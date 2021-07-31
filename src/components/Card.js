import React from "react";
import Rating from "./Rating";

function Card() {
  return (
    <div className="col-md-3 col-lg-4 col-xs-12">
      <div className="card m-2">
        <img
          src="https://cdn.luxe.digital/media/2020/12/16175821/most-expensive-cars-2021-Maserati-MC20-luxe-digital%402x.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">City</h5>
         <Rating text=" 12 Reviews" value="4" color="yellow"  />
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  );
}

export default Card;
