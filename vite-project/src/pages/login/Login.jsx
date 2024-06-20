import "./login.css";
import { useState } from "react";
import axios from "axios";
import Home from "../home/Home";
import { useNavigate } from "react-router-dom";

export default function Login({sendUsername}) {
  const [username,setUsername]=useState()
  const [password,setPassword]=useState()
  const [sendToHome,setSendToHome]= useState(false)
  const navigate= useNavigate()
let demo;

  const sendReq= ()=>{
   axios.get(`http://localhost:5000/login?username=${username}&password=${password}`, {'username':username,'password':password}).then((res)=>{setSendToHome(true)
    sendUsername(res.data.username)
   })
    // console.log(response);
  }
  return (<>
    {sendToHome ? navigate('/') :
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Twinsta</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Twinsta.{demo}
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" onChange={(e)=>{
              setUsername(e.target.value)
              // sendUsername(username)
            }}/>
            <input placeholder="Password" className="loginInput" onChange={(e)=>{
              setPassword(e.target.value)
              console.log(password)
            }}/>
            <button className="loginButton" onClick={sendReq}>Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  }
  </>
  );
}