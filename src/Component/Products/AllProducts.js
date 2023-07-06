import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/ProductSlice";
import { add } from "../../Redux/CreateSlice";
import "./ProductCss/Product.css";
import Service from "../Service/Service";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  // console.log(products, "data");

  const addToCart = (product) => {
    dispatch(add(product));
    toast.success("Item Added", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 600,
      hideProgressBar: true,
    });
  };

  if (status === "loading") {
    return <div style={{ textAlign: "center" }}> loading....</div>;
  }
  if (status === "error") {
    return (
      <div
        style={{ textAlign: "center", color: "white", paddingBottom: "10%" }}
      >
        Something went wrong !! Try again later...
      </div>
    );
  }

  return (
    <>
      <div className="rows">
        <h1 className="head">Featured Products</h1>
        <hr className="lines" />
        <div className="p-data">
          {products?.length > 0 &&
            products?.map((product, id) => (
              <div className="data" key={id}>
                <div className="p-dat">
                  <img className="p-img" src={product.image} alt="" />
                </div>

                <div className="text-center">
                  <Link
                    style={{ color: "black" }}
                    to={`/product/${product.id}`}
                  >
                    <strong style={{ fontWeight: "500" }}>
                      {product.title}
                    </strong>
                  </Link>
                  <div className="category">
                    <p>{product.price}</p>
                    <span>{product.category}</span>
                  </div>
                </div>
                <div>
                  <button className="addto" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                  <ToastContainer />
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
