import React from 'react';
import ornitolog from '../img/or.jpg'

export default function final(props) {
  const {score, restGame} = props;
  const flawless = score === 30;
  return (
    <div className='final'>
      <h1>{ flawless ? 'Чистая Победа' : 'Поздравляем'}</h1>
      { flawless ? <div><img src={ornitolog} alt="flawless victory"/></div> : <div>Вы прошли викторину и набрали {score} из 30 возможных баллов</div>}
     
      <button className='final__rest' onClick={restGame}>Начать сначала</button> 
    </div>
  )
}
