import React, { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar';
import"../Css/Datacss.css";
import dataimg from '../Images/dataimg.png';
import CropData from '../Component/CropData.jsx';


const API ="http://localhost:8000/crops-data/";
const Appdata = () =>{
    const [info, setData] = useState([])

const fetchData = async (url) =>{
  try{
    const res = await fetch(url);
    const data = await res.json();
    if(data.length>0){
      setData(data);
    }
    console.log(data);
  }catch (e){
     console.error(e)
  }
}



  useEffect(() => {
    fetchData(API);

  }, [])
    return(
        <>
        <div id="datapage">
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
            <CropData info={info} />
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