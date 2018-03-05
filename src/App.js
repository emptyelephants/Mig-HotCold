import React, { Component } from 'react';
import './App.css';
import Feedback from './Feedback'
import Controls from './Controls'
import Answers from './Answers'
import NavButton from './NavButton'
import GameRules from './GameRules'
import {connect} from 'react-redux'

import {addGuess, restartGame, showInstructions} from './actions'


class App extends Component {

  giveFeedback(userGuess){
    const difference = userGuess ? Math.abs(userGuess-this.props.correctAnswer):undefined;
    switch (true) {
      case(difference === 0):
        return'You Win!';
      case (difference>=40):
        return'freezing cold';
      case (difference>=30):
        return'cold';
      case (difference>=20):
        return'warm';
      case (difference>=10):
        return'hotter';
      case (difference<=10):
        return'HOT!!';
      default:
        return 'Make Your Guess';
    }

  }

  getGuess(guess){
    this.props.dispatch(addGuess(parseInt(guess,10)));
  }
  restartGame(){
    this.props.dispatch(restartGame());
  }
  handleInstructions(){
    this.props.dispatch(showInstructions())
  }

  render() {
    const gameRules = this.props.isInstructing ? <GameRules handleClick={() => this.handleInstructions()} /> : null;
    return (
      <div className="App">
        {gameRules}
        <div className="navbar">
          <NavButton link="#" text="How To Play" buttonFunction={() => this.handleInstructions()} />
          <NavButton link="#" text="New Game" buttonFunction={() => this.restartGame()} />
        </div>
        <h1 className="App-title">Hot or Cold</h1>
          <div className="game-box">
            <Feedback feedBackString={this.giveFeedback(this.props.currentGuess)}/>
            <Controls lastGuess={this.props.currentGuess} getGuess = {(e) =>this.getGuess(e)} />
            <Answers currentGueses={this.props.answers} />
          </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  answers:state.answers,
  currentGuess:state.currentGuess,
  correctAnswer:state.correctAnswer,
  isInstructing:state.isInstructing

})

export default connect(mapStateToProps)(App);
