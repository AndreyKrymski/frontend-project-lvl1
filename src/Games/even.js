import { getRandomNumber } from '../getRandomNumber.js';
import main from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isBrain = (number1) => {
  let result = '';
  if (number1 % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

const brain = () => {
  const number1 = getRandomNumber(100);

  const question = `Question: ${number1}`;
  const correctResult = isBrain(number1);
  return [question, correctResult];
};

const brainEven = () => {
  main(rules, brain);
};
export default brainEven;
