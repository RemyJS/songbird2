import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import unknowBird from "../img/unknowBird.jpg";
import birds from '../data/birdsData'

export default function player(props) {
  const { round = 0 , random = 0} = props;
  const {id, name, species, audio, image} = birds[round][random];
  // props.setQuestionId(id);
  if(props.isComplitedRound){
    return (
      <div className="player">
        <div className="player__img">
          <img src={image} alt={name} />
        </div>
        <div className="player__aside">
          <div className="player__aside__name">
            <h1>{name}</h1>
          </div>
          <div className="player__audio">
            <AudioPlayer
              src={audio}
            />
          </div>
        </div>
      </div>
    );
  } else if (props.selectedBird) {
    const {id, name, species, audio, image } = props.selectedBird;
    return (
      <div className="player">
        <div className="player__img">
          <img src={image} alt={name} />
        </div>
        <div className="player__aside">
          <div className="player__aside__name">
            <h1>{name}</h1>
          </div>
          <div className="player__audio">
            <AudioPlayer
              src={audio}
            />
          </div>
        </div>
      </div>
    );
  }else {
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
              src={audio}
            />
          </div>
        </div>
      </div>
    );
  }

}
