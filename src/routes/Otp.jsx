import React,{useState} from 'react';
import"../Css/Verifyotp.css";
import Loginimg from '../Images/Loginimg.png';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';

const Forgotpw=()=>{
    const [otp,setOtp] =useState('');
    const data=sessionStorage.getItem("otp");
    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(otp===data){
            
            window.location.href="/changepassword";
        }
        else{
            alert("OTP is wrong");
        }
    }
    return(
        <>
         <div className='backlog' style={{backgroundImage: `url(${Loginimg})`}}></div>
        
        <div className="otpverify">
        <div className='headotp'>
        <Link to="/">
        <img src={logo} alt="logo" className="logootp"/>
        </Link>
            <div className='topppw'>
                <a id="accpw">Don't have an account?</a>
                <Link to="/register">
                    <button id="button1pw">Sign Up</button>
                </Link>
            </div>
        </div>  
            <a id='forgototp'>OTP Verification</a>

            <div className='midd'>
            <form onSubmit={handleSubmit}>
                    <label id="fotp" htmlFor="email">A OTP has been sent to your Email.</label>
                    <input value={otp} onChange={(e) => setOtp(e.target.value)} type="text" placeholder="Enter the OTP here" id="otppp" name="otp"/>
                    <br></br><button id="button5">Submit</button>
            </form>
            </div>
            
        </div>
        
        </>
    )
}

export default Forgotpw;