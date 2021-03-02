import React from "react";
import classes from "./UpperMediaSection.module.css";
import Player from "../ReactPlayer/Player";
import myPhoto from "../../assets/images/obrazek_desktop.jpg";
import myPhotoMobile from "../../assets/images/obrazek_mobile.jpg";
import getWindowDimensions from "../../utils/WindowDimensions";

const UpperMediaSection = () => {
  const width = getWindowDimensions().width;
  let setSrc = "";
  if (width < 1024) {
    setSrc = myPhotoMobile;
  } else setSrc = myPhoto;

  return (
    <div className={classes.MediaContainer}>
      <div className={classes.Video}>
        <Player />
      </div>

      <div className={classes.RightSide}>
        <div className={classes.TextContainer}>
          <div className={classes.TextPosition}>
            <h3>Tytuł</h3>
            <p>trochę tekstu zwykłego</p>
            <button type="button">
              <a href="">link</a>
            </button>
          </div>
        </div>

        <div className={classes.ImageContainer}>
          <img src={setSrc} alt="perfect photo" />
        </div>
      </div>

      <div className={classes.PromoContainer}>
        <div className={classes.Promo}>Tekst promocyjny</div>
        <div className={classes.Promo}>
          Tekst promocyjny
          <span className={classes.Dot}></span>
        </div>
        <div className={classes.Promo}>Tekst promocyjny</div>
      </div>
    </div>
  );
};

export default UpperMediaSection;
