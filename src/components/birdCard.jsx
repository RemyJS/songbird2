import React from "react";
import Player from "./player";

export default function birdCard(props) {
    const { selectedBird } = props;
    return (
      <div className="birdCard">
        { selectedBird && <Player selectedBird={selectedBird}/>}
        <div className="birdCard__info">
            { selectedBird && selectedBird.description ? selectedBird.description :  'Выберите птицу из списка'}
        </div>
      </div>
    );
}
