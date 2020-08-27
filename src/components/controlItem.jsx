import React from "react";



export default function controlItem(props) {
  return (
    <li className="control__item" onClick={props.setBird}>
      <span className="indicator"></span>
      {props.name}
    </li>
  );
}

