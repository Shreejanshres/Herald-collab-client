import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import "../Css/kyc.css";
import Registerimg from "../Images/Register.png";
import logo from '../Images/logo.png'



export const Kyc  = () =>{
    const [name,setName] =useState('');
    const [farmaddress,setAddress] =useState('');
    const [perlocation,setPLocation]= useState('');
    const [phone,setPhone] =useState('');
    const [gender,setgender]=useState('');
    const [dob,setdob]=useState('');
    const [proimg,setProimg]=useState('');
    const [landimg,setLandimg]=useState('');
    const [citifront,setCitifront]=useState('');
    const [citiback,setCitiback]=useState('');

    const handleSubmit=(e) => {
        e.preventDefault();
        console.log(name);
    }

    return (
        
        <>
        <div className='register_r' style={{backgroundImage: `url(${Registerimg})`}}>
         
        <div id="Nav_k">
        <Link to="/">
        <img src={logo} alt="logo" className="logoe"/> {/*logo is linked to home page i.e when logo is clicked it return to home page  */}
        </Link>
        </div>
       
        
    
        <form id="regisz" onSubmit ={handleSubmit}>
        <a id ="tail">KYC Form</a>
        
            <label htmlFor="name" id='la_k'>Full Name:</label>
            <input value={name} type="text"name="name"  id = "name"  onChange={(e) => setName(e.target.value)} />
            <label htmlFor="phone" id='la_k1'>Phone Number:</label>
            <input value={phone} type="tel" name="phone"  onChange={(e) => setPhone(e.target.value)}/>
           
           
            <label htmlFor="address" id='la_k2'>Farm Location:</label>
            <input value={farmaddress} type="text" name="FarmLocation" placeholder=""  onChange={(e) => setAddress(e.target.value)}/>
            
            <label htmlFor="address" id='la_k3'>Permanent Location:</label>
            <input value={perlocation} type="text" name="PermanentLocation" placeholder=""  onChange={(e) => setPLocation(e.target.value)}/>
            
            <label htmlFor="user" id='la_k4'>Gender:</label> 
            <select name={gender} id="user"  onChange={(e) => setgender(e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
            </select>


            
             
            <label htmlFor="dob" id='la_k5'>Date of Birth:</label>
           <input type="date" id="dob" name="dob" value={dob}  onChange={(e) => setdob(e.target.value)}/>
          <div className='yourpicture'>
            <label htmlFor="yourpicture" >Your Picture:</label>
            <input value={proimg} id="yourpicture-label" type="file" name="yourpicture" accept="image/*" title="Upload"  onChange={(e) => setProimg(e.target.value)}/>
          </div>


          <div className='landOwnership'>
            <label htmlFor="landOwnership" >Land Ownership:</label>
            <input value={landimg} id="pic2" type="file" name="landOwnership" accept="image/*" title="Upload"  onChange={(e) => setLandimg(e.target.value)}/>
          </div>

          <div className='citizenship'>
            <label htmlFor="citizenship" >Citizenship Proof:</label>
            <input value={citifront} id="pic3" type="file" name="citizenship" accept="image/*" title='Front' onChange={(e) => setCitifront(e.target.value)}/>
            
          </div>
          <div className='citbackt'>
          <input value={citiback} id="pic4"type="file" name="citizenship" accept="image/*" title='Back'  onChange={(e) => setCitiback(e.target.value)}/>
          </div>


          
          
        
        </form>
        <div className='subbutton'>
        <button id="button_k" type='submit'>Submit</button>
        </div>
        </div>
        

        
        
           
        </>
    )
}
export default Kyc;