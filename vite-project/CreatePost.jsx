import axios from "axios";
import "./CreatePost.css";
import { useState, useEffect, useContext } from "react";
import Sidebar from "./src/Sidebar";

const CreatePost = ({username}) => {
  // const [username, setUsername] = useState();
  const [file, setFile] = useState();
  const [imageId, setImageId] = useState();
  const [allImage, setAllImage] = useState(null);
  const [postMetadata, setPostMetadata] = useState({
    username: "",
    postCaption: "",
    postPlace: "",
  });

  async function handleChange(e) {
    console.log(username);
    setFile(e.target.files[0]);
    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    const result = await axios.post(
      ` http://localhost:5000/upload-image/${username}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    setImageId(result.data.data._id);
    console.log(imageId);
  }

  const submitHandler = async (e) => {
    const response = await axios.post("http://localhost:5000/post", {
      username: username,
      postCaption: postMetadata.postCaption,
      postPlace: postMetadata.postPlace,
      postUrl: imageId,
    });
    console.log(username);
  };

  function changeHandler(e) {
    setPostMetadata({ ...postMetadata, [e.target.name]: e.target.value });
  }

  const getImage = async () => {
    const result = await axios.get("http://localhost:5000/get-image");
    console.log(result);
    setAllImage(result.data.data);
  };

  return (
    <>
      <div className="postContainer">
        <Sidebar />
        <div className="postDiv">
          <div>
            <input
              type="file"
              className="shareInput"
              placeholder="Whats up buddy"
              onChange={handleChange}
            />
          </div>
          {/* {file && <img src={file} className="previewImg" />} */}
          <div className="postMiddle">
            <input
              type="text"
              placeholder="Caption"
              name="postCaption"
              className="caption"
              onChange={changeHandler}
            />
            <input
              type="text"
              placeholder="Location"
              name="postPlace"
              className="location"
              onChange={changeHandler}
            />
          </div>
          <button onClick={submitHandler}>Submit</button>

          {/* {allImage == null
          ? ""
          : allImage.map((data) => {
              // console.log(data);
              return (
                <img
                  src={`./src/images/${data.image}`}
                  height={100}
                  width={100}
                />
              );
            })} */}
        </div>
      </div>
    </>
  );
};

export default CreatePost;
