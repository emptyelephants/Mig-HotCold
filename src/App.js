import React, { Component } from 'react';
import './App.css';
import NavigationBar from './NavigationBar'
import Feedback from './Feedback.js'
import Controls from './Controls.js'
import Answers from './Answers.js'

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

      return 'Winner !'
    }
    else if(difference>=40){
      return 'freezing';
    }
    else if(difference>=30){
      return 'cold';
    }
    else if (difference>=20) {
      return 'warm'
    }
    else if (difference>=10) {
      return 'hotter...'
    }
    else if (difference<=10){
      return 'hot!!!';
    }
  }
  restartGame(){
    console.log('restarting game');
    this.setState({currentGuess:[],correctAnswer:Math.floor(Math.random()*100)})
  }
  render() {
    const userGuess = this.state.currentGuess[this.state.currentGuess.length-1];
    const feedBackString = this.giveFeedback(userGuess);

    return (
      <div className="App">
        <NavigationBar testFunc={() => this.restartGame()} />
        <h1 className="App-title">Hot or Cold</h1>
          <div className="game-box">
            <Feedback feedBackString={feedBackString}/>
            <Controls lastGuess={userGuess} getGuess = {(guess)=> {
              this.setState({currentGuess:[...this.state.currentGuess,guess]})}} />
            <Answers currentGueses={this.state.currentGuess} />
          </div>
      </div>
    );
  }
}

export default App;
