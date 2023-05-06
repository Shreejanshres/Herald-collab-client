import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Registercss.css";
import Registerimg from "../Images/Register.png";
import logo from "../Images/logo.png";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      try {
        const response = await fetch("http://localhost:8000/signup/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            confirmPassword,
            address,
            phone,
            user,
          }),
        });
        if (response.ok) {
          const data = await response.json();
          if (data.type === "farmer") {
            window.location.href = "/kyc";
          } else if (data.type === "seller") {
            window.location.href = "/seller";
          }
        } else {
          alert("Invalid Credentials");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div
        className="register_r"
        style={{ backgroundImage: `url(${Registerimg})` }}
      >
        <div id="Nav_reg">
          <Link to="/">
            <img src={logo} alt="logo" className="logore" />
          </Link>
          <div className="top_re">
            <a>Already have an account? </a>
            <Link to="/login">
              <button id="button_r1">LOGIN</button>
            </Link>
          </div>
        </div>

        <form id="reg_r" onSubmit={handleSubmit}>
          <a id="head_r">Sign Up</a>
          <label id="la" htmlFor="email">
            Email:
          </label>
          <input
            value={email}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label id="la1" htmlFor="password">
            Password:
          </label>
          <input
            value={password}
            type="password"
            placeholder="**********"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label id="la2" htmlFor="confirmPassword">
            Confirm Password:
          </label>
          <input
            value={confirmPassword}
            type="password"
            placeholder="**********"
            id="confirmPassword"
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label id="la3" htmlFor="address">
            Address:
          </label>
          <input
            value={address}
            type="address"
            name="address"
            placeholder="address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <div id="reg_r2">
            <label id="la4" htmlFor="phone">
              Phone Number:
            </label>
            <input
              value={phone}
              type="tel"
              name="phone"
              placeholder="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
            <label id="la5" htmlFor="user">
              User Type:
            </label>
            <select
              value={user}
              name="user"
              id="user"
              onChange={(e) => setUser(e.target.value)}
            >
              <option value="farmer">Farmer</option>
              <option value="seller">Seller</option>
            </select>
            <button id="button_r2" type="submit">
              {" "}
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
