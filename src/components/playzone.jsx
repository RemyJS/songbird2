import React from 'react'
import Control from './control';
import Birdcard from './birdCard';

export default function playzone() {
  return (
    <div className='playzone'>
      <Control />
      <Birdcard />
    </div>
  )
}
