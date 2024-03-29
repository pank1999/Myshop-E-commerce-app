import "./User.css";
import {CalendarToday, EmailOutlined, PermIdentity, PhoneAndroid, Publish} from "@material-ui/icons";
import {Link, useLocation} from "react-router-dom";
import {useSelector } from 'react-redux';

export default function  User() {
   const location=useLocation();
   const userId=location.pathname.split("/")[3];
   const user=useSelector((state)=>state.client.currentClients.find((client)=>client._id===userId));
   console.log(user);

   return (
    <div className='User' >
        <div className="UserTitleContainer">
            <h2 className="userTitle">Edit User</h2>
            <Link to="/AddNewUser">
                <button className="CreateUserButton" >Create</button>   
            </Link>
            
        </div>
        <div className="UserContainer">
             <div className="UserShow">
                <div className="UserShowTop">
                    <img src={user.img ?user.img:"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"} alt="" />
                    <div className="UserShowTopTitle">
                        <span className="UserShowTopUsername">{user.userName}</span> 
                    </div>
                </div>
                <div className="UserShowBottom">
                    <span className="UserShowBottomTitle">Account Details</span>
                    <div className="UserShowBottomInfo">
                       <PermIdentity className="UserShowIcons"/>
                       <span>{user.userName}</span>
                    </div>
                    <div className="UserShowBottomInfo">
                       <CalendarToday className="UserShowIcons"/>
                       <span>{user.dob.slice(0,10)}</span>
                    </div>
                    <div className="UserShowBottomInfo">
                        <PermIdentity className="UserShowIcons"/>
                       <span>{user.gender}</span>
                    </div>
                    <span className="UserShowBottomTitle">Contact Details</span>
                    <div className="UserShowBottomInfo">
                       <PhoneAndroid className="UserShowIcons"/>
                       <span>+91 8630211986</span>
                    </div>
                    <div className="UserShowBottomInfo">
                       <EmailOutlined className="UserShowIcons"/>
                       <span>{user.email}</span>
                    </div>
                    {/* <div className="UserShowBottomInfo">
                       <EmailOutlined className="UserShowIcons"/>
                       <span>Bhopal Madhya Pradesh</span>
                    </div> */}
                </div>
             </div>
             <div className="UserUpdate">
                <span className="UserUpdateTitle"> Edit</span>
                 <form className="UserUpdateForm">
                    <div className="UserUpdateFormLeft">
                         <div className="UserUpdateItem">
                            <labal>Username</labal>
                            <input type="text"  placeholder={user.userName} className="UserUpdateItemInput"/>
                         </div>
                         <div className="UserUpdateItem">
                            <labal>Full Name</labal>
                            <input type="text"  placeholder="pankaj pandey" className="UserUpdateItemInput"/>
                         </div>
                         <div className="UserUpdateItem">
                            <labal>D. O. B</labal>
                            <input type="date"  placeholder={user.dob} className="UserUpdateItemInput"/>
                         </div>
                         <div className="UserUpdateItem">
                            <labal>Mobile No</labal>
                            <input type="text"  placeholder={user.mobileNO?user.mobileNO:"xxxxxxxxxx"}  className="UserUpdateItemInput"/>
                         </div>
                         {/* <div className="UserUpdateItem">
                            <labal>Address</labal>
                            <input type="text"  placeholder="Bhopal Madhya Pradesh" className="UserUpdateItemInput"/>
                         </div> */}
                         <div className="UserUpdateItem">
                            <labal>Email Id</labal>
                            <input type="email"  placeholder={user.email} className="UserUpdateItemInput"/>
                         </div>

                    </div>
                    <div className="UserUpdateFormRight">
                           <div className="UserUpdateUpload">
                                <img className="UploadImg" src={user.img ?user.img:"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"}  alt=""/>
                                <labal htmlFor="file"><Publish /></labal>
                                <input type="file" id="file" />
                           </div>
                           <button className="UserUpdateButton" disabled >Update</button>
                    </div>

                   
                     
                 </form>
             </div>
        </div>
    </div>
  )
}
