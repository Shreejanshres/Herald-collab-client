import"../Css/Dashb.css";
import dashbimg from '../Images/dashh.png';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';

const  Dashboard=()=>{
    return(
        <>
        <div className='headd'>
        <Link to="/">
        <img src={logo} alt="logo" className="logo"/>
        </Link>
        </div>


        <div className='dashback'>
                <img alt="dashbimg" src={dashbimg}/>
        </div>
        </>
    )
}
export default Dashboard;