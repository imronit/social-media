import React from 'react';
import './sidebar.css';
import {
  RssFeed,
  Chat,
  PlayCircle,
  Groups,
  Bookmarks,
  Work,
  Event,
  Store,
} from '@mui/icons-material';
import friendImage from '../../assets/persons/person1.jpeg';
import { Users } from '../../dummyData';
import CloseFriend from '../closeFriend/CloseFriend';
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Groups className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmarks className="sidebarIcon" />
            <span className="sidebarListItemText">Saved</span>
          </li>
          <li className="sidebarListItem">
            <Work className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <Store className="sidebarIcon" />
            <span className="sidebarListItemText">Marketplace</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr"></hr>
        <ul className="sidebarFriendList">
          {Users.map((user) => (
            <CloseFriend key={user.id} friend={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
