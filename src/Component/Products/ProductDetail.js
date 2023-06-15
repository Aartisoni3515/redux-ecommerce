// ProductDetail.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Redux/SingleProductslice";
import { Link, useParams } from "react-router-dom";
import "./ProductCss/ProductDetail.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { data: product, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [productId]);
  console.log(product, "product");
  const { image, title, price, category, description, rating, id } = product;

  return (
    <div className="product-details">
      <div className="product-detail">
        <div className="images">
          <img className="product-img" src={image} alt="" />
        </div>
        <div className="product-desc">
          <h1 className="product-title">
            <strong style={{ fontWeight: "500" }}>{title}</strong>
          </h1>
          <p>{description}</p>

          <h3 className="">
            <span>{category}</span>
          </h3>
          {/* <div className="ratings">{rating.rate}</div> */}
          <h3 className="product-price">${price}</h3>
          <Link to={`/product/checkout/${id}`}>
            <button className="btn-1">Buy now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
