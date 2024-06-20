import "./profile.css"
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar';


export default function Profile() {
  return (
    <>
    <Navbar/>
    <div className='profile'>
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src="assets/Post/3.jpeg" alt="" className="profileCoverImg" />
                    <img src="assets/Person/3.jpeg" alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileUsername">Chetan Chaudhari</h4>
                    <span className="profileDesc">Looking for and opportunity</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile/>
            </div>
        </div>
  </div>
  </>
  )
}
