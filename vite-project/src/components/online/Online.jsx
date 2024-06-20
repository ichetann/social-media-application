import "./online.css"

export default function Online({user}) {
  return (
    <li className="onlineFriends">
    <div className="onlineFriendsContainer">
      {/* <img src={user.profilePicture} alt="" className="onlineFriendsImg" /> */}
      <span className="onlineFriendsStatus"></span>
    </div>
    <span className="onlineFriendsText">{user}</span>
  </li>
  )
}
