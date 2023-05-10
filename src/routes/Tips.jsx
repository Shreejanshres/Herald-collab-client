import React, { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar';
import"../Css/Tips.css";
import dataimg from '../Images/dataimg.png';

function Appdata(){
    return(
        <>
        <div class="datapage">
        <Navbar/>
        <div class="Content">
        <h1>Tips for farming</h1>
        <div class="sub-content">
        <div class="sub-content1">
        <h6>1. Choose your crop</h6>
        <p>Select a proper crop that is right for you according to the land yor are farming. Also the climate, market demand, sale potential of crops, your budget available must be considered beforehand.</p>
        <h6>2. Preparation of field</h6>
        <p> Check your land either it is in a right state before planting? Any evidence of disease from previously cultivated crops? Any measure steps to be taken to prepare your land for a new crop?</p>
        <h6>3. Fertilize first</h6>
        <p>Choose correct fertilizer to bring land back to its normal state of fertility. This will vary according to the crops cultivated previously.</p>
        <h6>4. Irrigation Design</h6>
        <p>Effiecient irrigation practices rely on effective field design. Research how best to lay out and design your fields in order to irrigate effectively.</p>
        <h6>5. Seed Selection</h6>
        <p>When selecting and arranging the purchase of the seed fro your choosen crop, you'll need to consider their suitability to your land and climate. How much water they'll require for growth is another important aspect</p>
        </div>
        <div class="sub-content2">
        <h6>6. Anticipate Attacks</h6>
        <p>Pest and virus attack can occur at any stage of crop planting. You will need to get familiar with the symptoms of an attack and protect it with following the preventive measure or action such as using pesticides</p>
        <h6>7. Choose machines over man</h6>
        <p>The size and the type of farm machinery you acquire will vary widely according to your farming specification</p>
        <h6>8.Hire experienced famer</h6>
        <p>It is always better to hire an experienced farmer to help you with your farming. They will be able to guide you with the right steps to be taken and also help you with the farming process. it would help if you had strong hands and knowledge to help you grow your farm faster and in safer way</p>
        <h6>9. Reach out for the local farmer market to sell at </h6>
        <p>Find the local markets where you will get t know people, their products, and the way, how to introduce yourself and bring your products to the people in your community</p>
        <h6>10. Seek Sustainability</h6>
        <p>There is an increasing movement among farming communities to choose farming methods, products and practices, that align with eco-friendliness.</p>
        </div>
        </div>
        </div>
        </div> 
        <div class="backgrd">
        <img alt="dataimg" src={dataimg}/>
        </div>
        </>
    )
}
export default Appdata;