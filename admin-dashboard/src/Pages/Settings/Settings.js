import "./Settings.css";
import {Brightness4,Brightness7} from '@material-ui/icons';
import { useState } from "react";
export default function Settings() {
  const [Theame,setTheame]=useState(true);
  const handleChange=()=>{
    setTheame(!Theame);
  }
  //console.log(Theame?"true":"false");
  return (
    <div className="settings" style={{backgroundColor:Theame?"white":"black",color:Theame?"black":"white"}}>
         <h1 className="Title">Settings</h1>
         <div className="settingContainer">
              <h3>Change Theame </h3>
              <div className="Theame">
                 <Brightness4 style={{cursor:"pointer",color:Theame?"gray":"black"}} onClick={handleChange}/> <span>Dark Mode</span> 
                 <Brightness7 style={{cursor:"pointer",color:Theame?"orange":"gray"}}  onClick={handleChange} /> <span>Light Mode</span>
              </div>
             
         </div>
    </div>
  )
}
