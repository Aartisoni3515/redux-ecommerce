import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./Cart";

const CartItem = () => {
  const products = useSelector((state) => state.cart);
  console.log(products);
  
console.log(totalPrice);
  // const renderList = products.map((product) => {
  // const { id } = product;
  return (
    <div className="display">
      {products.map((product, id) => (
        <Cart
          key={id}
          id={product.id}
          title={product.title}
          image={product.image}
          category={product.category}
          price={product.price}
          totalPrice={totalPrice}
        />
      ))}
    </div>
  );

  // return <>{renderList}</>;
};

export default CartItem;
