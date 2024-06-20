import { createContext, useState ,} from "react";
import "./register.css";
import axios from "axios";
import Home from "../home/Home";
import { useNavigate } from "react-router-dom";
import App from "../../App";

const UserName= createContext()

function Register({sendUsername}) {
  const[username,setUsername]=useState('')
  const[password,setPassword]=useState('')
  const[home,setHome]=useState(false)
  const navigate = useNavigate()
  const [errorRes,setErrorRes]=useState()
  const sendReq=async()=>{
    // const res=  axios.get(`http://localhost:5000/check-user-exist/${username}`).then((res)=>{setErrorRes(res.data)})
    const response= ((await axios.post('http://localhost:5000/register',{'username':username,'password':password})).data)
    console.log(username);
    setErrorRes(response)
    setHome(true)
  }

  
  return (<>
    
    {home? navigate('/'):
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Twinsta</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Twinsta.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput"  onChange={(e)=>{
              
              setUsername(e.target.value)
              sendUsername(e.target.value)
            }}/>
            {/* {response} */}
            <input type="password" placeholder="Password" className="loginInput" onChange={(e)=>{
              setPassword(e.target.value)
            }} />
            <button className="loginButton" onClick={sendReq}>Register</button>
            {errorRes}
          </div>
        </div>
      </div>
    </div>}

    </>
  );
 
}

export default Register
export {UserName}

