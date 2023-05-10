import Navbar from '../Component/Navbar';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import "../Css/About.css";
import Loginimg from '../Images/Loginimg.png';

const About = () => {
  return (
    <> 
    <div className='backlogadmin' style={{backgroundImage: `url(${Loginimg})`}}>   
                </div>
      <Navbar/>
     
      <div className='wrapperz'>
      <h1 id='headrpur'>About Us</h1>
        <form id='regiipur'>
          
          <h3 id='puu'>Purpose</h3>
          <p id='par1'>Introducing our new Agriculture Information Management System, which is designed to help farmers and other stakeholders in the agricultural industry intending the productivity and efficiency. In this app user can access a range of features, including real-time weather updates. Our target audience is farmer and agriculture professionals who are looking for easy to use application to helps them manage their crops and increase their yields. Our application also provide insurance facility to the user by which they can select the trusted company and make insurance. Also user can select its buyer and seller to trade their crops achieving the maximum profit. Our other features includes range of resource such as crops details which includes the region the crops are available at, proper environment required for the growth of the crops and fertilizer and pesticides used for the crops farming. We will continue to gather feedbacks from the user and to ensure we are meeting the needs of our target audience.</p>
        </form>

        
        <card id='cardpu'>
          <h3 id='puuu1'>Who are we</h3>
          <p id='par2'> Meet the talented mind behind “Agriculture Information Management System”. We are the team of five members dedicated to provide user a friendly app providing the necessary information and to help them manage their crops and increase their yields. We are passionate about what we do and are committed to providing the best possible experience for our customer. If you have any question or would like to learn more about our service please don’t hesitate to contact us.</p>
        </card>
        

        
      </div>
    </>
  )
}

export default About;
