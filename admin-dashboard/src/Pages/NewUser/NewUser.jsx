import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createClient } from '../../redux/apiCalls';
import './NewUser.css';

export default function NewUser() {
   const dispatch=useDispatch();

   const [newUser,setNewUser]=useState({});
    
   const handleChange=(e)=>{
      setNewUser((prev)=>(
       {...prev,[e.target.name]:e.target.value}
      ));
   }

   const handleSubmit=(e)=>{
     e.preventDefault();
     createClient(dispatch,newUser);
     console.log(newUser);

   }

   return (
    <div className='NewUser'>
        <h2 className='Title'>New User</h2>
        <form className='UserForm'>
             <div className='UserFormItem'>
                    <labal>Username</labal>
                    <input type="text" name="username" onChange={handleChange} placeholder='pankaj@1888'/>
             </div>
             <div className='UserFormItem'>
                    <labal>Password</labal>
                    <input type="password" name='password' onChange={handleChange} placeholder="pankaj"/>
             </div>
             <div className='UserFormItem'>
                    <labal>Email</labal>
                    <input type="email" name="email" onChange={handleChange} placeholder='pankaj@gmail.com'/>
             </div>
             <div className='UserFormItem'>
                    <labal>D.O.B</labal>
                    <input type="date" name="dob" onChange={handleChange} placeholder='02/09/2000'/>
             </div>
            
             <div className='UserFormItem'>
                    <labal>Gender</labal>
                    <select name='gender' onChange={handleChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">others</option>
                    </select>
             </div>
             {/* <div className='UserFormItem'>
                   <labal>Profile Picture</labal>
                   <input type="file"  />
             </div> */}
             
             <button className='userAddButton' onClick={handleSubmit} >Create</button>

        </form>
    </div>
  )
}
