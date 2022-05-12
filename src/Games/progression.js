import main from '../index.js';
import { getRandomNumb, getRandomNumber } from '../getRandomNumber.js';

const rules = 'What number is missing in the progression?';
const isProgression = (number1, number2, number3) => {
  const answe = [];
  for (let m = number1; number1 + number2 * number3 > m; m += number3) {
    answe.push(m);
  }
  const magic = getRandomNumber(number2);
  const result = String(answe[magic]);
  answe[magic] = '..';
  const qwestion = answe.join(' ');
  return [qwestion, result];
};
const progress = () => {
  const number1 = getRandomNumb(1, 100);
  const number2 = getRandomNumb(5, 16);
  const number3 = getRandomNumb(1, 11);

  const [question, correctResult] = isProgression(number1, number2, number3);
  return [question, correctResult];
};
const progression = () => {
  main(rules, progress);
};
export default progression;
