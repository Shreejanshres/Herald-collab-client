import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import "../Css/kyc.css";
import Registerimg from "../Images/Register.png";
import logo from '../Images/logo.png'



export const Kyc  = () =>{
    const [name,setName] =useState('');
    const [address,setAddress] =useState('');

    const [phone,setPhone] =useState('');
    const [gender,setgender]=useState('');
    const [dob,setdob]=useState('');

    const handleSubmit=(e) => {
        e.preventDefault();
        console.log(name);
    }

    return (
        
        <>
         
        <div id="Nav">
                <img src={logo} alt="logo" className="logo"/>
        </div>
       
        
    
        <form id="reggg" onSubmit ={handleSubmit}>
        <a id ="head">KYC Form</a>
        <div className='top'>
                <Link to="/Dashboard">
                    <button id="button1">X</button>
                </Link>
        
        
        
            </div>
            <label htmlFor="name" id='la'>Full Name</label>
            <input value={name} name="name"  id = "name" />
            <label htmlFor="phone" id='la1'>Phone Number</label>
            <input value={phone} type='number' name="phone" />
           
           
            <label htmlFor="address" id='la2'>Farm Location</label>
            <input value={address} type='address' name="FarmLocation" placeholder=""/>
            
            <label htmlFor="address" id='la3'>Permanent Location</label>
            <input value={address} type='paddress' name="PermanentLocation" placeholder=""/>
            
            <label htmlFor="user" id='la4'>Gender</label> 
            <select className={gender} id="user">
                <option value="farmer">Male</option>
                <option value="seller">Female</option>
                <option value="seller">Others</option>
            </select>


            
             
            <label htmlFor="dob" id='la5'>Date of Birth</label>
           <input
           type="date"
          id="dob"
            name="dob"
            value={dob}
        
        
          />
          <div className='yourpicture'>
            <label htmlFor="yourpicture" id="yourpicture-label">Your Picture:</label>
            <input type="file" name="yourpicture" accept="image/*" title="Upload"/>
          </div>

          <div className='landOwnership'>
            <label htmlFor="landOwnership" id="pic2">Land Ownership:</label>
            <input type="file" name="landOwnership" accept="image/*" title='Upload'/>
          </div>

          <div className='citizenship'>
            <label htmlFor="citizenship" id="pic3">Citizenship Proof:</label>
            <input type="file" name="citizenship" accept="image/*" title='Front'/>
            <input type="file" name="citizenship" accept="image/*" title='Back'/>
          </div>


          <button id="butto" type='submit'>Submit</button>
          
        
        </form>
        

        
        
        <div className='backg'>
                <img id="imgg" alt="registerimg" src={Registerimg}/>
        </div>    
        </>
    )
}
export default Kyc;