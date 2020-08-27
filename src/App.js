import React from 'react';
import Header from './components/header';
import Navigation from './components/navigation';
import Player from './components/player';
import Playzone from './components/playzone';
import Nextlevel from './components/nextlevel';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      score: 0,
      round: 0,
    }
  }
  setScore = () => {
    this.setState({
      score: 5,
    });
  }
  setRound = () => {
    let r = this.state.round;
    if (r < 5){
      r += 1;
    } else {
      r = 0;
    }
    this.setState({
      round: r,
    });
  }
  render(){
    return (
      <div className='wrapper'>
        <Header score={this.state.score} />
        <Navigation />
        <Player />
        <Playzone round={this.state.round}/>
        <Nextlevel setRound={this.setRound} round={this.state.round}/>
      </div>
    );
  }
}


export default App;
