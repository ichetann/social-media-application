import { useState } from "react";
import "./share.css";
// import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import axios from "axios";

export default function Share() {


  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/1.jpeg" alt="" className="shareImg" />
          <input
            type="file"
            className="shareInput"
            placeholder="Whats up buddy"
          />
          
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              {/* <PermMedia htmlColor="Tomato" className="shareIcon" /> */}
              <span className="shareText">Video or Image</span>
            </div>
            <div className="shareOption">
              {/* <Label htmlColor="blue" className="shareIcon" /> */}
              <span className="shareText">Tag</span>
            </div>
            <div className="shareOption">
              {/* <Room htmlColor="green" className="shareIcon" /> */}
              <span className="shareText" >Location</span>
            </div>
            <div className="shareOption">
              {/* <EmojiEmotions htmlColor="goldenrod" className="shareIcon" /> */}
              <span className="shareText">Feelings</span>
            </div>
          </div>
          <button className="shareBtn">Share</button>
        </div>
      </div>
    </div>
  );
}
