import React, { useState } from 'react';
import getRandomAnswer from './getRandomAnswer';
import './EightBall.css';

const EightBall = answers => {
  const shake = () => {
    setAnswer(getRandomAnswer().msg);
    setColor(getRandomAnswer().color);
  };
  const [answer, setAnswer] = useState('Think of a Question');
  const [color, setColor] = useState('black');

  return (
    <div className={`eightBall ${color}`} onClick={shake}>
      <div>{answer}</div>
    </div>
  );
};

export default EightBall;
