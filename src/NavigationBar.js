import React from 'react';
import './NavigationBar.css'
export default function NavigationBar(){
  return(
    <nav>
      <ul className="nav-ul" >
        <li><a href="#What">What?</a></li>
        <li><a href="#New">+ New Game</a></li>
      </ul>
    </nav>
  )
}
