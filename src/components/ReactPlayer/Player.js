import React from "react";
import ReactPlayer from "react-player";
import classes from "./Player.module.css";
import myVideo from "../../assets/videos/filmik_desktop.mp4";
import myVideoSmall from "../../assets/videos/filmik_mobile.mp4";
import getWindowDimensions from "../../utils/WindowDimensions";

const Player = () => {
  const width = getWindowDimensions().width;
  let setUrl = "";
  if (width < 1024) {
    setUrl = myVideoSmall;
  } else setUrl = myVideo;

  return (
    <div className={classes.PlayerContainer}>
      <ReactPlayer
        className={classes.ReactPlayer}
        url={setUrl}
        controls
        muted
      />
    </div>
  );
};

export default Player;
