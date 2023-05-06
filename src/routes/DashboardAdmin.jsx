import"../Css/Dashbadmin.css";
import dashbbb from '../Images/dashbbb.png';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import profileimg from '../Images/profilecircle.png'
import logoutimg from '../Images/logoutimg.png'
import { useEffect, useState } from 'react';



function Admindash() {
    const [listKyc,setKyc]=useState([]);
    const [listData, setListData] = useState([]);
    const [listfarmer, setListfarmer] = useState([]);


   useEffect(() => {
    function display_seller() {
        fetch("http://127.0.0.1:8000/seller-data/")
          .then((response) => response.json())
          .then((data) => {
            setListData(data);
            console.log(listData);
          })
          .catch((error) => console.log(error));
        }
        function display_kyc() {
            fetch("http://127.0.0.1:8000/displaykyc/")
            .then((response) => response.json())
            .then((data) => {
              setKyc(data);
              console.log(listKyc);
            })
            .catch((error) => console.log(error));
          }
          function display_farmer() {
            fetch("http://127.0.0.1:8000/farmer-data/")
              .then((response) => response.json())
              .then((data) => {
                setListfarmer(data);
                console.log(listfarmer);
              })
              .catch((error) => console.log(error));
          }
      
        display_farmer();
        display_seller();
        display_kyc();
    
       
   },[]);

  
    return( 
        <>
        <div className="fullpage1">
        <div className='headd1'>
        <div className="leftdash1">
        <Link to="/">
        <img src={logo} alt="logo" className="logo1"/> {/* logo is linked to home page i.e when logo is clicked it return to home page */}
        </Link>
        <h1 id="topic1">DASHBOARD</h1>
        </div>
        <div className='profileimg1'>
                <img id="profileimg1" alt="profileimg" src={profileimg}/> {/* setting background image */}
                <img id="logoutimg1" alt="logoutimg" src={logoutimg}/>
        </div>
        </div>

        <div className="userdata1">
            <div className="topppp1">
                <h3 id="today1">Farmers</h3>
            </div>
            <div className="farmerlist">
                    <uL id="farmlisting">
                    {listfarmer.map((item) => (
                        <li key={item.id}>
                        {item.name} {item.phone}
                        </li>
                    ))}
                    </uL>
                
            </div>
            
        </div>
        <div className="photo1">
            <h3 id="event1">KYC Verification</h3>
            <div className="kycc1">
                <div className="kycc1info">
                {listKyc.map((item) => (
                        <li key={item.id}>
                        {item.name} {item.profileimg}
                        </li>
                    ))}
                    {/* <div id="buttonskyc">
                    <button id="appro1">Approve</button> <button id="declo1">Decline</button>
                    </div> */}
                </div>
            </div>
        </div>
        <div className="citfront1">
            <div className="citffrontt1a">
                <h3 className="citf1">Sellers</h3>
            </div>
            <div className="Selllist">
            <uL id="Sellisting">
                    {listData.map((item) => (
                        <li key={item.id}>
                        {item.name} {item.phone}
                        </li>
                    ))}
                    </uL>

            </div>  
        </div>
        <div className="citback1">
        <h3 id="citb1">Issues</h3>
        <div className="listissue">
                <div className="iss1">
                   <uL id="isslist">
                        <li id="isa1">The logout button is not working properly. <button id="solved1">Solved</button> <button id="false1">False Issue</button></li>
                        <li id="isa2">The logout button is not working properly. <button id="solved1">Solved</button> <button id="false1">False Issue</button></li>
                        <li id="isa3">The logout button is not working properly.  <button id="solved1">Solved</button> <button id="false1">False Issue</button></li>
                        <li id="isa4">The logout button is not working properly. <button id="solved1">Solved</button> <button id="false1">False Issue</button></li>
                        <li id="isa5">The logout button is not working properly. <button id="solved1">Solved</button> <button id="false1">False Issue</button></li>
                    </uL>

            </div>  
            
        
        </div>
        </div>
        <div className="sellinfo1">
        <div id="cropy">
        <h3 id="selli1">Crops </h3>
        <button id="addcrop2"> Add Crops</button>
        </div>
        <div className="listinfo1">
        <uL id="sellul1">
                        <li id="ca1">Wheat<button id="edits">Edit</button> <button id="deletes">Delete</button></li>
                        <li id="ca1">Wheat<button id="edits">Edit</button> <button id="deletes">Delete</button></li>
                        <li id="ca1">Wheat<button id="edits">Edit</button> <button id="deletes">Delete</button></li>
                        <li id="ca1">Wheat<button id="edits">Edit</button> <button id="deletes">Delete</button></li>
                        <li id="ca1">Wheat<button id="edits">Edit</button> <button id="deletes">Delete</button></li>
                        <li id="ca1">Wheat<button id="edits">Edit</button> <button id="deletes">Delete</button></li>
                        <li id="ca1">Wheat<button id="edits">Edit</button> <button id="deletes">Delete</button></li>
                        <li id="ca1">Wheat<button id="edits">Edit</button> <button id="deletes">Delete</button></li>
                        <li id="ca1">Wheat<button id="edits">Edit</button> <button id="deletes">Delete</button></li>
                        <li id="ca1">Wheat<button id="edits">Edit</button> <button id="deletes">Delete</button></li>
        </uL>
        </div>
        
        </div>

        <div className='dashback'>
                <img id="dashbimgg" alt="dashbimg" src={dashbbb}/>
        </div>

        </div>
        </>
    )
    }
export default Admindash;