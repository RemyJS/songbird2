import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import unknowBird from "../img/unknowBird.jpg";
import frExample from '../audio/fr.mp3';

export default function player() {
  return (
    <div className="player">
      <div className="player__img">
        <img src={unknowBird} alt="unknow-bird" />
      </div>
      <div className="player__aside">
        <div className="player__aside__name">
          <h1>*****</h1>
        </div>
        <div className="player__audio">
          <AudioPlayer
            autoPlay
            src={frExample}
            onPlay={(e) => console.log("onPlay")}
            // other props here
          />
        </div>
      </div>
    </div>
  );
}
