import { getRandomNumber } from '../getRandomNumber.js';
import getRandomMathematicalSign from '../getRandomMathematicalSign.js';
import main from '../index.js';

const rules = 'What is the result of the expression?';
const isCalc = (number1, number2, sign) => {
  let result = 0;
  if (sign === '*') {
    result = number1 * number2;
  } else if (sign === '+') {
    result = number1 + number2;
  } else {
    result = number1 - number2;
  }
  return String(result);
};

const calculet = () => {
  const number1 = getRandomNumber(11);
  const number2 = getRandomNumber(11);
  const sign = getRandomMathematicalSign();

  const question = `Question: ${number1} ${sign} ${number2}`;
  const correctResult = isCalc(number1, number2, sign);
  return [question, correctResult];
};
const calc = () => {
  main(rules, calculet);
};
export default calc;
