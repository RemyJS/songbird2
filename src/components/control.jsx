import React from "react";
import ControlItem from './controlItem';


export default function control(props) {
  const items = props.birds.map((bird) => {
    return <ControlItem key={bird.id}  bird={bird} onSelected={props.onSelected} ></ControlItem>
  });
  return (
    <div className="control__wrapper">
      <ul className="control">
        {items}
      </ul>
    </div>
  );
}
