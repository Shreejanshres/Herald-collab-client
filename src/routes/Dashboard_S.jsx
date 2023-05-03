
import { Link } from 'react-router-dom';
import "../Css/Dashboard_S.css";
import Dashboard from "../Images/Dashboard.png";
import logo from '../Images/logo.png'
import React, { useEffect, useState } from 'react';
import {BiUserCircle} from 'react-icons/bi'
import {RxExit} from 'react-icons/rx'
import Calenderr from '../Component/Calender.jsx';





function Dashboard_S() {
    const [inputValue, setInputValue] = useState('');
    const [showCalendar, setShowCalendar] = useState(false);
    
    

  function handleDateClick() {
    setShowCalendar(!showCalendar);
  }

  function handleTimeClick() {
    console.log('Time button clicked');
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
 

  function handleEventSubmit() {
    console.log(`Event ${inputValue} submitted`);
  }
  
  
 
  

    
    const key = '0ddcb5f3f9e4652ea044a6f5657f6dbf';
    
    const [mainTemp,setMainTemp] = useState('');
    const [iconID,setIconID] = useState('');
    const [wind,setWind] = useState('');
    const [humidity,setHumidity] = useState('');
    const [pressure,setPressure] = useState('');
    const [dailytemp1,setDaily1] = useState('');
    const [dailytemp2,setDaily2] = useState('');
    const [dailytemp3,setDaily3] = useState('');
    const [dailyicon1,setIcon1] = useState('');
    const [dailyicon2,setIcon2] = useState('');
    const [dailyicon3,setIcon3] = useState('');
    useEffect(()=> {
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=27.7172&lon=85.3240&exclude=hourly,minutely&APPID=' +key+ '&units=metric')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            
            setMainTemp(Math.round(data.current.temp));
            setWind(data.current.wind_speed);
            setIconID(data.current.weather[0].icon);
            setHumidity(data.current.humidity);
            setPressure(data.current.pressure);
            setDaily1(data.daily[0].temp.day)
            setDaily2(data.daily[1].temp.day)
            setDaily3(data.daily[2].temp.day)
            setIcon1(data.daily[0].weather[0].icon)
            setIcon2(data.daily[1].weather[0].icon)
            setIcon3(data.daily[2].weather[0].icon)
        
          })
        },[])
    
        


        const dateBuilder = (d) => {
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();
        
            return `${day} (${month} ${date}, ${year})`
          }

          

          const dateBuilder1 = (d) => {
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
           
        
        
            let date1 = d.getDate()+1;
            let month1 = months[d.getMonth()];
            
        
            return `${month1} ${date1}`
          }
          const dateBuilder2 = (d) => {
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
            let date2 = d.getDate()+2;
            let month2 = months[d.getMonth()];
        
            return `${month2} ${date2}`
          }

          

            

          

    return (
    <>
          
    <div className='Background_d' style={{backgroundImage: `url(${Dashboard})`}}>
            <div id="top_d">
                <div id="headlogo">
                <img src={logo} alt="logo" className="logo"/>
                </div>
                <p id ="dashb">D A S H B O A R D</p>
                <div className="user_icon">
                    < BiUserCircle />
                </div>   
                <div className="exit_icon">
                    < RxExit />
                </div>
            </div>


            <div className="todaysweather">
                <div className="topi">
                    <h3 id="heading1">Today's Weather</h3>
                </div>
                <div className="temperature">
                    <p id="tempi"> {mainTemp}°C</p>
                    <img className="weathericon_S" src={`http://openweathermap.org/img/w/` +iconID+`.png`} height="70px" />
                </div>
                <div className="newdate">
                    {dateBuilder(new Date())}
                    <p></p>
                </div>
                <div className="otherdata_S">
                <p> {wind} m/s</p>
                <p> {humidity} %</p>
                <p> {pressure} hpa</p>
                </div>
            </div>

            <div className='addevent'>
                <div className='topii'>
                <h id="heading_A">Add Events</h>
                </div>
                <div id='typing'>
                <input
                        type="text"   
                        value={inputValue}
                        onChange={handleInputChange}      
                />

            </div>
                <div id='button_D'>
                <button onClick={handleDateClick}>Date</button>
                {showCalendar && (
                    <div style={{ position: 'absolute', zIndex: 9999 }}>
                <Calenderr
                
                onChange={(date) => console.log(date)}
                value={new Date()}
                
                />
                </div>
                )}
            </div>



                <div id='button_T'>
                <button onClick={handleTimeClick}>Time</button>
                </div>
                
                <div id='button_S'>
                <button onClick={handleEventSubmit}>Set event</button>
                </div>


            </div>

            







            <div className="calender_r">
                <div className="calll">
                    <Calenderr />
                 </div>
            </div>
            <div className="front_cit">
            <h3 className="f_cit ">Weather Forecast</h3>
            <div className="daily_wheat">
                <div className="daily_wheat1">
                    <div className="daily_wheat1a">
                    <h1>{dailytemp1} </h1>
                    <h3 id="tommoo_1">Tomorrow</h3>
                    </div>
                <img className="weather_icon1" src={`http://openweathermap.org/img/w/` +dailyicon1+`.png`} height="70px" />
                </div>
                <div className="daily_wheat2">
                    <div className="daily_wheat2a">
                    <h1>{dailytemp2} </h1>
                    <h3 id="tommoo_2">{dateBuilder1(new Date())}</h3>
                    </div>
                <img className="weather_icon2" src={`http://openweathermap.org/img/w/` +dailyicon2+`.png`} height="70px" />
                </div> 
                <div className="daily_wheat3">
                    <div className="daily_wheat3a">
                    <h1>{dailytemp3} </h1>
                    <h3 id="tommoo_3">{dateBuilder2(new Date())}</h3>
                    </div>
                <img className="weather_icon3" src={`http://openweathermap.org/img/w/` +dailyicon3+`.png`} height="70px" />
                </div>
                </div>  
        </div>
        <div className="back_cit">
        <h3 id="b_cit">Crops</h3>
        <div className="crop_list">
        <ul id="crop_li">
           <li>Wheat</li>
           <li>Wheat</li>
           <li>Wheat</li>
           <li>Wheat</li>
           <li>Wheat</li>
           <li>Wheat</li>
           
        </ul>
        </div>
        </div>
        <div className="sellinformation">
        <h3 id="seller">Farmer Information </h3>
        <div className="info_list">
        <ul id="sell_li">
            <li></li>
           <li>John Wick 9810045674</li>
           <li>John Wick 9810045674</li>
           <li>John Wick 9810045674</li>
           <li>John Wick 9810045674</li>
           <li>John Wick 9810045674</li>
           
        </ul>
        </div>
        
        </div>

    </div>
          
    </>
    )
  }

  
  export default Dashboard_S;
  