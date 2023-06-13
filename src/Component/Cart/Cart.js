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
    dispatch(decrease(productId))
  };
const remove =(product)=>{
  dispatch(Remove(product))
}
  return (
    <div>
      {products.length > 0 ? (
        <div  className="cart-row">
          {products.map((product, id) => (
            <div key={id} className="cart-items">
              <div>
                <img className="c-img" src={product.image} alt="" />
              </div>
              <div>
                <h1>{product.title}</h1>
              </div>
              <div>
                <p>{product.price}</p>
              </div>
              <div>
                <button onClick={() => handleDecrement(product.id)}>- </button>
              </div>
              <p>{product.quantity}</p>
              <div>
                <button onClick={() => handleIncrement(product.id)}>+ </button>
              </div>
              {/* <div>
                <button onClick={() => remove(product)}>remove</button>
              </div> */}

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
