import React from "react";
import Rating from "../components/Rating";

function CarsDetails() {
  return (
    <div className='container p-3'>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8MjAyMCUyMGNhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            alt=""
            className="img-fluid"
          />
        </div>

        <div className="col-md-3">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>car name</h3>
            </li>
            <li className="list-group-item">
              <Rating value="4" text="12 reviews" color="yellow" />
            </li>{" "}
            <li className="list-group-item">Price: 123</li>
            <li className="list-group-item">Description</li>
            <li className="list-group-item"><button className="btn btn-primary">Book Car</button></li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h4> Reviews</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Rating value="4" text="12 reviews" color="yellow" />
              <p>created at</p>
              <p>comment kroo ani deyo</p>
            </li>

            <li className="list-group-item">
              <h4>Write a review</h4>
              <form action="">
                <div className="form-group">
                  <label htmlFor="">Rating</label>
                  <select class="custom-select">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>



                <div className="form-group">
                    <label htmlFor="">Review</label>
                   <textarea name="" rows="6" className='form-control'></textarea>
                </div>

                <button className='btn btn-primary'>
                    submit
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CarsDetails;
