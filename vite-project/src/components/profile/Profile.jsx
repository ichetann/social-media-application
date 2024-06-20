import { useEffect, useRef, useState } from "react";
import "./profile.css";
import Sidebar from "../../Sidebar";
import Navbar from "../navbar/Navbar";
import axios from "axios";

const Profile = ({resData}) => {
  const inputRef = useRef();
  const dobRef = useRef();
  const [bio, setBio] = useState("");
  const [dob, setDob] = useState("");
  const [country, setContry] = useState("");
  // const [resData, setResData] = useState();
  const [secondResData, setSecondResData] = useState();
  // const [username, setUsername] = useState();
  const [visitingFirstTime, setVisitingFirstTime] = useState(true);

  // useEffect(() => {
  //   const res = axios
  //     .get(`http://localhost:5000/edit/${resData.username}`)
  //     .then((res) => {
  //       setResData(res.data);
  //       console.log(res.data);
  //     });
  // }, []);

  // setUsername(props.username);

  return (
    <div className="containerWrapper">
      <Sidebar />
      <div className="container">
        <div className="top">
          <h3>{resData.username}</h3>
          {/* <button>Follow</button> */}
        </div>
        <div className="followerSection">
          <div className="hori">
            <p>{resData.followerCounter}</p>
            <h3>follower</h3>
          </div>
          <div className="hori">
            <p>{resData.followingCounter}</p>
            <h3>following</h3>
          </div>
        </div>
        <div className="inputContainer" ref={inputRef}>
          <input
            name="bio"
            type="text"
            placeholder="Bio"
            value={resData.bio}
            readOnly
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
          <input
            name="dob"
            type="date"
            placeholder="dob"
            value={resData.dob}
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
            value={resData.country}
            readOnly
            onChange={(e) => {
              setContry(e.target.value);
            }}
          />
        </div>
        <div className="btns">
          {/* <button
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
              )
              
              inputRef.current.firstChild.readOnly = true;
              inputRef.current.lastChild.readOnly = true;
              dobRef.current.readOnly = true;
            }}
          >
            Save
          </button> */}
        </div>
      </div>
    </div>

    /////////////////////////////////////////
    //   <div class="container">
    //     {/* <Sidebar  /> */}

    // 	  <div class="profile">

    // 		<div class="profile-image">

    // 			{/* <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt=""/> */}

    // 		</div>

    // 		<div class="profile-user-settings">

    // 			<h1 class="profile-user-name">janedoe_</h1>

    // 			<button class="btn profile-edit-btn">Edit Profile</button>

    // 			<button class="btn profile-settings-btn" aria-label="profile settings"><i class="fas fa-cog" aria-hidden="true"></i></button>

    // 		</div>

    // 		<div class="profile-stats">

    // 			<ul>
    // 				<li><span class="profile-stat-count">164</span> posts</li>
    // 				<li><span class="profile-stat-count">188</span> followers</li>
    // 				<li><span class="profile-stat-count">206</span> following</li>
    // 			</ul>

    // 		</div>

    // 		<div class="profile-bio">

    // 			<p><span class="profile-real-name">Jane Doe</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>

    // 		</div>

    // 	</div>

    // </div>
  );
};

export default Profile;
