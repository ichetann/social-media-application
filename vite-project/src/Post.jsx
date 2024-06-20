import "./post.css";
// import { MoreVert } from "@mui/icons-material"
import { Users } from "./dummyData";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
// import {Login} from '../../images/'

export default function Post(props) {
  
  const [isLiked, setIsLiked] = useState(false);
  const [followed, setFollowed] = useState(true);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const followHandler = async (e) => {
    console.log(props.post.postDetails[0].username, "realusername",props.post.username);
    followed
      ? await axios.patch("http://localhost:5000/followerIncrement", {
          profileUser: props.post.postDetails[0].username,
          followerUsername:props.post.username,
        }).then((res)=>{console.log(res)})
      : await axios.patch("http://localhost:5000/followerDecrement", {
        profileUser: props.post.postDetails[0].username,
        followerUsername:props.post.username
        });

        setFollowed(!followed)
  };

  console.log(props.post[0]);
  return (
    <>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
                <span className="postUsername">{ props.post.postDetails[0]?.username}</span>
            </div>
            <div className="postTopRight">
              
              <span className="postText">
                {props.post.postDetails[0].postCaption}
              </span>
              <button onClick={followHandler}>{followed? "follow" : "Unfollow"}</button>
            </div>
          </div>
          <div className="postCenter">
            <img
              src={`./src/images/${props.post.postDetails[0].postUrl.image}`}
              alt=""
              className="postImg"
            />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              {/* <span className="likeCounter">{post.like} People liked it</span> */}
            </div>
            <div className="postBottomRight">
              {/* <span className="commentsText">{props.post[0].comments} comments</span>     */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
