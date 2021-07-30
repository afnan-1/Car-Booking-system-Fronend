import React from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div>
      <Carousel />

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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Home;
