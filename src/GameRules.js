import React from 'react';

import './GameRules.css';

export default function GameRules(props) {
  return (
    <section id="what" tabIndex="-1" style={{'visibility':`${props.showInstructions}`}}>
      <h2>What do I do?</h2>
      <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
      <ol>
        <li>I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
        <li>You need to <strong>guess</strong> until you can find the hidden secret number.</li>
        <li>You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
      </ol>
    </section>
  )
}