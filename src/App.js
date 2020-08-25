import React from 'react';
import Header from './components/header';
import Navigation from './components/navigation';
import Player from './components/player';
import Playzone from './components/playzone';
import Nextlevel from './components/nextlevel';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Navigation />
      <Player />
      <Playzone />
      <Nextlevel />
    </div>
  );
}

export default App;
