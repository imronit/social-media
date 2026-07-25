import "./Topbar.css";
import React from "react";
import { Person, Search, Chat, Notifications } from "@mui/icons-material";
import person1 from "../../assets/persons/person1.jpeg";
export default function Topbar() {
  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Social</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon"></Search>
            <input
              placeholder="Search for a friend, post or video"
              className="searchInput"
            />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person></Person>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat></Chat>
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications></Notifications>
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src={person1} alt="" className="topbarImg" />
        </div>
      </div>
    </>
  );
}
