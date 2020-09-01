import React from 'react'
import Control from './control';
import Birdcard from './birdCard';

export default function playzone(props) {
  const {round, checkCard, onSelected, questionBirdId, birds, selectedBird} = props;
  return (
    <div className='playzone'>
      <Control 
      round={round} 
      checkCard={checkCard} 
      onSelected={onSelected} 
      questionBirdId={questionBirdId}
      birds={birds}/>
      <Birdcard selectedBird={ selectedBird }/>
    </div>
  )
}
