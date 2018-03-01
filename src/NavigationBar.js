import React from 'react';
import './NavigationBar.css';
import InfoButton from './InfoButton';
export default function NavigationBar(props){
  return(
    <div className="navbar">
      <InfoButton className="info-button" text="What?" link="#that" />
      <InfoButton text ="+ New Game" link="#this" restartGame={() => props.restartGame} />
    </div>
  )
}
