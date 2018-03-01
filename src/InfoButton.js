import React from 'react';
import './InfoButton.css'
export default function InfoButton(props){

  return(
    <a href={props.link} onClick={(e) => {
      e.preventDefault();
      props.restartGame();
      console.log('click')
    }}>{props.text}</a>
  )
}
