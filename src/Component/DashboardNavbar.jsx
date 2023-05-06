// make navigation bar for dashboard
import React from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import { Component } from "react";
import profileimg from "../Images/profilecircle.png";
import logoutimg from "../Images/logoutimg.png";
import "../Css/dashboardnavbar.css";

class DashboardNavbar extends Component {
  render() {
    return (
      <nav class="navbaritems">
        <Link to="/">
          <img src={logo} alt="logo" className="logore" />
        </Link>
        <h1 id='name'>Admin Dashboard</h1>
        <img id="profileimg" alt="profileimg" src={profileimg} />{" "}
        <a> <img id="logoutimg" alt="logoutimg" src={logoutimg} /></a>
      </nav>
    );
  }
}

export default DashboardNavbar;