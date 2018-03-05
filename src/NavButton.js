import React from 'react';
import './NavButton.css'
export default function NavButton(props){

  return(
    <a href={props.link} onClick={(e) => {
      e.preventDefault();
      props.buttonFunction();
    }}>{props.text}</a>
  )
}
