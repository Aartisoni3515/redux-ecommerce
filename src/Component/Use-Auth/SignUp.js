import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const signupuser = (e) => {
    // e.preventDefault();
    console.log("signup");
  };

  return (
    <div className="signup-container" style={{ paddingTop: "10%" }}>
      <div className="signup-content">
        <h2 style={{ padding: "10% auto" }}>Sign Up</h2>
        <div className="content">
          <label htmlFor=""> Username</label> <br />
          <input
            type="text"
            placeholder="username"
            value={form}
            onChange={(e) => setForm(e.target.value)}
          />
        </div>
        <div className="content">
          <label> Email </label> <br />
          <input
            onChange={(e) => setForm(e.target.value)}
            value={form}
            type="email"
          />
        </div>
        <div className="content">
          <label htmlFor="">Password</label> <br />
          <input
            onChange={(e) => setForm(e.target.value)}
            value={form}
            type="password"
          />
        </div>
        <button onClick={() => signupuser()}>Signup</button>
      </div>
    </div>
  );
};

export default SignUp;
