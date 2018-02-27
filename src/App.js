import React, { Component } from 'react';
import './App.css';
import NavigationBar from './NavigationBar'
import Feedback from './Feedback.js'
import Controls from './Controls.js'
import Answers from './Answers.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <h1 className="App-title">Hot or Cold</h1>
          <div className="game-box">
            <Feedback />
            <Controls />
            <Answers />
          </div>
      </div>
    );
  }
}

export default App;
