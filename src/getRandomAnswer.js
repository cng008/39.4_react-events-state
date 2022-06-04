import answers from './answers';

/** get a random answer */
const getRandomAnswer = () => {
  const idx = Math.floor(Math.random() * answers.length);
  return answers[idx];
};

export default getRandomAnswer;
