// ProductDetail.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Redux/SingleProductslice";
import { Link, useParams } from "react-router-dom";
import "./ProductCss/ProductDetail.css";
import Footer from "../Footer/Footer";
import { FaStar } from "react-icons/fa";
import { add, decrease, increase } from "../../Redux/CreateSlice";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { data: product, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [productId]);
  console.log(product, "product");
  const { image, title, price, category, description, rating, id } = product;
  const addToCart = (product) => {
    dispatch(add(product));
  };
  const handleIncrement = (productId) => {
    dispatch(increase(productId));
  };
  const handleDecrement = (productId) => {
    dispatch(decrease(productId));
  };

  // const products = useSelector((state) => state.cart);
  const quantity = product.map((index) => index.quantity);

  return (
    <>
      <div className="product-details">
        <div className="product-detail">
          <div className="images">
            <img className="product-img" src={image} alt="" />
          </div>
          <div className="product-desc">
            <h1 className="product-title">
              <strong style={{ fontWeight: "500" }}>{title}</strong>
            </h1>
            <h4 style={{ color: "grey", fontWeight: "400" }}>
              <span> category: {category}</span>
            </h4>
            <strong>DESCRIPTION: </strong>
            <p>{description}</p>

            <div className="ratings">
              <span>
                {/* {rating[rate]} */}
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
            <div>{/* <span> {rating.rate} </span> */}</div>
            <h4 className="product-price">₹{price}</h4>
            <Link to={`/product/checkout/${id}`}>
              <button className="btn-1">Buy now</button>
            </Link>
            <div>
              <button className="btn-1" onClick={() => addToCart(product)}>
                Add to cart
              </button>
              <div className="cart-btn">
                <button
                  className="incre"
                  onClick={() => handleDecrement(product.id)}
                >
                  -
                </button>
                <p className="qtn">{quantity}</p>
                <button
                  className="incre"
                  onClick={() => handleIncrement(product.id)}
                > + </button>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
