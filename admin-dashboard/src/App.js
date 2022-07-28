import SideBar from "./components/SideBar/SideBar";
import TopBar from "./components/TopBar";
import './App.css';
import Home from "./Pages/Home";
import {Routes,Route} from "react-router-dom";
import UserList from "./Pages/userList/UserList";
import User from "./Pages/user/User";
import NewUser from "./Pages/NewUser/NewUser";
function App() {
  return (
    <div className="App">
        <TopBar/>
        <div className="container">
          <SideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/Users" element={<UserList />} />
            <Route  path="/Users/EditUser/:userid" element={<User />} />
            <Route exact path="/AddNewUser" element={<NewUser /> } />
          </Routes>
                   
        </div>
        
        

    </div>
  );
}

export default App;
