import express, { json } from "express";
import mongoose from "mongoose";
import { Post, Profile,Images } from "./model/model.js";
import cors from 'cors'

const server = express();
server.use(express.json());
server.use(cors())

mongoose
  .connect("mongodb://0.0.0.0:27017/user")
  .then(console.log("databse connected"));

server.post("/register", (req, res) => {
  try {
    const {username,password}=req.body
  const profile=new Profile({
    username:username,
    password:password
  })
  profile.save()
  res.send(profile)
  } catch (error) {
    res.send("username already exist")
  }
  
});

server.get('/login',async(req,res)=>{
  const {username,password}=req.query
  console.log(username,password)
  const profile=await Profile.findOne({username:username})
  console.log(profile)

    if(profile.password==password){
      res.send(profile)
    }
   
})

server.get('/check-user-exist/:username',async(req,res)=>{
  const username= req.params.username
  const user =await Profile.findOne({username:username})
  console.log(user,username);
  if(user){
    res.send('User Already exist, try another username')
  }
})

server.post("/post", async (req, res) => {
  const { username,postCaption,postPlace,postUrl} = req.body;
  console.log(postUrl);
  const post = new Post({
    usersPost: {
      username:username,
      postCaption: postCaption,
      postPlace: postPlace,
      postUrl: postUrl
    },
  });
  await post.save();
  res.json(post);
});

server.get('/allpost',async(req,res)=>{
  const post = await Post.find().populate('usersPost.postUrl','image').exec()
  console.log(post.usersPost);
  res.json(post)
})

server.get("/post/:username", async (req, res) => {
  const username = req.params.username;
  const post = await Post.find({'usersPost.username':username}).populate({
    path:'usersPost.postUrl'
  })
  // console.log(post.usersPost.find());
  // const particularPost = post.usersPost.find((item) => item.username == username)s
  // console.log(particularPost);
  // const imageName=Post.find({'usersPost.username':username}).populate('postUrl','image').exec()
  // console.log(imageName);
  console.log(post)
  res.json(post);
});

// server.patch('/adding-post-url/:username',async(req,res)=>{
//   const username=req.params.username
//   const post= await Post.findOne({'usersPost.username':username}).populate('postUrl').exec()
// })

server.patch("/post", async (req, res) => {
  const { username, postPlace, postTime, postUrl, postCaption } = req.body;
  const post = await Post.findOne({ "usersPost.username": username });
  post.usersPost.push({
    username:username,
    postCaption: postCaption,
    postPlace: postPlace,
    postTime: postTime,
    postUrl: postUrl,
  })
  await post.save();
  res.json(post)
});

server.delete("/post", async (req, res) => {
  const username = req.body.username;
  const post = await Post.findOne({ "usersPost.username": username })
  const index = post.usersPost.findIndex((item) => item.username == username);
  const deletedPost = post.usersPost.splice(index, 1);
  await post.save();
  res.json(deletedPost);
});

server.patch('/postLiked',async(req,res)=>{
  const {username} = req.body
  const post = await Post.findOne({"usersPost.username":username})
  const particularPost = post.usersPost.find((item) => item.username == username);
  // console.log(particularPost);
  particularPost.likeCounter+=1
  particularPost.likedUsername.push(username)
  await post.save()
  res.json(particularPost)
})

server.patch('/postComment',async(req,res)=>{
  const{username,commentText,commentedUsername}= req.body
  const post=await Post.findOne({"usersPost.username":username})
  const particularPost = post.usersPost.find((item) => item.username == username);  
  particularPost.comments.push({
    commentedUsername:commentedUsername,
    commentText:commentText
  })
  await post.save()
  res.json(particularPost)
})


// import "./imageDetails"
// const Images = mongoose.model("ImageDetails");
import multer from "multer";
// const upload=multer({
//   dest:"uploads/"
// })
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../src/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },

});

const upload = multer({storage:storage})

server.post("/upload-image/:username", upload.single("image"), async (req, res) => {
  // console.log(req.file.filename,req.params.username);
  const username= req.params.username
  const imageName = req.file.filename
console.log(username)
  try {
    const data=new Images()
    data.image=imageName
    data.username=username
    data.save()
    res.json({ status: "ok" ,data:data});
  } catch (error) {
    res.json({ status: error });
  }
});

// server.patch('/assign-postUrl/:_id',async(req,res)=>{
//   const username=req.body
//   const post=Post.findOneAndUpdate({'usersPost.username':username})
//   const particularPost = post.usersPost.find((item) => item.username == username)
//   particularPost.postUrl=req.params._id+
//   post.save()
//   console.log(particularPost);
//   res.json(particularPost)

// })

server.get("/get-image", async (req, res) => {
  const username= req.body.username
  console.log(req.body);
  // const imageName = req.file.filename
  try {
    Images.find({username:username}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.json({ status: error });
  }

//   const user=await Post.find({'usersPost.username':username})
// user.usersPost.postUrl=req.file.filename
// user.save()
//   res.json(user)
});

//Profile
server.post('/profile',async(req,res)=>{
  const{username,password}=req.body
    const profile = new Profile()
    profile.username=username
    profile.password=password
    profile.save()
    res.json(profile)
})

server.patch('/edit',async(req,res)=>{
  const{username,bio,country,dob}=req.body
  // console.log(username,bio,country,dob);
  const profile=await Profile.findOneAndUpdate({username:username},{
    bio:bio,
    country:country,
    dob:dob
  },{setDefaultsOnInsert:true,new:true})
  // profile.save()
  // console.log(profile)
  res.json(profile)
})

server.get('/edit/:username',async(req,res)=>{
  const profile=await Profile.findOne({username:req.params.username})
  // profile.save()
  console.log(profile);
  res.json(profile)
})



server.patch('/followerIncrement',async(req,res)=>{
  const{profileUser,followerUsername}=req.body
  const user=await Profile.findOne({username:profileUser})
  console.log(profileUser,followerUsername);
  user.followerUsername.push(followerUsername)
  user.follwerCounter+=1
  user.save()
  res.status(200).json({
    message:'success'
  })
})

server.patch('/followerDecrement',async(req,res)=>{
  const{profileUser,followerUsername}=req.body
  const user= await Profile.findOne({username:profileUser})
  user.followerUsername.remove(followerUsername)
  user.follwerCounter -=1
  user.save()
  res.status(200).json({
    message:'success'
  })
})

server.patch('/followingIncrement',async(req,res)=>{
  const{profileUser,followingUsername}=req.body
  const user=await Profile.findOne({username:profileUser})
  // const profile=Profile.findOneAndUpdate({'usersPost.username':user},{followerUsername:followerUsername})
  user.followingUsername.push(followingUsername)
  user.follwingCounter +=1
  user.save()
  res.status(200).json({
    message:'success'
  })
})

server.patch('/followingDecrement',async(req,res)=>{
  const{profileUser,followingUsername}=req.body
  const user=await Profile.findOne({username:profileUser})
  // const profile=Profile.findOneAndUpdate({'usersPost.username':user},{followerUsername:followerUsername})
  user.followingUsername.remove(followingUsername)
  user.follwingCounter -=1
  user.save()
  res.status(200).json({
    message:'success'
  })
})

server.get('/getfollower/:username',async(req,res)=>{
  const username=req.params.username
  const user = await Profile.findOne({username:username})
  res.status(200).json(user.followerUsername)
})

server.get('/getdob/:username',async(req,res)=>{
  const username= req.params.username
  const user= await Profile.findOne({username:username})
  let date =new Date().getMonth()
  console.log(date);
  res.json(user.dob)
})

server.listen(5000, () => {
  console.log("runnning on port 5000");
});
