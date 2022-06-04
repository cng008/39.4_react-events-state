import React, { useState } from 'react';
import getRandomAnswer from './getRandomAnswer';
import './EightBall.css';

const EightBall = answers => {
  const reset = () => {
    setAnswer('Think of a Question');
    setColor('black');
  };
  const shake = () => {
    setAnswer(getRandomAnswer().msg);
    setColor(getRandomAnswer().color);
  };
  const [answer, setAnswer] = useState('Think of a Question');
  const [color, setColor] = useState('black');

  return (
    <div>
      <div className={`eightBall ${color}`} onClick={shake}>
        <div className="center">{answer}</div>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default EightBall;
