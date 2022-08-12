import React from 'react'
import "./TopBar.css";
import {NotificationsNone , Language ,Settings, PowerOutlined} from '@material-ui/icons';
import { Logout } from '../redux/apiCalls';
import { useDispatch} from 'react-redux';
import {Link} from "react-router-dom";

export default function TopBar() {
     const dispatch=useDispatch();
    const handleLogout=()=>{
       Logout(dispatch);
    }
     return (
    <div className='topBar'>
       <div className='topBarWrapper'>
           <div className='topLeft'>
               <span className='logo'>MyShopAdmin</span>
           </div>
           <div className='topRight'>
                <div className='topBarIcons'>
                     <NotificationsNone />
                     <span className='topIconBag'>2</span>
                </div>
                <div className='topBarIcons'>
                     <Language /><spna style={{fontSize:"10px"}}>ENG</spna> 
                </div>
                <div className='topBarIcons'>
                       
                        <Link to="/Settings" className="linkItem"> <Settings/> </Link>
                      
                    
                     
                     
                </div>
                <div style={{display:"flex"}}>
                 <Link to="/Profile"> <img  src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' alt='' className='topAvatar'/></Link>
                  <button onClick={handleLogout} className='Logoutbutton'>Logout</button>
                </div>
                
                
           </div>    
       </div>

    </div>
  )
}
