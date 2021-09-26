import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  const total = cart.reduce((prev, car) => prev + car.price, 0);

  return (
    <div className="cart w-5/6">
      <div className="text-center shadow-lg rounded-lg  p-1 m-7  cart-custom bg-indigo-400">
        <div className="text-base">
          <p className="font-medium text-3xl text-dark-600">
            Cars Added:<i className="fas fa-cart-plus"></i>
            {cart.length}
          </p>
          <p className="font-medium mb-5 text-xl mt-3">Total price: ${total}</p>
          {/* <h1 className="font-bold mt-4">Name: </h1> */}
          {cart.map((item) => (
            <h1 key={cart.index} className="font-medium">Name : {item.name}</h1>
          ))}
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5 mb-5 p-4">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
