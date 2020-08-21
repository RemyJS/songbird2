import React from 'react'
import unknowBird from '../img/unknowBird.jpg';

export default function player() {
  return (
    <div className='player'>
      <div className='player__img'>
        <img src={unknowBird} alt="unknow-bird"/>
      </div>
      <div className='player__aside'>
        <div className="player__aside__name">
          <h1>*****</h1>
        </div>
        <div>
          <audio src=""></audio>
        </div>
      </div>
    </div>
  )
}
