import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Rightbar({ profile,username }) {
  const HomeRightbar = () => {
    const [followerData,setFollowerData]=useState()
    const [dob, setDob]=useState()
    useEffect(()=>{
      axios.get(`http://localhost:5000/getfollower/${username}`).then((res)=>{setFollowerData(res.data)})
      checkdob()
    },[])

    const checkdob=()=>{
      // setDob(new Date().getDate);
    }
    return (
      <>
        <div className="birthdayContainer">
          {/* <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Chetan Chaudhari</b> and <b>3 other friends </b>
            have a birthday today{}
          </span> */}
        </div>
        <img src="/assets/ad.png" alt="" className="adImg" />
        <h4 className="rightbarBirthdayTitle">Friends</h4>
        <ul className="onlineFriendsList">
          {followerData?.map((u) => (
            <Online key={Date.now()} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City :</span>
            <span className="rightbarInfoValue">Kalyan</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Country :</span>
            <span className="rightbarInfoValue">India</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship :</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friend</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/Person/1.jpeg"
              alt=""
              className="rightbarFriendImg"
            />
            <span className="rightbarFriendName">Raju Gada</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/Person/2.jpeg"
              alt=""
              className="rightbarFriendImg"
            />
            <span className="rightbarFriendName">Raju Gada</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/Person/3.jpeg"
              alt=""
              className="rightbarFriendImg"
            />
            <span className="rightbarFriendName">Raju Gada</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/Person/4.jpeg"
              alt=""
              className="rightbarFriendImg"
            />
            <span className="rightbarFriendName">Raju Gada</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/Person/5.jpeg"
              alt=""
              className="rightbarFriendImg"
            />
            <span className="rightbarFriendName">Raju Gada</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/Person/6.jpeg"
              alt=""
              className="rightbarFriendImg"
            />
            <span className="rightbarFriendName">Raju Gada</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
