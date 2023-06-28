import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Redux/SingleProductslice";
import { Link, useParams } from "react-router-dom";
import "./CheckOut.css";
// import {  } from "../../Redux/CreateSlice";

const CheckOut = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { data: product, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [productId]);
  console.log(product, "product");
  const { image, title, price, category, id, quantity } = product;

  // const totalPrice = product.reduce(
  //   (total, product) => total + product.price * product.quantity,
  //   0
  // );
  const totalPrice = product.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div>
      <div className="container">
        <div className="window">
          <div className="order-info">
            <div className="order-info-content">
              <h2>Order Summary</h2>
              <div className="line" />
              <table className="order-table">
                <tbody>
                  <tr>
                    <td>
                      <img
                        style={{ height: "100px" }}
                        src={image}
                        className="full-width"
                      />
                    </td>
                    <td>
                      <br /> <span className="thin">{title}</span>
                      <span className="thin small">
                        <br />
                        Category : {category}
                      </span>
                      <br />
                      <span> quantity:{quantity}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="price">${price}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="line" />
              <div className="line" />
              <div className="line" />
              <div className="total">
                <span>Discount:</span> <br />
                <span style={{ float: "left" }}>TOTAL :78 </span>
                <span style={{ float: "right", textAlign: "right" }}>
                  <span>
                    10%off <strike>{price}</strike>
                  </span>
                  <br />$ {totalPrice}
                </span>
              </div>
            </div>
          </div>
          <div className="credit-info">
            <div className="credit-info-content">
              <table className="half-input-table">
                <tbody>
                  <tr>
                    <td>Please select your card: </td>
                    <td>
                      <select id="visa">
                        <option value="3">visa</option>
                        <option value="1">Master Card</option>
                        <option value="2">American Express</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
              <img
                src="https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png"
                height={80}
                className="credit-card-image"
                id="credit-card-image"
              />
              Card Number
              <input className="input-field" />
              Card Holder
              <input className="input-field" />
              <table className="half-input-table">
                <tbody>
                  <tr>
                    <td>
                      Expires
                      <input className="input-field" />
                    </td>
                    <td>
                      CVC
                      <input className="input-field" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <Link to="/">
                <button className="pay-btn">Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
