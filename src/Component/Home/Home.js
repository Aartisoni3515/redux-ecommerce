import React from "react";
import "./Home.css";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <img
          className="home-img"
          style={{ width: "100%" }}
          src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/home-new-bg-free-img.jpg"
          alt=""
        />
         <div className="home-content">
          <h1>Raining Offers for hot summer!</h1>
          <h4>25% off on all products</h4>
          <div className="home-btn">
            <button>Shop Now</button>
            <button className="btn">Find More</button>
          </div>
        </div>
      </div>

      <Products />
    </div>
  );
};

export default Home;
