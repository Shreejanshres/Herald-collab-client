import"../Css/Dashb.css";
import dashbimg from '../Images/Dashboard.png';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import profileimg from '../Images/profileimgg.png'


const  Dashboard=()=>{
    return(
        <>
        <div className='headd'>
        <Link to="/">
        <img src={logo} alt="logo" className="logo"/>
        </Link>
        </div>

        <div className='profileimg'>
                <img id="profileimg" alt="profileimg" src={profileimg}/>
        </div>

        <div className="userdata">
            <p>Name: </p>
            <p>Phone: </p>
            <p>Email: </p>
            <p>Address: </p>
            <p>Gender: </p>
            <p>DOB: </p>
            <p>Farm Location: </p>
        </div>
        <div className="photo">
            <h3>Photo</h3>
        </div>
        <div className="citfront">
            <h3 id="citf ">Citizenship Front</h3>
            
        </div>
        <div className="citback">
        <h3 id="citb">Citizenship Back</h3>

        </div>

        <div className='dashback'>
                <img alt="dashbimg" src={dashbimg}/>
        </div>

       
        </>
    )
}
export default Dashboard;