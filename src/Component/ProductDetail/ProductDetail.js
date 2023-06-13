// ProductDetail.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductStart } from "../../Redux/SingleProductslice";

const ProductDetail = ({ productId }) => {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductStart(productId));
  }, [dispatch, productId]);
  console.log(product);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return null;
  }

  return (
    <div>
      {product?.map((product, id) => (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
