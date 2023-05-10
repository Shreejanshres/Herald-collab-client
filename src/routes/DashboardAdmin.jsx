import "../Css/Dashbadmin.css";
import dashbbb from "../Images/dashbbb.png";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import profileimg from "../Images/profilecircle.png";
import logoutimg from "../Images/logoutimg.png";
import { useEffect, useState } from "react";

function Admindash() {
  const [listKyc, setKyc] = useState([]);
  const [listData, setListData] = useState([]);
  const [listfarmer, setListfarmer] = useState([]);
  const [listCrops, setListCrops] = useState([]);
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };


  const [name,setname]=useState('');
  const [region,setregion]=useState('');
  const [province,setprovince]=useState('');
  const [temperature,settemperature]=useState('');
  const [climate,setclimate]=useState('');
  const [soil,setsoil]=useState('');
  const [rain,setrain]=useState('');
  const [disease,setdisease]=useState('');
  const [nutrient,setnutrient]=useState('');
  const [showPopup, setShowPopup] = useState(false);
  const closePopup = () => {
    setShowPopup(false); // set showPopup to false when the close button is clicked
  };
  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(name,region,province,temperature,climate,soil,rain,disease,nutrient);
    try {
      const response = await fetch("http://localhost:8000/addcrop/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, region, province, temperature, climate, soil, rain, disease, nutrient }),
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        alert("Crop added successfully");
      }
      else{
        console.log(response.json());
      }
      
    }catch (error) {
      console.log(error);
    }
    closePopup();
  }
  useEffect(() => {
    function display_seller() {
      fetch("http://127.0.0.1:8000/seller-data/")
        .then((response) => response.json())
        .then((data) => {
          setListData(data);
        })
        .catch((error) => console.log(error));
    }
    function display_kyc() {
      fetch("http://127.0.0.1:8000/displaykyc/")
        .then((response) => response.json())
        .then((data) => {
          setKyc(data);
        })
        .catch((error) => console.log(error));
    }
    function display_farmer() {
      fetch("http://127.0.0.1:8000/farmer-data/")
        .then((response) => response.json())
        .then((data) => {
          setListfarmer(data);
        })
        .catch((error) => console.log(error));
    }
    function display_crops() {
        fetch("http://127.0.0.1:8000/crops-data/")
          .then((response) => response.json())
          .then((data) => {
            setListCrops(data);
          })
          .catch((error) => console.log(error));
      }
      
    display_crops();
    display_farmer();
    display_seller();
    display_kyc();
  }, []);
  const acceptkyc = async (id) => {
    console.log(id);
    const response = await fetch("http://127.0.0.1:8000/acceptkyc/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      window.location.reload();
    }
  };
  const rejectkyc = async (id) => {
    console.log(id);
    const response = await fetch("http://127.0.0.1:8000/rejectkyc/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      window.location.reload();
    }
  };
  const deletecrop = async (id) => {
    console.log(id);
    const response = await fetch("http://127.0.0.1:8000/deletecrop/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      window.location.reload();
    }
  };
  return (
    <>
      <div
        className="backlogadmin"
        style={{ backgroundImage: `url(${dashbbb})` }}
      ></div>
      <div className="fullpageadmin">
        <div className="headdadmin">
          <div className="leftdash1">
            <Link to="/">
              <img src={logo} alt="logo" className="logo1" />{" "}
              {/* logo is linked to home page i.e when logo is clicked it return to home page */}
            </Link>
            <h1 id="topic1">DASHBOARD</h1>
          </div>
          <div className="profileimg1">
            {/* setting background image */}
            <a href="#" onClick={logout}>
              <img id="logoutimg1" alt="logoutimg" src={logoutimg} />
            </a>
          </div>
        </div>

        <div className="userdata1">
          <div className="topppp1">
            <h3 id="today1">Farmers</h3>
          </div>
          <div class="farmerlist">
            {listfarmer.map((farmer) => (
              <div key={farmer.id} class="farmerdata">
                <span id="farmerid">{farmer.id}</span>
                <span id="farmername">{farmer.name}</span>
                <span id="farmerphone">{farmer.phone}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="photo1">
          <h3 id="event1">KYC Verification</h3>
          <div class="kyclist">
            {listKyc.map((kyc) => (
              <div key={kyc.id} class="kycdata">
                <div class="kycinfo">
                  <span id="kycname">{kyc.id}</span>
                  <span id="kycid">{kyc.name}</span>
                </div>
                <div class="adminbutton">
                  <button onClick={() => acceptkyc(kyc.id)}>Accept</button>
                  <button onClick={() => rejectkyc(kyc.id)} id="reject">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="citfront1">
          <div className="citffrontt1a">
            <h3 className="citf1sell">Sellers</h3>
            <div class="sellerdata">
              {listData.map((data) => (
                <div key={data.id} class="sellerdata1">
                  <span id="sellerid">{data.id}</span>
                  <span id="sellername">{data.email}</span>
                  <span id="sellerphone">{data.phone}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="citback1">
          <h3 id="citb1">Issues</h3>
          <div className="listissue">
            <div className="iss1">
              <uL id="isslist">
                <li id="isa1">
                  The logout button is not working properly.{" "}
                  <button id="solved1">Solved</button>{" "}
                  <button id="false1">False Issue</button>
                </li>
                <li id="isa2">
                  The logout button is not working properly.{" "}
                  <button id="solved1">Solved</button>{" "}
                  <button id="false1">False Issue</button>
                </li>
                <li id="isa3">
                  The logout button is not working properly.{" "}
                  <button id="solved1">Solved</button>{" "}
                  <button id="false1">False Issue</button>
                </li>
                <li id="isa4">
                  The logout button is not working properly.{" "}
                  <button id="solved1">Solved</button>{" "}
                  <button id="false1">False Issue</button>
                </li>
                <li id="isa5">
                  The logout button is not working properly.{" "}
                  <button id="solved1">Solved</button>{" "}
                  <button id="false1">False Issue</button>
                </li>
              </uL>
            </div>
          </div>
        </div> */}
        <div className="sellinfo1">
          <div id="cropy">
            <h3 id="selli1">Crops </h3>
            <button id="addcrop2" onClick={()=> setShowPopup(true)}> Add Crops</button>
          </div>
          <div class="cropdata">
            {listCrops.map((crop) => (
                <div key={crop.id} class="cropdata1">
                    <span id="cropid">{crop.id}</span>
                    <span id="cropname">{crop.name}</span>
                    {/* <span><a href="#" id="cropedit">Edit</a></span> */}
                    <span><a href="#" onClick={() => deletecrop(crop.id)} id="cropdelete">Delete</a></span>
                </div>
            ))}
          </div>
        </div>
        {showPopup && (
        <div class="addcrops">
            <h2>Add Crops</h2>
          <form  onSubmit={handleSubmit}>
            <div class="addcontent">
            <span>Name:</span>
            <input value={name} onChange={(e) => setname(e.target.value)} type="text"/> 
            <span>Climate:</span>
            <input value={climate} onChange={(e) => setclimate(e.target.value)} type="text"/> 
            <span>Temperature:</span>
            <input value={temperature} onChange={(e) => settemperature(e.target.value)} type="text" /> 
            <span>Soil:</span>
            <input value={soil} onChange={(e) => setsoil(e.target.value)} type="text" /> 
            <span>Rain:</span>
            <input value={rain} onChange={(e) => setrain(e.target.value)} type="text"/> 
            <span>Nutrient:</span>
            <input value={nutrient} onChange={(e) => setnutrient(e.target.value)} type="text" /> 
            <span>Disease:</span>
            <input value={disease} onChange={(e) => setdisease(e.target.value)} type="text"/> 
            <span>Region</span>
            <input value={region} onChange={(e) => setregion(e.target.value)} type="text"/>
            <span>Province</span>
            <input value={province} onChange={(e) => setprovince(e.target.value)} type="text"/>
            </div>
            <button id="submitbutton" type="submit">Submit</button>
          </form>
        </div>
      )}
      </div>
    </>
  );
}
export default Admindash;
