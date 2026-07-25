import React from 'react';
import './closeFriend.css';

function CloseFriend({ friend }) {
  return (
    <li className="sidebarFriend">
      <img
        className="sidebarFriendImage"
        src={friend.profilePicture}
        alt=""
      ></img>
      <span className="sidebarFriendName">{friend.username}</span>
    </li>
  );
}

export default CloseFriend;
