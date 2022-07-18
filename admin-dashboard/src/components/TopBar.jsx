import React from 'react'
import "./TopBar.css";
import {NotificationsNone , Language ,Settings} from '@material-ui/icons';

export default function TopBar() {
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
                     <Language />
                </div>
                <div className='topBarIcons'>
                     <Settings/>
                     
                </div>
                <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' alt='' className='topAvatar'/>

                
           </div>    
       </div>

    </div>
  )
}
