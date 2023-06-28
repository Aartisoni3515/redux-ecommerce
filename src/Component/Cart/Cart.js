import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { Remove, decrease, increase } from "../../Redux/CreateSlice";
import { GrClose } from "react-icons/gr";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { BsFillBagXFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  // const quantity = useSelector(state=> state.cart.totalQuantity);
  // const totalPrice = useSelector(state=>state.cart.totalAmount);
  // console.log(products);
  const dispatch = useDispatch();
  const handleIncrement = (productId) => {
    dispatch(increase(productId));
  };
  const handleDecrement = (productId) => {
    dispatch(decrease(productId));
  };
  const remove = (product) => {
    dispatch(Remove(product));
  };

  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  // const quantity = products.map((product) => product.quantity);

  return (
    <div>
      {products.length > 0 ? (
        <div className="cart-row">
          {products.map((product, id) => (
            <div key={id} className="cart-items">
              <div className="cart-det">
                <div>
                  <img className="c-img" src={product.image} alt="" />
                </div>
                <div>
                  <h1>{product.title}</h1>
                </div>
                <div>
                  <p style={{ textAlign: "center" }}>
                    Price <br /> <strong>₹</strong>
                    {parseFloat(product.price).toFixed(2) * product.quantity}
                  </p>
                </div>
                <div className="cart-btn">
                  <button
                    className="incre"
                    onClick={() => handleDecrement(product.id)}
                  >
                    -
                  </button>
                  <p className="qtn">{product.quantity}</p>
                  <button
                    className="incre"
                    onClick={() => handleIncrement(product.id)}
                  >
                    +
                  </button>
                </div>
                <div>
                  <button className="remove" onClick={() => remove(product)}>
                    <GrClose />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-footer">
            <p>
              <MdKeyboardDoubleArrowLeft /> BACK TO SHOP
            </p>
            <strong>TOTAL: ₹{parseFloat(totalPrice).toFixed(2)}</strong>
          </div>
        </div>
      ) : (
        <div className="empty-cart" style={{ paddingTop: "10%" }}>
          <p>Nothing to show in cart</p>
          <span>
            <BsFillBagXFill className="e-bag" />
          </span>{" "}
          <br />
          <Link to="/products">
            <button style={{ marginTop: "4%" }} className="btn-1">
              GO SHOP
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
