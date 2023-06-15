import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { add } from "./Store/CreateSlice";
// import { getProducts } from "./Store/ProductSlice";
import { getProducts } from "../../Redux/ProductSlice";
// import { Alert } from "react-bootstrap";
import { add } from "../../Redux/CreateSlice";
// import "./ProductsCss/Product.css";
import "./ProductCss/Product.css";

import Service from "../Service/Service";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  // console.log(products, "data");
  const addToCart = (product) => {
    dispatch(add(product));
  };

  if (status === "loading") {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }
  if (status === "error") {
    return (
      <alert className="text-center" variant="danger" key="danger">
        Something went wrong !! Try again later...
      </alert>
    );
  }

  return (
    <>
      <div className="row">
        <h1 className="head">Featured Products</h1>
        <hr className="line" />

        <div className="p-data">
          {products?.length > 0 &&
            products?.map((product, id) => (
              <div className="data" key={id}>
                <div className="p-dat">
                  <img className="p-img" src={product.image} alt="" />
                </div>

                <div className="text-center">
                  <Link style={{ color: "black" }} to={`/product/${product.id}`}>
                    <strong style={{ fontWeight: "500" }}>
                      {product.title}
                    </strong>
                  </Link>

                  <div className="category">
                    <span>{product.category}</span>
                  </div>

                  <div className="price">${product.price}</div>
                </div>
                <div>
                  <button className="addto" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      <Service />
    </>
  );
};

export default AllProducts;
