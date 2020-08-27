import React from 'react'

export default function nextlevel(props) {
  return (
  <button className='nextLevel' onClick={props.setRound}>Next Level{props.round}</button>
  )
}
