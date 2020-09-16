import React, { useState } from "react";
import "./Tweetbox.css";
import { Button, Avatar } from "@material-ui/core";
import db from "./firebase";

const Tweetbox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayNmae: "Kenny Quach",
      username: "kennymang",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/202004/725041783.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/202004/725041783.jpg" />
          <input
            placeholder="Whats happening in the gaming world?"
            type="text"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          type="submit"
          onClick={sendTweet}
          variant="outlined"
          className="sidebar__tweet"
          fullWidth
        >
          Bark
        </Button>
      </form>
    </div>
  );
};

export default Tweetbox;
