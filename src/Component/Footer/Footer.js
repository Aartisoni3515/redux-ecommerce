import React from "react";
import "./Footer.css";
import { FaYoutube, FaFacebookF, FaTwitter ,FaInstagram  , FaGoogle , FaYelp} from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <hr  style={{color:"#e2e2e2"}} />
        <h1>
          SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.
        </h1>
        <hr   />
        <div className="footer-content">
          <div className="footer-logo">
            <img
              src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo@2x-free-img.png"
              alt=""
            />
            <h3>The best look anytime, anywhere.</h3>
          </div>
          <div>
            <h4>For Her</h4>
            <ul>
              <li>Women Jeans</li>
              <li>Tops and Shirts </li>
              <li>Women Jackets</li>
              <li>Heels and Flats</li>
              <li>Women Accessories</li>
            </ul>
          </div>
          <div>
            <h4>For Him</h4>
            <ul>
              <li>Men Jeans</li>
              <li>Men Shirts</li>
              <li>Men Shoes</li>
              <li>Men Accessories</li>
              <li>Men Jackets</li>
            </ul>
          </div>
          <div className="search">
            <h4>Subscribe</h4>
            <input
              className="inp"
              type="text"
              placeholder="Your email address"
              name=""
              id=""
            />
            <button> Subscribe </button>
          </div>
        </div>
        <hr style={{marginTop:"50px", color:"#e2e2e2"}} />

        <div  className="icons">
          <div>
            <p>Copyright © 2023 Brandstore. Powered by Brandstore.</p>{" "}
          </div>
          <div className="icon" >
            <ul >
              <li> <FaFacebookF /></li>
              <li> <FaYoutube /></li>
              <li><FaTwitter/></li>
              <li><FaInstagram/></li>
              <li><FaGoogle/></li>
              <li><FaYelp/></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
