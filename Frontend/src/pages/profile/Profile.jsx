import React from 'react';
import './profile.css';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
function Profile() {
  return (
    <>
      <Topbar></Topbar>
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/posts/person1.jpeg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="assets/posts/person1.jpeg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Ronit</h4>
              <span className="profileInfoDesc">Hello friends</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
