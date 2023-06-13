import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <div>
      <div className="services">
        <div className="service">
          <img
            className="service-img"
            style={{ width: "80%" }}
            src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/banner-03.jpg"
            alt=""
          />

          <div className="service-content">
            <h3>Limited Time Offer</h3>
            <h1>Special Edition</h1>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </h4>
            <h3>Buy This T-shirt At 20% Discount, Use Code OFF20</h3>
            <div>
              <button>Shop Now</button>
              <button className="btn-2">Find More</button>
            </div>
          </div>
        </div>

        <div className="ser-des">
          <div className="cards">
            <img
              src="	https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/globe-free-img.png"
              alt=""
            />
            <h4>Worldwide Shipping</h4>
            <p>
              It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>

          <div className="cards">
            <img
              src="	https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/quality-free-img.png"
              alt=""
            />
            <h4>Best Quality</h4>
            <p>
              It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>

          <div className="cards">
            <img
              src="	https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/tag-free-img.png"
              alt=""
            />
            <h4>Best Offers</h4>
            <p>
              It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>

          <div className="cards">
            <img
              src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/lock-free-img.png"
              alt=""
            />
            <h4>Secure Payments</h4>
            <p>
              It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
