import React, { useState } from "react";
import "../Css/Forgotpw.css";
import Loginimg from "../Images/Loginimg.png";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

const Forgotpw = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/forgetpassword/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        sessionStorage.setItem("otp", data.otp);
        sessionStorage.setItem("email", email);
        window.location.href = "/otp";
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        className="backlog"
        style={{ backgroundImage: `url(${Loginimg})` }}
      ></div>

      <div className="forgotpw">
        <div className="head">
          <Link to="/">
            <img src={logo} alt="logo" className="logopw" />
          </Link>
          <div className="topppw">
            <a id="accpw">Don't have an account?</a>
            <Link to="/register">
              <button id="button1pw">Sign Up</button>
            </Link>
          </div>
        </div>
        <a id="forgot">Forgot Password?</a>

        <div className="midd">
          <form onSubmit={handleSubmit}>
            <label id="fpw" htmlFor="email">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="ema"
              name="email"
            />
            <br></br>
            <button id="button5">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Forgotpw;
