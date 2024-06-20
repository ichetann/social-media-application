import "./closeFriend.css"

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriendList">
        <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
        <span className="sidebarName">{user.username}</span>
    </li>
  )
}
