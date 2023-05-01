import React, { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar';
import"../Css/Datacss.css";
import dataimg from '../Images/dataimg.png';
import CropData from '../Component/CropData.jsx';

const API ="http://localhost:8000/crops-data/"; /* storing the api link in a keyword */
const Appdata = () =>{
    const [info, setData] = useState([]) /* a function AppData that initializes info where data is stored from API */

const fetchData = async (url) =>{
  try{
    const res = await fetch(url);
    const data = await res.json();
    if(data.length>0){
      setData(data);     /* data is fetched from url and stored in data */
    }
    console.log(data);
  }catch (e){
     console.error(e)  /* displays error message when error occurs */
  }
}
  useEffect(() => {
    fetchData(API);
  }, [])  /* fetchdata function is called along with API */
    return(
        <>
        <div className="datapage">
        <Navbar/>
        <table id='datatable'>
          <thead>
            <tr>
            <th>Crop Name</th>
            <th>Region</th>
            <th>Temperature</th>
            <th>Climate</th>
            <th>Soil Quantity</th>
            <th>Rain Amount</th>
            <th>Diseases</th>
            <th>Nutrients</th>
            <th>Fertilizers</th>
            <th>Pesticides</th>
            </tr> 
          </thead>
          <tbody>
            <CropData info={info} /> {/* data imported from CropData File */}
          </tbody>
        </table>
        </div> 
        <div className="backgrd">
        <img alt="dataimg" src={dataimg}/>
        </div>
        </>
    )
}
export default Appdata;