import "../Css/Dashboardfarmer.css";
import dashbbb from "../Images/dashbbb.png";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import profileimg from "../Images/profilecircle.png";
import logoutimg from "../Images/logoutimg.png";
import React, { useEffect, useState } from "react";
import Calenderr from "../Component/Calender.jsx";
// import Cropsdata from "../Component/Cropsdata.jsx";

function WeatherFetch() {
  const key = "0ddcb5f3f9e4652ea044a6f5657f6dbf";

  const [mainTemp, setMainTemp] = useState("");
  const [iconID, setIconID] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [pressure, setPressure] = useState("");
  const [dailytemp1, setDaily1] = useState("");
  const [dailytemp2, setDaily2] = useState("");
  const [dailytemp3, setDaily3] = useState("");
  const [dailyicon1, setIcon1] = useState("");
  const [dailyicon2, setIcon2] = useState("");
  const [dailyicon3, setIcon3] = useState("");

  const [listData, setListData] = useState([]);

  const [listCrops, setListCrops] = useState([]);
  const [listEvent, setListEvent] = useState([]);
  const [listnews, setListNews] = useState([]);
  const userData = JSON.parse(localStorage.getItem("user"));
  const location = userData.address;
  const id = userData.id;
  const logout = () =>{
    localStorage.clear();
    window.location.href = "/";
  };
  const [Crop, setCrop] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const showDetail=(id)=>{
    console.log(id);
    fetch("http://127.0.0.1:8000/crops-data/"+id+"/")
    .then((response) => response.json())
    .then((data) => {setCrop(data);
      setShowPopup(true);
      console.log(data);})

  }
  const closePopup = () => {
    setShowPopup(false); // set showPopup to false when the close button is clicked
  };
  useEffect(() => {
    console.log(userData);
    function weather() {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          location +
          "&APPID=" +
          key +
          "&units=metric"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          setMainTemp(Math.round(data.main.temp));
          setWind(data.wind.speed);
          setIconID(data.weather[0].icon);
          setHumidity(data.main.humidity);
          setPressure(data.main.pressure);
        });
    }
    weather();
    function news() {
      fetch("https://newsapi.org/v2/everything?q=agriculture&language=en&apiKey=6fbf009824a5436493eedef532315ba6"
      )
        .then((res) => res.json())
        .then((data) => {
          setListNews(data.articles);
        });
    }
    news();
    function display_seller() {
      fetch("http://127.0.0.1:8000/seller-data/")
        .then((response) => response.json())
        .then((data) => {
          setListData(data);
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
    function display_event() {
      fetch("http://127.0.0.1:8000/event/")
        .then((response) => response.json())
        .then((data) => {
          setListEvent(data);
        });
    }

    display_event();
    display_crops();
    display_seller();
  }, []);
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} (${month} ${date}, ${year})`;
  };
  return (
    <>
      <div
        class="backlogfarm"
        style={{ backgroundImage: `url(${dashbbb})` }}
      ></div>
      <div class="fullpage">
        <div class="headd">
          <div class="leftdash">
            <Link to="/">
              <img src={logo} alt="logo" class="logodash" />
            </Link>
            <h1 id="topicfarm">DASHBOARD</h1>
          </div>
          <div class="profileimgfarm">
            {/* <img id="profileimg" alt="profileimg" src={profileimg} />{" "} */}
            {/* setting background image */}
            <a href="#" onClick={logout} >
            <img id="logoutimg" alt="logoutimg" src={logoutimg} />
            </a>
          </div>
        </div>

        <div class="userdata">
          <div class="toppppfarm">
            <h3 id="todayfarm">Today's Weather</h3>
          </div>
          <div class="tempp">
            <p id="tempo"> {mainTemp}°C</p>
            <img
              class="weathericon"
              src={`http://openweathermap.org/img/w/` + iconID + `.png`}
              height="70px"
            />
          </div>
          <div class="dateif">
            {dateBuilder(new Date())}
            <p></p>
          </div>
          <div class="otherdata">
            <p> {wind} m/s</p>
            <p> {humidity} %</p>
            <p> {pressure} hpa</p>
          </div>
        </div>
        <div class="events-show">
          <h3 id="eventfarm">Current Events</h3>
          <div class="events">
            {listEvent.map((item) => (
              <div key={item.id} class="event">
                <div class="datetime">
                  <span id="eventdate">{item.eventdate} </span>
                  <span id="eventtime">{item.eventtime}</span>
                </div>
                <div class="eventdesc">
                  <span id="eventname">{item.eventname}</span>
                  <span id="desc">{item.eventdescription}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class="calenderfarm">
          <div class="calfarm">
            <Calenderr />
          </div>
        </div>
        <div class="citfrontfarm">
          <h3 class="citffarm ">News</h3>
          <div class="dailyweatfarm">
            {listnews.map((item) => (
              <div key={item.id} class="News">
                <a href={item.url} class="newsdetail" target="_blank">
                <span id="title">{item.title}</span>
                <span id="newsdesc">{item.description}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div class="cropsdata">
          <div id="cropstop">
            <h3 id="citb">Crops</h3>
          </div>
          <div class="listcrop">
          {listCrops.map((item) => (
              <div key={item.id} class="crops" onClick={(e) => showDetail(item.id)} >
                <li>{item.name}</li>
              </div>
            ))}
          </div>
        </div>
        
        <div class="sellinfo">
          <h3 id="selli">Seller Information </h3>
          <div class="listinfo">
              {listData.map((item) => (
                <div key={item.id} class="dataseller">
                  <span id="sellername">{item.email} </span>
                  <span id="sellerphone">{item.phone}</span>
                </div>
              ))}
          </div>
        </div>
        {showPopup && (
        <div class="popup">
            <h2>Crop Details</h2>
          <div class="popup-content">
            <span>Name:</span>
            <span>{Crop.name}</span>
            <span>Climate:</span>
            <span>{Crop.climate}</span>
            <span>Temperature:</span>
            <span>{Crop.temperature}</span>
            <span>Soil:</span>
            <span>{Crop.soil}</span>
            <span>Rain:</span>
            <span>{Crop.rain}</span>
            <span>Nutrient:</span>
            <span>{Crop.nutrient}</span>
            <span>Disease:</span>
            <span>{Crop.disease}</span>
          </div>
          <button id="closebutton" onClick={closePopup}>Close</button>
        </div>
      )}
      </div>
    </>
  );
}
export default WeatherFetch;
