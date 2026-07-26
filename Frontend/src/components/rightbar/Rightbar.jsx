import React from 'react';
import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

const HomeRightBar = () => {
  return (
    <>
      <div className="birthdayContainer">
        <img className="birthdayImg" src="/assets/posts/birthday.jpeg" alt="" />
        <span className="birthdayText">
          <b>HHH</b> and <b>3 other friends</b> have birthday today
        </span>
      </div>
      <img src="/assets/posts/ad.jpeg" alt="" className="rightbarAd" />
      <h4 className="rightbarTitle">Online Freinds</h4>
      <ul className="rightbarFriendsList">
        {Users.map((user) => (
          <Online key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
};

const ProfileRightBar = () => {
  return (
    <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">NewYork</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle"> User friends</h4>

      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img
            src="assets/posts/person1.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Rjflfl kdf</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/posts/person1.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Rjflfl kdf</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/posts/person1.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Rjflfl kdf</span>
        </div>
      </div>
    </>
  );
};

function Rightbar({ profile }) {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

export default Rightbar;
