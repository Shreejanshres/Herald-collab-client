import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/kyc.css";
import Registerimg from "../Images/Register.png";
import logo from "../Images/logo.png";

export const Kyc = () => {
  const [name, setName] = useState("");
  const [proimg, setProimg] = useState("");
  const [citifront, setCitifront] = useState("");
  const [citiback, setCitiback] = useState("");
  const userData = JSON.parse(localStorage.getItem("user"));
  const id = userData.id;
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response= await fetch('http://127.0.0.1:8000/kyc/',{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({name,proimg,citifront,citiback,id}),
      });
      const data= await response.json();
      console.log(data);
      if(response.ok){
        alert("KYC form submitted");
        localStorage.clear();
        window.location.href="/";
      }
    }
    catch(error){
      console.log(error);
    }
  };

  return (
    <>
      <div class="register_res" style={{ backgroundImage: `url(${Registerimg})` }}>
        <div id="logo">
          <Link to="/">
            <img src={logo} alt="logo" />{" "}
          </Link>
        </div>
        <form class='kyc'>
          <h1 id="kyc_head">KYC Form</h1>
          <div class="kyc_form">
          <label id="fullname">Name</label>
          <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
          <label id="citizen">Citizenship front</label>
          <input type="file" onChange={(e) => setCitifront(e.target.value)} />
          <label id="citizen">Citizenship back</label>
          <input type="file" onChange={(e) => setCitiback(e.target.value)} />
          <label id="profile">Profile pic</label>
          <input type="file" onChange={(e) => setProimg(e.target.value)} />
          </div>
          <button type="submit" id="submitbtn"onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
};
export default Kyc;
