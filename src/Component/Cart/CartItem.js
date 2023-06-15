import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./Cart";

const cartItem = () => {
  const products = useSelector((state) => state.cart);

  const renderList = products.map((product) => {

    const { id } = product;
    return (
      <div className="display" key={id}>
        <Cart
          id={id}
          title={product.title}
          image={product.image}
          category={product.category}
          price={product.price}
        />
      </div>
    );
  });
  return <>{renderList}</>;
};

export default cartItem;
