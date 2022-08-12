import "./Profile.css";

export default function Profile() {
  return (
    <div className="Profile">
        <h1 className="Title">Profile</h1>
        <div className="ProfileContainer">
           <div className="ProfileLeft">
               
                   <img className="ProfileImg" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                   <button className="changeButton" >Change Profile</button>
               
           </div>
           <div className="ProfileRight">
                <ul>
                    <li><span>Name : </span> Pankaj Pandey</li>
                    <li> <span>Gender : </span> Male</li>
                    <li><span>Email : </span> pankaj@gmail.com</li>
                    <li><span>Designation : </span> Admin</li>
                </ul>
           </div>
        </div>
    </div>
  )
}
