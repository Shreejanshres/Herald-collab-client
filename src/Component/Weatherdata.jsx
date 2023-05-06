import React,{useState, useEffect} from "react";

function WeatherFetch() {
    const key = '0ddcb5f3f9e4652ea044a6f5657f6dbf';
    const [rain,setRain] = useState('');
    const [mainTemp,setMainTemp] = useState('');
    const [main,setMain] = useState('');
    const [iconID,setIconID] = useState('');
    const [wind,setWind] = useState('');
    const [humidity,setHumidity] = useState('');
    const [pressure,setPressure] = useState('');

    useEffect(()=> {
fetch('https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&APPID=' +key+ '&units=metric')
.then(res=>res.json())
.then(data=>{
    console.log(data);
    setRain(data.rain);
    setMainTemp(data.main.temp);
    setMain(data.weather[0].main);
    setIconID(data.weather[0].icon);
    setWind(data.wind);
    setHumidity(data.main.humidity);
    setPressure(data.main.pressure);
  })
},[])
return (
    <>
    <h1></h1>
    </>
)
}
export default WeatherFetch;