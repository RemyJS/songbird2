import React from "react";
import Item from './controlItem';
import birds from '../data/birdsData'

export default function control(props) {
  const items = birds[props.round].map((bird) => {
    return <Item key={bird.id} onSelected={props.onSelected} bird={bird} questionBirdId={ props.questionBirdId }></Item>
  });
  return (
    <div className="control__wrapper">
      <ul className="control">
        {items}
      </ul>
    </div>
  );
}
