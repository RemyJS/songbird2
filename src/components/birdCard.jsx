import React from "react";
import Player from "./player";

export default function birdCard() {
  return (
    <div className="birdCard">
      <Player />
      <div className="birdCard__info">
          Слово «галка» произошло из старославянского языка и переводится как
          «чёрный». Этим словом часто называют воронов или других черных птиц.
          Латинское название галки «monedula» связывают со словами монета за
          любовь птицы к блестящим и ярким вещам.
      </div>
    </div>
  );
}
