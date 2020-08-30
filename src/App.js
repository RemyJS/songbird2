import React from "react";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Player from "./components/player";
import Playzone from "./components/playzone";
import Nextlevel from "./components/nextlevel";
import birds from './data/birdsData';

class App extends React.Component {
  state = {
    score: 0,
    bonusScore: 5,
    round: 0,
    random: 0,
    isComplitedRound: false,
    selectedBird: null,
    questionBirdId: null,
  };
  componentDidMount() {
    this.setRandom();
  }

  setScore = () => {
    let total = this.state.score + this.state.bonusScore;
    this.setState({
      score: total,
    });
  };
  setRound = () => {
    if(!this.state.isComplitedRound) return;
    let r = this.state.round;
    if (r < 5) {
      r += 1;
    } else {
      r = 0;
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
    this.setState({
      selectedBird: bird,
    });
    console.log(bird.id, this.state.questionBirdId);
    if(bird.id === this.state.questionBirdId){
      this.setScore();
      this.checkCard();
    }else{
      let b = this.state.bonusScore - 1;
      this.setState({
        bonusScore: b,
      })
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header score={this.state.score} />
        <Navigation round={this.state.round} />
        <Player
          round={this.state.round}
          random={this.state.random}
          isComplitedRound={this.state.isComplitedRound}
          setQuestionId={this.setQuestionId}
        />
        <Playzone round={this.state.round} selectedBird={this.state.selectedBird} questionBirdId={ this.state.questionBirdId } onSelected={this.onSelected} />
        <Nextlevel setRound={this.setRound} isComplitedRound={this.state.isComplitedRound}/>
      </div>
    );
  }
}

export default App;
