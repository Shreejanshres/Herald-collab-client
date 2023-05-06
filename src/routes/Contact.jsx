import React from 'react';
import Navbar from '../Component/Navbar';
import Registerimg from "../Images/Register.png";
import "../Css/ContactUs.css";
// import '@fortawesome/fontawesome-free/css/all.css';

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className='con'>
            <form id="reg">
                <div className='Contact'>
                    <h1 id='a'>Contact Us</h1>
                    <div id="card1">
                        <i className="fas fa-phone-alt fa-3x"></i>
                        <p>BY PHONE:</p>
                        <p>(Sunday to Friday, 10am to 4pm)</p>
                        <p></p>
                        <p>MANAGER:</p>
                        <p>+977-9876543210</p>
                    </div>
                    <div id="card2">
                        <i className="fas fa-envelope fa-3x"></i>
                        <p>BY EMAIL:</p>
                        <p>Send us your queries any time of the day.</p>
                        <p>EMAIL:</p>
                        <p>aims@gmail.com</p>
                    </div>
                </div>
            </form>
            </div>
            <div className='backg'>
                <img id="imgg" alt="registerimg" src={Registerimg} />
            </div>
        </>
    )
}

export default Contact;
