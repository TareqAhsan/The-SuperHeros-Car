import React from "react";
import Cart from "../Cart/Cart";
import './Car.css'
const Car = (props) => {
  const { name, model, manufacturer, price, color, img, cc } = props.car;
  const  {car,handleClick} = props;

  return (
    <div className="text-center shadow-lg rounded-lg w-full h-auto
     p-1 m-7 bg-indigo-400 hover:bg-indigo-300">
      <div>
        <img src={img} className="w-full h-64 mx-auto rounded-lg" alt="" />
      </div>
      <div className="text-base">
        <h1 className="font-bold mt-4 text-2xl">Name: {name}</h1>
        <h2 className="font-medium">Model: {model}</h2>
        <h2 className="font-medium">color: {color}</h2>
        <h2 className="font-medium">cc: {cc}</h2>
        <p className="font-medium">manufacturer: {manufacturer}</p>
        <p className="font-medium">price: {price}</p>
      </div>
      <button onClick={()=> handleClick(car)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5"><i className="fas fa-cart-plus mr-1"></i>
        ADD CAR
      </button>
      <div className="p-4  flex text-white font-bold justify-center">
            <i className="fab fa-google mx-4"></i>
            <i className="fas fa-envelope-square mx-4"></i>
        </div>
    </div>
  );
};

export default Car;
