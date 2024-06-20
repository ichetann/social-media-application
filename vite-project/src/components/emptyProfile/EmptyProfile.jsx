// import React, { useState } from "react";
import Profile from "../profile/Profile";
import { useEffect, useRef, useState } from "react";
// import "./profile.css";
import Sidebar from "../../Sidebar";
// import Navbar from "../navbar/Navbar";
import axios from "axios";

const EmptyProfile = ({obj}) => {
    const [bio, setBio] = useState("");
  const [dob, setDob] = useState("");
  const [country, setContry] = useState("");
  const [resData, setResData] = useState();
  const [visitingFirstTime, setVisitingFirstTime] = useState(true);
  const dataObj = {
    username: obj.username,
    bio: bio,
    dob: dob,
    country: country,
  };
  const inputRef = useRef();
  const dobRef = useRef();
  return (
    <>
    {visitingFirstTime? 
      
        <div className="containerWrapper">
          <Sidebar />
          <div className="container">
            <div className="top">
              <h3>{obj.username}</h3>
              {/* <button>Follow</button> */}
            </div>
            <div className="followerSection">
              <div className="hori">
                <p>0</p>
                <h3>follower</h3>
              </div>
              <div className="hori">
                <p>0</p>
                <h3>following</h3>
              </div>
            </div>
            <div className="inputContainer" ref={inputRef}>
              <input
                name="bio"
                type="text"
                placeholder="Bio"
                // value={resData.bio}
                readOnly
                onChange={(e) => {
                  setBio(e.target.value);
                }}
              />
              <input
                name="dob"
                type="date"
                placeholder="dob"
                // value={resData.dob}
                readOnly
                ref={dobRef}
                onChange={(e) => {
                  setDob(e.target.value);
                }}
              />
              <input
                name="country"
                type="text"
                placeholder="Country"
                // value={resData.country}
                readOnly
                onChange={(e) => {
                  setContry(e.target.value);
                }}
              />
            </div>
            <div className="btns">
              <button
                className="editProfile"
                onClick={() => {
                  inputRef.current.firstChild.readOnly = false;
                  inputRef.current.lastChild.readOnly = false;
                  dobRef.current.readOnly = false;
                }}
              >
                Edit Profile
              </button>
              <button
                className="save"
                onClick={async () => {
                  const response = await axios.patch(
                    "http://localhost:5000/edit",
                    dataObj
                  ).then((res)=>{
                    console.log(res.data)
                    setResData(res.data)
                    obj.functionToCheck(false,res.data)
                  })
                  setVisitingFirstTime(false);
                  inputRef.current.firstChild.readOnly = true;
                  inputRef.current.lastChild.readOnly = true;
                  dobRef.current.readOnly = true;
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
     :<Profile resData={resData}/>}
    </>
  );
};

export default EmptyProfile;
