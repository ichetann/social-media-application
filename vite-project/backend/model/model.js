import mongoose, { Model, Schema, SchemaTypes, model } from "mongoose";

const postSchema = new mongoose.Schema({
  username: { type: SchemaTypes.ObjectId, ref: "Profile" },
  usersPost: [
    {
      username:String,
      postCaption: String,
      postTime: String,
      postPlace: String,
      postUrl: {type:SchemaTypes.ObjectId, ref:'ImageDetails'},
      likeCounter: { type: Number, default: 0 },
      likedUsername: [String],
      comments: [
        {
          commentedUsername: String,
          commentText: String,
        },
      ],
    },
  ],
  
});

const profileSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true, minLength: 8 },
  posts: { type: Schema.Types.ObjectId, ref: "Post" },
  followerUsername: [String],
  followerCounter: {type :Number, default:0},
  followingUsername: [String],
  followingCounter: {type :Number, default:0},
  bio :{type:String,default:""},
  dob :{type:String,default:""},
  country:{type:String,default:""}
});

/////////////////////////////////////////////
const ImageDetailsScehma = new mongoose.Schema(
  {
    image: String,
    username:String
  },
  {
    collection: "ImageDetails",
  },
  
);

const Images = mongoose.model("ImageDetails", ImageDetailsScehma);

// const User = new model('user',userSchema)
const Post = new model("post", postSchema);
const Profile = new model("profile", profileSchema);

export { Post, Profile, Images };
