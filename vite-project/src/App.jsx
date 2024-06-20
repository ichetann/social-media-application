import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import CreatePost from "../CreatePost";
import Profile from "./components/profile/Profile";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import axios from "axios";
import Sidebar from "./Sidebar";
import EmptyProfile from './components/emptyProfile/EmptyProfile';

function App() {
  
  const [firstTime,setFirstTime]=useState(true)
  const [username, setUsername] = useState();
  const [resData,setResData]=useState()

  const sendUsername = (name) => {
    setUsername(name);
    console.log(username,name);
  };
  
function visitingFirstTimeOrNot(params,res) {
  setFirstTime(params)
  setResData(res)
}

const obj={
  "username":username,
  "functionToCheck":visitingFirstTimeOrNot
}

  return (
    <>
    {/* {  console.log(data)} */}
      <div>
        <Routes>
          <Route path="/" element={<Home username={username}/>}></Route>
          <Route path="/Register" element={<Register sendUsername={sendUsername}/>}></Route>
          <Route path="/Login" element={<Login sendUsername={sendUsername}/>}></Route>
          <Route path="/Post" element={<CreatePost username={username}/>}></Route>
          <Route path="/Profile" element={firstTime? <EmptyProfile obj={obj} /> : <Profile resData={resData}/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
