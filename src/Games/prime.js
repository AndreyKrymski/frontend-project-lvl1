import { getRandomNumb } from '../getRandomNumber.js';
import main from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let result = '';

  for (let m = 2; number > m; m += 1) {
    if (number % m === 0) {
      result = 'no';
      m = number;
    } else {
      result = 'yes';
    }
  }

  return result;
};

const prime = () => {
  const number = getRandomNumb(2, 101);

  const question = `Question: ${number}`;
  const correctResult = isPrime(number);
  return [question, correctResult];
};

const startPrime = () => {
  main(rules, prime);
};

export default startPrime;
