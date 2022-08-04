import SideBar from "./components/SideBar/SideBar";
import TopBar from "./components/TopBar";
import './App.css';
import Home from "./Pages/Home";
import {Routes,Route} from "react-router-dom";
import UserList from "./Pages/userList/UserList";
import User from "./Pages/user/User";
import NewUser from "./Pages/NewUser/NewUser";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import NewProduct from "./Pages/NewProduct/NewProduct";
import Login from "./Pages/Login/Login";

function App() {
  // const admin=true;
  const admin=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.user.isAdmin;
  //console.log(admin);
  return (
    <div className="App">
        <Routes>
           <Route exact path="/Login" element={<Login />} />
        </Routes>
      { admin && (
        <>
        <TopBar/>
        <div className="container">
          <SideBar />
          
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Users" element={<UserList />} />
            <Route  path="/Users/EditUser/:userid" element={<User />} />
            <Route exact path="/AddNewUser" element={<NewUser /> } />
            <Route exact path="/Products" element={<Products /> } />
            <Route exact path="/Product/EditProduct/:productid" element={<Product /> } />
            <Route exact path="/newProduct" element={<NewProduct /> } />

         
          </Routes>    

        </div>

        </>
      )
      }  
      
    </div>
  );
}

export default App;
