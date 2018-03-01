import React from 'react';
import './Answers.css'
export default function Answers(props){
  const exampleData = props.currentGueses;
  const history = exampleData.map((guess,index) =>(
    <li key={index}>{guess}</li>
  ));

  return (
    <div className="user-answers">
      <ul>
        {history}
      </ul>
    </div>
  );
}
