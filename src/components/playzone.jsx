import React from 'react'
import Control from './control';
import Birdcard from './birdCard';

export default function playzone(props) {
  return (
    <div className='playzone'>
      <Control round={props.round} checkCard={props.checkCard} onSelected={props.onSelected} questionBirdId={ props.questionBirdId }/>
      <Birdcard selectedBird={ props.selectedBird }/>
    </div>
  )
}
