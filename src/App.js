import React, { Component } from 'react';
import './App.css';
import NavigationBar from './NavigationBar'
import Game from './Game'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <header className="App-header">

        </header>
        <h1 className="App-title">Hot or Cold</h1>
        <Game />

      </div>
    );
  }
}

export default App;
