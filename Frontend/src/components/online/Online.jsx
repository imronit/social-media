import React from 'react';
import './online.css';
function Online({ user }) {
  console.log(user);
  return (
    <li className="rightbarFriend">
      <div className="rightbarImgContainer">
        <img
          src="./assets/posts/person1.jpeg"
          alt=""
          className="rightbarProfImg"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user?.username}</span>
    </li>
  );
}

export default Online;
