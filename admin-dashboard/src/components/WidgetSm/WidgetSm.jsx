import './WidgetSm.css';
import {Visibility} from "@material-ui/icons";
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethod';

export default function WidgetSm() {

   const [users,setUsers]=useState([]);
   
   useEffect(()=>{
     const getUsers= async ()=>{
        try{
            const res= await userRequest.get("/user/?new=true");
            setUsers(res.data);
            
          }catch(err){
           console.log(err);
          }
     }
      getUsers(); 
   },[])
  return (
    <div className='WidgetSm'>
       <span className='WidgetSmTitle'> New Join Member</span>
       <ul className='WidgetSmList'>
         { users.map(user=>(
          <li className='WidgetSmListItem' key={user._id}>
              <img src={user.img || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} className='img' alt='img' />
              <div className='WidgetSmUser'>
                 <span className='WidgetSmUsername'>{user.userName}</span>
                 {/* <span className='WidgetSmUserTitle'>Software Engineer</span> */}
              </div>
              <button className='WidgetSmButton'>
                  <Visibility style={{fontSize:"16px",marginRight:"5px"}} /> Display

              </button>
             
          </li>
          ))}
          
       </ul>
    </div>
  )
}
