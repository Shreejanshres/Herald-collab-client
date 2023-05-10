import React,{useState} from 'react';
import"../Css/Confirmpw.css";
import Loginimg from '../Images/Loginimg.png';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';

const Forgotpw=()=>{
    const [newpass,setNewpass] =useState('');
    const [newconfirmpass,setNewpasscon] = useState('');
    const email=sessionStorage.getItem("email");
    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(newpass);
        console.log(newconfirmpass);
        if(newpass===newconfirmpass){
            try {
                const response = await fetch("http://127.0.0.1:8000/update/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({newpass,email}),
                });
                const data = await response.json();
                console.log(data);
                if (data.success) {
                sessionStorage.removeItem("otp");
                sessionStorage.removeItem("email");
                window.location.href = "/";
                }
            } catch (err) {
                console.log(err);
            }
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
            <a id='forgotconfirm'>Password Confirmation</a>

            <div className='middcon'>
            <form onSubmit={handleSubmit}>
                    <label id="fnewpass" htmlFor="newPassword">Enter New Password</label>
                    <input value={newpass} onChange={(e) => setNewpass(e.target.value)} type="password" placeholder="*********" id="connewpass" name="newpass"/>
                    <label id="newpassword" htmlFor="confirmPassword">Confirm Password</label>
                    <input value={newconfirmpass} onChange={(e) => setNewpasscon(e.target.value)} type="password" placeholder="*********" id="connewpass2" name="newconpass"/>
                    <button id="buttonconf">Submit</button>
            </form>
            </div>
            
        </div>
        
        </>
    )
}

export default Forgotpw;