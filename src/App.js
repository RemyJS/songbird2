import React from "react";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Player from "./components/player";
import Playzone from "./components/playzone";
import Nextlevel from "./components/nextlevel";
import Final from './components/final';
import birds from "./data/birdsData";
import correctSound from './audio/correct.mp3';
import errorSound from './audio/error.mp3';
import finalSound from './audio/success.mp3';
import mkSound from './audio/flawless.mp3';


class App extends React.Component {
  state = {
    score: 0,
    bonusScore: 5,
    round: 0,
    random: 0,
    isComplitedRound: false,
    selectedBird: null,
    questionBirdId: null,
    birds: [],
    gameOver: false,
    sound: null,
  };

  componentDidMount() {
    this.setRandom();
    this.setBirds();
  }

  setScore = () => {
    let total = this.state.score + this.state.bonusScore;
    this.setState({
      score: total,
    });
  };

  setRound = () => {
    if (!this.state.isComplitedRound) return;
    let r = this.state.round;
    if (r < 5) {
      r += 1;
    } else {
      this.showResult();
    }
    this.setState({
      round: r,
      isComplitedRound: false,
      bonusScore: 5,
      selectedBird: null,
    });
    this.setRandom();
  };
  
  setRandom = () => {
    const rand = Math.floor(Math.random() * 6);
    const questionId = birds[this.state.round][rand].id;
    this.setState({
      random: rand,
      questionBirdId: questionId,
    });
  };

  checkCard = () => {
    this.setState({
      isComplitedRound: true,
    });
  };

  onSelected = (bird) => {
    const {birds, round} = this.state;
    
    if (bird.id === this.state.questionBirdId) {
      this.setScore();
      this.checkCard();
      bird.corect = true;
    } else if (!bird.clicked){
      let b = this.state.bonusScore - 1;
      this.setState({
        bonusScore: b,
      });
    }
    bird.clicked = true;
    
    birds[round][bird.id - 1] = bird;
    this.setState({
      selectedBird: bird,
      birds: birds,
    });
    setTimeout(() => {this.playSound()}, 200);
  };
  
  showResult = () => {
    this.setState({
      gameOver: true,
    })
    setTimeout(() => {this.playSound()}, 200);
  };

  restGame = () => {
    this.setState({
      score: 0,
      bonusScore: 5,
      round: 0,
      isComplitedRound: false,
      selectedBird: null,
      questionBirdId: null,
      gameOver: false,
    });
    this.setBirds();
    this.setRandom();
  }

  setBirds = () => {
    const mappedBirds = birds.map((groupBirds) => {
      return groupBirds.map((bird) => ({
        ...bird,
        corect: false,
        clicked: false,
      }));
    });
    this.setState({
      birds: mappedBirds,
    });
  }

  playSound = () => {
    const {gameOver, questionBirdId, selectedBird } = this.state;
    if(gameOver){
      const audio = new Audio(finalSound);
      audio.play();
      if (this.state.score === 30){
        const audio2 = new Audio(mkSound);
        setTimeout(() => {audio2.play()}, 2500);  
      }
    } else {
      if (selectedBird.id === questionBirdId){
        const audio = new Audio(correctSound);
        audio.play();
      }else {
        const audio = new Audio(errorSound);
        audio.play();
      }
    }
  }
  
  render() {
    const {
      score,
      round,
      random,
      birds,
      isComplitedRound,
      selectedBird,
      questionBirdId,
      gameOver
    } = this.state;
    const isBirds = birds.length;
    if (!gameOver) {
      return (
        <div className="wrapper">
          <Header score={score} />
          <Navigation round={round} />
          <Player
            round={round}
            random={random}
            isComplitedRound={isComplitedRound}
            setQuestionId={this.setQuestionId}
          />
          <Playzone
            round={round}
            selectedBird={selectedBird}
            questionBirdId={questionBirdId}
            onSelected={ this.onSelected }
            birds={isBirds? birds[round] : []}
          />
          <Nextlevel setRound={this.setRound} isComplitedRound={isComplitedRound}/>
        </div>
      );
    } else {
      return (
        <div className="wrapper">
          <Header score={score} />
          <Navigation round={round} />
          <Final score={this.state.score} restGame={this.restGame}/>
        </div>
      );
    } 

  }
}

export default App;
