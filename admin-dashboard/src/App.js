import SideBar from "./components/SideBar/SideBar";
import TopBar from "./components/TopBar";
import './App.css';
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
        <TopBar/>
        <div className="container">
          <SideBar />
          <Home />
         
        </div>
        
        

    </div>
  );
}

export default App;
