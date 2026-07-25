import React from 'react';
import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';
function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="/assets/posts/birthday.jpeg"
            alt=""
          />
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
      </div>
    </div>
  );
}

export default Rightbar;
