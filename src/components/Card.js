import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function Card({data}) {
  return (
    <>
      <Link to={`/cars/detail/${data.id}`} style={{textDecoration:"none",color:"inherit"}}>
        <div className="card m-2">
          <img
            src={data.image}
            className="card-img-top"
            alt={data.name}
          />
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <Rating text={`${data.numReviews} reviews`} value={data.rating} color="yellow" />
          </div>
          <div className="card-footer">
            <small className="text-muted">Recently Updated</small>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
