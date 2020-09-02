import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Car } from "./car";

export const Cars = () => {
  const { cars, getCars } = useContext(GlobalContext);
  useEffect(() => {
    getCars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card-columns">
      {cars.map((car) => (
        <Car key={car.id} car={car} />
      ))}
    </div>
  );
};
