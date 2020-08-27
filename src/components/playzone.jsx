import React from 'react'
import Control from './control';
import Birdcard from './birdCard';

export default function playzone(props) {
  return (
    <div className='playzone'>
      <Control round={props.round}/>
      <Birdcard />
    </div>
  )
}
