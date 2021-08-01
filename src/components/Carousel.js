import React from "react";

function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://www.bsahab.com/blog/wp-content/uploads/2018/10/rent-a-car-for-lahore.jpg"
            className="d-block w-100"
            alt="..."
            style={{ objectFit: "cover" }}
            height="500"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://ddi-dev.com/uploads/booking-software.jpg"
            className="d-block w-100"
            alt="..."
            style={{ objectFit: "cover" }}
            height="500"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.pinimg.com/originals/b2/5c/37/b25c3740dfbb1ddc4da25ac316683065.jpg"
            className="d-block w-100"
            alt="..."
            style={{ objectFit: "cover" }}
            height="500"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
