import React from 'react'
import Card from '../components/Card'

function Cars() {
    return (
        <div className='container'>
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

            <div className="row">

                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Cars
