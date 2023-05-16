import { Link } from 'react-router-dom';
import dashseller from '../Images/dashbbb.png';
   import logo from '../Images/logo.png'
   import React, { useEffect, useState } from 'react';
   import profileimg from '../Images/profilecircle.png'
   import logoutimg from '../Images/logoutimg.png'
   import Calenderr from '../Component/Calender.jsx';
   import"../Css/Dashboard_S.css";
   
   
   
   
   
   
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
    return( 
        <>
        
        <div className='dashbacksell' style={{backgroundImage : `url(${dashseller})`}}>
                
        </div>
        <div className="fullpagesell">
        <div className='headdsell'>
        <div className="leftdash">
        <Link to="/">
        <img src={logo} alt="logo" className="logo"/> {/* logo is linked to home page i.e when logo is clicked it return to home page */}
        </Link>
        <h1 id="topic">DASHBOARD</h1>
        </div>
        <div className='profileimg'>
                <img id="profileimg" alt="profileimg" src={profileimg}/> {/* setting background image */}
                <img id="logoutimg" alt="logoutimg" src={logoutimg}/>
        </div>
        </div>

        <div className="userdatasell">
            <div className="topppp">
                <h3 id="today">Today's Weather</h3>
            </div>
            <div className="tempp">
                <p id="tempo"> {mainTemp}°C</p>
                <img className="weathericon" src={`http://openweathermap.org/img/w/` +iconID+`.png`} height="70px" />
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
        <div className='addevent'>
             <div className='addeventtt'>
             <h id="heading_Add">Add Events</h>
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
        <div className="calender">
            <div className="cal">
            <Calenderr />
            </div>
        </div>
        <div className="citfrontsell">
            <h3 className="citf ">Weather Forecast</h3>
            <div className="dailyweat">
                <div className="dailyweat1">
                    <div className="dailyweat1a">
                    <h1>{dailytemp1} </h1>
                    <h3 id="tommo1">Tomorrow</h3>
                    </div>
                <img className="weathericon1" src={`http://openweathermap.org/img/w/` +dailyicon1+`.png`} height="70px" />
                </div>
                <div className="dailyweat2">
                    <div className="dailyweat2a">
                    <h1>{dailytemp2} </h1>
                    <h3 id="tommo2">{dateBuilder1(new Date())}</h3>
                    </div>
                <img className="weathericon2" src={`http://openweathermap.org/img/w/` +dailyicon2+`.png`} height="70px" />
                </div> 
                <div className="dailyweat3">
                    <div className="dailyweat3a">
                    <h1>{dailytemp3} </h1>
                    <h3 id="tommo3">{dateBuilder2(new Date())}</h3>
                    </div>
                <img className="weathericon3" src={`http://openweathermap.org/img/w/` +dailyicon3+`.png`} height="70px" />
                </div>
                </div>  
        </div>
        <div className="citbacksell">
        <h3 id="citb">Crops</h3>
        <div className="listcrop">
        <ul id="cropul">
           <li>Wheat</li>
           <li>Crop</li>
           <li>Other</li>
           <li>Other</li>
           <li>Other</li>
           <li>Other</li>
           
        </ul>
        </div>
        </div>
        <div className="sellinfo">
        <h3 id="selli">Seller Information </h3>
        <div className="listinfo">
        <ul id="sellul">
           <li>Name 9800000000</li>
           <li>Name 9800000000</li>
           <li>Name 9800000000</li>
           <li>Name 9800000000</li>
           <li>Name 9800000000</li>
           <li>Name 9800000000</li>
        </ul>
        </div>
        
        </div>


        </div>
        </>
    )
    }
export default Dashboard_S;