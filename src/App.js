import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Products from "./Component/Products/Products";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import SignUp from "./Component/Use-Auth/SignUp";
import SignIn from "./Component/Use-Auth/SignIn";
import Contact from "./Component/Contact/Contact";
import AllProducts from "./Component/Products/AllProducts";
import Cart from "./Component/Cart/Cart";
import Service from "./Component/Service/Service";
import ProductDetail from "./Component/ProductDetail/ProductDetail";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/allproducts/:id" element={<AllProducts />} />
          <Route path="/allproducts/products/:id" component={<ProductDetail/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/service" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />

    </>
  );
}

export default App;
