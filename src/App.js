import React, { Component } from 'react';
import './App.css';
import Feedback from './Feedback'
import Controls from './Controls'
import Answers from './Answers'
import NavButton from './NavButton'
import GameRules from './GameRules'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      currentGuess:[],
      correctAnswer:Math.floor(Math.random()*100),
      isExplaining:false
    }
  }
  giveFeedback(userGuess){
    const difference = Math.abs(userGuess-this.state.correctAnswer);
    if(difference ===0){
      return 'winner !'
    }
    else if(difference>=40){
      return 'freezing cold';
    }
    else if(difference>=30){
      return 'cold';
    }
    else if (difference>=20) {
      return 'warm'
    }
    else if (difference>=10) {
      return 'hotter'
    }
    else if (difference<=10){
      return 'hot!!!';
    }
  }

  restartGame(){
    console.log('restarting game');
    this.setState({currentGuess:[],correctAnswer:Math.floor(Math.random()*100)})
  }

  showInstructions(){
    this.setState({isExplaining:true})
  }
  hideInstructions(){
    this.setState({isExplaining:false})
  }
  getGuess(guess){
    if(this.state.currentGuess.includes(guess)) {
      alert('You tried that number already!')
    }
    else{
      this.setState({currentGuess:[...this.state.currentGuess,guess]})
    }
  }

  render() {
    //arr.slice(-1).pop()
    const userGuess = this.state.currentGuess[this.state.currentGuess.length-1];
    const feedBackString = this.giveFeedback(userGuess);
    const showInstructions = this.state.isExplaining;

    return (
      <div className="App">
        <GameRules showInstructions={showInstructions ? 'visible':'hidden'} />
        <div className="navbar">
          <NavButton link="#" text="How To Play" buttonFunction={() => this.showInstructions()} />
          <NavButton link="#" text="New Game" buttonFunction={() => this.restartGame()} />
        </div>
        <h1 className="App-title">Hot or Cold</h1>
          <div className="game-box">
            <Feedback feedBackString={feedBackString}/>
            <Controls lastGuess={userGuess} getGuess = {(guess)=> this.getGuess(guess)} />
            <Answers currentGueses={this.state.currentGuess} />
          </div>
      </div>
    );
  }
}

export default App;
