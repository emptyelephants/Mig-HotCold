import React from 'react';
import './NavButton.css'
export default function NavButton(props){

  return(
    <a href={props.link} onClick={(e) => {
      e.preventDefault();
      props.buttonFunction();
      console.log('click')
    }}>{props.text}</a>
  )
}
