import React from 'react';
import './Feedback.css'

export default function Feedback(props){
  return (
    <div className="feedback-component">
      <h2>{props.feedBackString||'Make Your Guess'}</h2>
    </div>
  );
}
