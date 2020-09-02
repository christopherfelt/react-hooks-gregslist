import React from "react";

export const Car = ({ car }) => {
  return (
    <div className="card">
      <div className="card-body">
        <img src={car.imgUrl} className="img-fluid" alt="car" />
        <h5 className="card-title">{car.title}</h5>
        <p className="card-text">{car.description}</p>
        <h5 className="card-title">{car.price}</h5>
        <button className="btn btn-danger">X</button>
      </div>
    </div>
  );
};
