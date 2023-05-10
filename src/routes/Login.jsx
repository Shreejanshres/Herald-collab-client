import React,{useState} from 'react';
import"../Css/Logincss.css";
import Loginimg from '../Images/Loginimg.png';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';


const Login=()=>{
    const [email,setEmail] =useState('');  /* email and pass is passed so that it stores email and password */
    const [pass,setPass] =useState('');

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, pass }),
      });
      console.log(response);
      if(response.ok){
        const data = await response.json();
        console.log(data);
              if (data.type == "farmer") {
                if (data.verified) {
                localStorage.setItem("user", JSON.stringify(data));
                window.location.href = "/farmer";
                } else {
                  alert("Please verify your email first");
                }
              } 
              else if (data.type == "seller") {
                localStorage.setItem("user", JSON.stringify(data));
                window.location.href = "/seller";
              }
              else if (data.type == "admin") {
                window.location.href = "/admin";
              }
          }
          
      }  
    catch (error) {
      console.log(error);
    }
  };

    return(
        <>
         <div className='backlog' style={{backgroundImage: `url(${Loginimg})`}}>
                
        </div>
        <div className="loginpage">
        <div className='hadd'>
        <Link to="/">
        <img src={logo} alt="logo" className="logolog"/> {/*logo is linked to home page i.e when logo is clicked it return to home page  */}
        </Link>
            <div className='top'>
                <a id='noacc'>Don't have an account?</a>
                <Link to="/register">
                    <button id="button1sign">Sign Up</button> {/* When buuton clicked it moves to signup page */}
                </Link>
            </div>
            </div>
            <div className='wel'>
            <a id='welcome'>Welcome</a>
            </div>


        <form id="loges"onSubmit={handleSubmit}> {/* a form is created where email and password is entered by user and stored */}
                        <label id="email" htmlFor="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/> 
                        <label id="password" htmlFor="password">Password</label>
                        <input value={pass} required onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password"/>
                        <button id="button2" type='submit'>Log in</button> 
                    </form>
                    <div className='forpw'>
                    <a>Forgot Password? </a>
                        <Link to="/forgotpw">
                            <a id="reset" >Reset</a>   {/* When buuton clicked it moves to Forgot Password page */}
                        </Link>
                    </div>
                    
        </div>

        
            
        
        </>
    )
}
export default Login;