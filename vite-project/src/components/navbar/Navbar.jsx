import "./navbar.css"
// import PersonIcon from '@mui/icons-material/Person';
// import SearchIcon from '@mui/icons-material/Search';
// import ChatIcon from '@mui/icons-material/Chat';
// import NotificationsIcon from '@mui/icons-material/Notifications';


function Navbar() {

  return (
    <div className="navbar">
      <div className="navLeft">
        <div className="leftWrapper">
          <span className="logoName">Chetan Social</span>
        </div>
      </div>
      <div className="navCenter">
        <div className="searchBar">
          <SearchIcon/>
          <input type="search" placeholder="Enter text" className="searchInput" />  
        </div>
      </div>
      <div className="navRight">
        <div className="navLinks">
          <span className="navLink">Homepage</span>
          <span className="navLink">Timeline</span>
        </div>
        <div className="navIconsContainer">
          <div className="navIcons">
            {/* <PersonIcon/> */}
            <span className="navIconsBadge">1</span>
          </div>
          <div className="navIcons">
            {/* <ChatIcon/> */}
            <span className="navIconsBadge">2</span>
          </div>
          <div className="navIcons">
            {/* <NotificationsIcon/> */}
            <span className="navIconsBadge">1</span>
          </div>
        </div>
        <img src="/assets/Person/1.jpeg" alt="" className="profileImg"/>
      </div>
    </div>
  )
    
}

export default Navbar
