import "../Css/Dashboardseller.css";
import dashbbb from "../Images/dashbbb.png";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import profileimg from "../Images/profilecircle.png";
import logoutimg from "../Images/logoutimg.png";
import React, { useEffect, useState } from "react";
import Calenderr from "../Component/Calender.jsx";

function Sellerdashboard() {
  const key = "0ddcb5f3f9e4652ea044a6f5657f6dbf";

  const [mainTemp, setMainTemp] = useState("");
  const [iconID, setIconID] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [pressure, setPressure] = useState("");

  const [listData, setListData] = useState([]);

  const [listCrops, setListCrops] = useState([]);
  const [listEvent, setListEvent] = useState([]);
  const userData = JSON.parse(localStorage.getItem("user"));
  const location = userData.address;
  const id = userData.id;
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
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

    function display_seller() {
      fetch("http://127.0.0.1:8000/farmer-data/")
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
  const [eventname, setEventname] = useState("");
  const [eventdesc, setEventdesc] = useState("");
  const [eventdate, setEventdate] = useState("");
  const [eventtime, setEventtime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(eventname, eventdesc, eventdate, eventtime);
    try {
      const response = await fetch("http://127.0.0.1:8000/addevent/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ eventname, eventdesc, eventdate, eventtime }),
      });
    } catch (error) {
      console.log(error);
    }
  };
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
      <div class="fullpagefarm">
        <div class="headd">
          <div class="leftdash">
            <Link to="/">
              <img src={logo} alt="logo" class="logodash" />{" "}
              {/* logo is linked to home page i.e when logo is clicked it return to home page */}
            </Link>
            <h1 id="topicfarm">DASHBOARD</h1>
          </div>
          <div class="profileimgfarm">
            {/* <img id="profileimg" alt="profileimg" src={profileimg} />{" "} */}
            {/* setting background image */}
            <a href="#" onClick={logout}>
            <img id="logoutimg" alt="logoutimg" src={logoutimg} /></a>
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
        <div class="calenderfarm">
          <div class="calfarm">
            <Calenderr />
          </div>
        </div>
        <div class="citback">
          <div id="cropstop">
            <h3 id="citb">Crops</h3>
          </div>
          <div class="listcrop">
            {listCrops.map((item) => (
              <div key={item.id} class="crops">
                <li>{item.name}</li>
              </div>
            ))}
          </div>
        </div>

        <div class="sellinfo">
          <h3 id="selli">Farmer Information </h3>
          <div class="listinfo">
            <ul id="sellul">
              {listData.map((item) => (
                <li key={item.id} id="try">
                  <span>{item.name} </span>
                  <span>{item.phone}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div class="photofarm">
          <h3 id="eventfarm">Add Events</h3>
          <form onSubmit={handleSubmit} class="addevent">
            <label>Event Name</label>
            <input
              type="text"
              name="eventname"
              id="textbox"
              placeholder="Enter Event Name"
              value={eventname}
              onChange={(e) => setEventname(e.target.value)}
            />
            <br></br>
            <label>Event Description</label>
            <textarea
              type="description"
              name="eventdesc"
              placeholder="Enter Event Description"
              id="textbox"
              value={eventdesc}
              onChange={(e) => setEventdesc(e.target.value)}
            />
            <br></br>
            <label>Event Date</label>
            <br></br>
            <input
              type="date"
              name="eventdate"
              id="textbox"
              value={eventdate}
              onChange={(e) => setEventdate(e.target.value)}
            />
            <br></br>
            <label>Event Time</label>
            <br></br>
            <input
              type="time"
              name="eventtime"
              id="textbox"
              value={eventtime}
              onChange={(e) => setEventtime(e.target.value)}
            />
            <br></br>
            <button type="submit" id="addeventbtn">
              Add Event
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Sellerdashboard;
