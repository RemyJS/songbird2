import React from "react";


export default function ControlItem (props) {
  const { bird, onSelected} = props;
  return (
    <li className="control__item" onClick = {() => { onSelected(bird) }}>
      {bird.clicked ? 
        <span className={bird.corect ? 'indicator indicator_correct': 'indicator indicator_error'}></span>:
        <span className='indicator'></span>}
      {bird.name}
    </li>
  );
}
