import "../Css/Dashb.css";
import dashbbb from "../Images/dashbbb.png";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import profileimg from "../Images/profilecircle.png";
import logoutimg from "../Images/logoutimg.png";
import React, { useEffect, useState } from "react";
import Calenderr from "../Component/Calender.jsx";

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
  const [listimage,setListImage]=useState([]);
  const [listEvent,setListEvent]=useState([]);
  const userData = JSON.parse(localStorage.getItem("user"));
  const location = userData.address;
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  useEffect(() => {
    console.log(userData)
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
      fetch("http://127.0.0.1:8000/seller-data/")
        .then((response) => response.json())
        .then((data) => {
          setListData(data);
          console.log(listData);
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
    function display_event(){
      fetch()
      .then((response)=> response.json())
      .then((data)=>{
        setListEvent(data);
        console.log(listEvent);
      })
    }
    display_event();

    display_crops();
    display_seller();
  }, [userData.id]);

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
  const dateBuilder1 = (d) => {
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

    let date1 = d.getDate() + 1;
    let month1 = months[d.getMonth()];

    return `${month1} ${date1}`;
  };
  const dateBuilder2 = (d) => {
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

    let date2 = d.getDate() + 2;
    let month2 = months[d.getMonth()];

    return `${month2} ${date2}`;
  };
  return (
    <>
      <div className="fullpage">
        <div className="headd">
          <div className="leftdash">
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />{" "}
              {/* logo is linked to home page i.e when logo is clicked it return to home page */}
            </Link>
            <h1 id="topic">DASHBOARD</h1>
          </div>
          <div className="profileimg">
            <img id="profileimg" alt="profileimg" src={profileimg} />

            <a onClick={logout}>
              {" "}
              <img id="logoutimg" alt="logoutimg" src={logoutimg} />
            </a>
          </div>
        </div>

        <div className="userdata">
          <div className="topppp">
            <h3 id="today">Today's Weather</h3>
          </div>
          <div className="tempp">
            <p id="tempo"> {mainTemp}°C</p>
            <img
              className="weathericon"
              src={`http://openweathermap.org/img/w/` + iconID + `.png`}
              height="70px"
            />
          </div>
          <div className="datei">
            {dateBuilder(new Date())}
            <p></p>
          </div>
          <div className="otherdata">
            <p> {wind} m/s</p>
            <p> {humidity} %</p>
            <p> {pressure} hpa</p>
          </div>
        </div>
        <div className="photo">
          <h3 id="event">Current Events</h3>
          <div id="conti">
            <div id="contia">
              <h3 id="tim1">10</h3>
              <p id="min1">minutes ago</p>
              <h3 id="tim2">30</h3>
              <p id="min2">minutes ago</p>
            </div>
            <div id="contii">
              <p>John scheduled an event for 30th april at 1 PM</p>
              <p>Jack scheduled an event for 29th april at 8 AM</p>
            </div>
          </div>
        </div>
        <div className="calender">
          <div className="cal">
            <Calenderr />
          </div>
        </div>
        {/* <div className="citfront">
          <h3 className="citf ">Weather Forecast</h3>
          <div className="dailyweat">
            <div className="dailyweat1">
              <div className="dailyweat1a">
                <h1>{dailytemp1} </h1>
                <h3 id="tommo1">Tomorrow</h3>
              </div>
              <img
                className="weathericon1"
                src={`http://openweathermap.org/img/w/` + dailyicon1 + `.png`}
                height="70px"
              />
            </div>
            <div className="dailyweat2">
              <div className="dailyweat2a">
                <h1>{dailytemp2} </h1>
                <h3 id="tommo2">{dateBuilder1(new Date())}</h3>
              </div>
              <img
                className="weathericon2"
                src={`http://openweathermap.org/img/w/` + dailyicon2 + `.png`}
                height="70px"
              />
            </div>
            <div className="dailyweat3">
              <div className="dailyweat3a">
                <h1>{dailytemp3} </h1>
                <h3 id="tommo3">{dateBuilder2(new Date())}</h3>
              </div>
              <img
                className="weathericon3"
                src={`http://openweathermap.org/img/w/` + dailyicon3 + `.png`}
                height="70px"
              />
            </div>
          </div>
        </div> */}
        <div className="citback">
          <h3 id="citb">Crops</h3>
          <div className="listcrop">
            <ul id="cropul">
              {listCrops.map((item) => (
                <li>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="sellinfo">
          <h3 id="selli">Seller Information </h3>
          <div className="listinfo">
            <ul id="sellul">
              {listData.map((item) => (
                <li key={item.id}>
                  {item.name} {item.phone}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* <div className="dashback">
          <img id="dashbimgg" alt="dashbimg" src={dashbbb} />
        </div> */}
      </div>
    </>
  );
}
export default WeatherFetch;
