import React from 'react'

export default function nextlevel(props) {
  return (
  <button className={props.isComplitedRound ? 'nextLevel nextLevel_next': 'nextLevel'} onClick={props.setRound}>Далее</button>
  )
}
