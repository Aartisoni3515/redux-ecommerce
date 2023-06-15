import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { Remove, decrease, increase } from "../../Redux/CreateSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
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
                  <p style={{textAlign:"center"}}>Price <br /> <strong>₹</strong>{totalPrice}</p>
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
                    x
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>Nothing to show in cart</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
