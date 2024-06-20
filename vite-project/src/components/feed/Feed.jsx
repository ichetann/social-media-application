import "./feed.css";
import Share from "../share/Share";
import Post from "../../Post";
import { Posts } from "../../dummyData";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

function Feed({username}) {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    
      const response = axios.get("http://localhost:5000/allpost").then((res)=>{
        
        setPostData(res.data);
        console.log(res.data);
      })
    
  }, []);
  
  console.log(postData);
 
  

  return (
    <div className="feed">
      <div className="feedWrapper">
        {/* <Share /> */}
        {/* {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))} */}

        {
          postData.map((response)=>{
            const postobj={
                postDetails:response.usersPost,
                username:username
            }
            return  <Post key={response._id} post={postobj} />
          })
        }
      </div>
    </div>
  );
}
export default Feed;
