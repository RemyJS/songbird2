import React from 'react';
import Header from './components/header';
import Navigation from './components/navigation';
import Player from './components/player';


function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Navigation />
      <Player />
    </div>
  );
}

export default App;
