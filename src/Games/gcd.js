import main from '../index.js';
import { getRandomNumb } from '../getRandomNumber.js';

const rules = 'Find the greatest common divisor of given numbers.';

const isGcd = (number1, number2) => {
  let result = '';
  for (let m = number1; m > 0; m -= 1) {
    if ((number1 % m === 0) && (number2 % m === 0)) {
      result = m;
      m = 0;
    } else if (m === 1) {
      result = 1;
    }
  }
  return String(result);
};

const gcd = () => {
  const number1 = getRandomNumb(1, 51);
  const number2 = getRandomNumb(1, 51);

  const question = `Question: ${number1} ${number2}`;
  const correctResult = isGcd(number1, number2);
  return [question, correctResult];
};

const nod = () => {
  main(rules, gcd);
};
export default nod;
