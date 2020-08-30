import React from "react";

export default class ControlItem extends React.Component{
  state = {
    clicked: false,
    correct: false,
  }

  checkCard =() =>{
    const {bird, onSelected, questionBirdId } = this.props;
    if (!this.state.clicked) onSelected(bird);
    
    this.setState({
      clicked: true,
    })
    if(questionBirdId === bird.id){
      this.setState({
        correct: true,
      })
    }
  }
  render(){
    const {onSelected, bird, questionBirdId} = this.props;
    const {clicked, correct } = this.state;
      return (
      <li className="control__item" onClick={ ()=>{ this.checkCard()  }}>
        {clicked ?  <span className={correct ? 'indicator indicator_correct' : 'indicator indicator_error' }></span> : <span className='indicator'></span> }
        
        {bird.name}
      </li>
    );
  }
};