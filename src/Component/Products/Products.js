import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Data from "./Data";
import "./ProductCss/Product.css"
import AllProducts from "./AllProducts";
const Product = () => {
  return (
    <>
      <div className="products-container">
        <div className="brand">
          <div>
            <Carousel autoPlay={true} showThumbs={false}>
              {Data.map((info, index) => (
                <div key={index} className="product-content  ">
                  <div className="box">
                    <img src={info.Image1} alt="" />
                  </div>
                  <div className="box">
                    <img src={info.Image2} alt="" />
                  </div>
                  <div className="box">
                    <img src={info.Image3} alt="" />
                  </div>
                  <div className="box">
                    <img src={info.Image4} alt="" />
                  </div>
                  <div className="box">
                    <img src={info.Image5} alt="" />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          <div className="get-products">
            <div className="item">
              <img
                src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/women-fashion-free-img.jpg"
                alt=""
              />
              <div className="item-desc">
                <h2>20% Off On Tank Tops</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ac dictum.
                </p>
                <button className="product-btn">Shop Now</button>
              </div>
            </div>
            <div className="item">
              <img
                src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/men-fashion-free-img.jpg"
                alt=""
              />
              <div className="item-desc">
                <h2>Latest Eyewear For You</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ac dictum.
                </p>
                <button className="product-btn">Shop Now</button>
              </div>
            </div>
            <div className="item">
              <img
                src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/footwear-free-img.jpg"
                alt=""
              />
              <div className="item-desc">
                <h2>Let's Lorem Suit Up!</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ac dictum.
                </p>
                <button className="product-btn">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
        <AllProducts />
      </div>
    </>
  );
};

export default Product;
