import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div className="signup-container" style={{ paddingTop: "10%" }}>
      <div className="signup-content">
        <h2 style={{ padding: "10% auto" }}>Sign Up</h2>
        <div className="content">
          <label htmlFor=""> Username</label> <br />
          <input type="text" placeholder="username" name="" id="" />
        </div>
        <div className="content">
          <label> Email </label> <br />
          <input type="email" name="" id="" />
        </div>
        

        <div className="content">
          <label htmlFor="">Password</label> <br />
          <input type="password" name="" id="" />
        </div>
      </div>
      
    </div>
  );
};

export default SignUp;
