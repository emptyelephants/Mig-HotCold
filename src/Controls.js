import React from 'react'
import './Controls.css'
export default function Controls(){

  return (
    <div className="game-controls">
      <form>
        <input type="text" placeholder="Enter your Guess" />
        <input type="submit" className="game-button" />
      </form>
      <span className="guess-number">Guess number #0</span>
    </div>
  );
}
