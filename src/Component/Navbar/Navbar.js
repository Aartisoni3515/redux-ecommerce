import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag, HiUser, HiPhone } from "react-icons/hi";
import { useSelector } from "react-redux";
import { CgMenu, CgClose } from "react-icons/cg";

import "./Navbar.css";

const Navbar = () => {
  const [IsMobile, setIsMobile] = useState(false);
  const cartProducts = useSelector((state) => state.cart);
  return (
    <div>
      <div className="navbar">
        <div className="nav-container">
          <div className="nav">
            <img
              src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1-free-img.png"
              alt=""
            />
            <ul
              className={IsMobile ? "nav-links-mobile" : "navlist"}
              onClick={() => setIsMobile(false)}
            >
              <li>
                <Link to="/">Home </Link>
              </li>
              <li>
                <Link to="products">Products </Link>
              </li>
              <li>
                <Link to="products">women </Link>
              </li>
              <li>
                <Link to="products">Men </Link>
              </li>
            </ul>
          </div>
          <button
            className="mobile-menu-icon  text-white "
            onClick={() => setIsMobile(!IsMobile)}
          >
            {IsMobile ? <CgClose /> : <CgMenu />}
          </button>
          <div className="navi">
            <ul className="nav-list">
              <li>
                <Link to="/contact">
                  <HiPhone />{" "}
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <HiOutlineShoppingBag /> <sup>{cartProducts.length}</sup>
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <HiUser />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
