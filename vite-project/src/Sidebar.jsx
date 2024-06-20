import "./sidebar.css"
import { ImSwitch } from "react-icons/im";
import {GoHomeFill} from 'react-icons/go'
import {BsSearch} from 'react-icons/bs'
import {FaSearch} from 'react-icons/fa'
import {IoCompassOutline,IoCompassSharp} from 'react-icons/io5'
import {TbMessageCircle,TbMessageCircle2Filled} from 'react-icons/tb'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import {CgAddR} from 'react-icons/cg'
// import {SiAddthis} from 'react-icons/si'
import CreatePost from "../CreatePost"
import { useState } from "react"
import { useNavigate,Link } from "react-router-dom"
import { CgProfile } from "react-icons/cg";



const Sidebar = () => {

  const navigator=useNavigate()
  return (
    <div className="sidebarWrapper">
      {/* <div className="logo">
        <h2>Instagram</h2>
      </div> */}
      <div className="iconsWrapper">
        <div className="iconWrapper">
          <GoHomeFill className="icon"/>
          <button onClick={()=>{navigator('/')}}>Home</button>
        </div>
        <div className="iconWrapper">
          <BsSearch className="icon"/>
          <button >Search</button>
        </div>
        {/* <div className="iconWrapper">
          <IoCompassSharp className="icon"/>
          <button >Explore</button>
        </div>
        <div className="iconWrapper">
          <TbMessageCircle className="icon"/>
          <button >Message</button>
        </div>
        <div className="iconWrapper">
          <AiOutlineHeart className="icon"/>
          <button >Notifications</button>
        </div> */}
        <div className="iconWrapper">
          <CgAddR className="icon"/>
          <button onClick={()=>navigator('/Post')} >Create</button>
        </div>
        <div className="iconWrapper">
          <CgProfile className="icon"/>
          <button onClick={()=>navigator('/Profile')} >Profile</button>
        </div>
        <div className="iconWrapper">
          <ImSwitch className="icon"/>
          <button onClick={()=>navigator('/Login')} >Login</button>
        </div>
      </div>
      {/* <div className="more">
        <div>
          <span>-</span>
        </div>
      </div> */}
      <div className="verticalLine"></div>
    </div>
  )
}

export default Sidebar
