import React from 'react'
import './Controls.css'
export default function Controls(props){

  return (

    <div className="game-controls">
      <form onSubmit={(e)=>{
        e.preventDefault();
        props.getGuess(e.target.guess.value)
        e.target.reset()}}>
        <input name="guess" type="number" min={1} max={100} placeholder="Enter your Guess" required />
        <input type="submit" className="game-button" />
      </form>
      <span className="guess-string">Last Guess number # <span className="guess-number">{props.lastGuess}</span></span>
    </div>
  );
}
