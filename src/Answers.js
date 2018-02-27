import React from 'react';
import './Answers.css'
export default function Answers(){
  const exampleData = [12,42,61,35]
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
