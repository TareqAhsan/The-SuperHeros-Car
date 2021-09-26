import React, { useEffect, useState } from "react";
import Car from "../Car/Car";
import Cart from "../Cart/Cart";

const CarShop = () => {
  const [cars, setCars] = useState([]);
  const [cart, setCart] = useState([]);

  const handleClick = (car) => {
    console.log(car);
    const newCar = [...cart,car]
    setCart(newCar);
  };
  useEffect(() => {
    fetch("./carData.JSON")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="grid gap-x-2 gap-y-2 grid-cols-1 lg:grid-cols-3 p-3 flex-1">
          {cars.map((car) => (
            <Car car={car} key={car.id} handleClick={handleClick}></Car>
          ))}
        </div>
        <div>
          <Cart cart = {cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default CarShop;
