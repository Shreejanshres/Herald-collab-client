import React, { useState } from "react";
import "../Css/Logincss.css";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

const Login = () => {
  const [email, setEmail] =
    useState(
      ""
    ); /* email and pass is passed so that it stores email and password */
  const [pass, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, pass }),
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data.verified) {
          if (data.type == "farmer") {
            localStorage.setItem("user", JSON.stringify(data));
            window.location.href = "/farmer";
          } else if (data.type == "seller") {
            localStorage.setItem("user", JSON.stringify(data));
            window.location.href = "/seller";
          }
        } else {
          alert("Please verify your email first");
        }
      } else {
        alert("Invalid Credentials");
      }
    }catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="loginpage">
      <div class="headd">
        <Link to="/">
          <img src={logo} alt="logo" class="logo" />
        </Link>

        <div class="top">
          <h3>Don't have an account?</h3>
          <Link to="/register">
            <button id="button1">Sign Up</button>
          </Link>
        </div>
      </div>

      <div class="wel">
        <a id="welcome">Welcome</a>
      </div>

      <form id="log" onSubmit={handleSubmit}>
        <label id="email" htmlFor="email">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label id="password" htmlFor="password">
          Password
        </label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="**********"
          id="password"
          name="password"
        />
        <button id="button2" type="submit">
          Log in
        </button>
      </form>
      <div className="forpw">
        <a>Forgot Password? </a>
        <Link to="/forgotpw">
          <a id="reset">Reset</a>{" "}
        </Link>
      </div>
    </div>
  );
};
export default Login;
