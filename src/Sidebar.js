import React from "react";
import "./Sidebar.css";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailIcon from "@material-ui/icons/Mail";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ListIcon from "@material-ui/icons/List";
import MoreIcon from "@material-ui/icons/More";
import { Button } from "@material-ui/core";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <VideogameAssetIcon
        style={{
          fontSize: 60,
          color: "var(--barker-color)",
          marginLeft: "20px",
          cursor: "pointer",
        }}
      />
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={ExploreIcon} text="Explore" />
      <SidebarOption Icon={NotificationsIcon} text="Notifications" />
      <SidebarOption Icon={MailIcon} text="Messages" />
      <SidebarOption Icon={BookmarkIcon} text="Bookmarks" />
      <SidebarOption Icon={ListIcon} text="Lists" />
      <SidebarOption Icon={NotificationsIcon} text="Profile" />
      <SidebarOption Icon={MoreIcon} text="More" />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Bark
      </Button>
    </div>
  );
};

export default Sidebar;
