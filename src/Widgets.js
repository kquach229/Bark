import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Barker" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>Whats Happening</h2>
        <TwitterTweetEmbed tweetId={"1128856208142561280"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="RyanHickmam"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"www.nba.com"}
          options={{ text: "#reactjs is awesome", via: "Slides" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
