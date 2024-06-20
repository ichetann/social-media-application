import "./home.css";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import Sidebar from "../../Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";

export default function Home({username}) {
  return (
    <>
      {/* <div className="main"> */}
        <div className="homeContainer">
        <Sidebar/>
          <Feed username={username}/>
          <Rightbar username={username}/>
        </div>
      {/* </div> */}
    </>
  );
}
