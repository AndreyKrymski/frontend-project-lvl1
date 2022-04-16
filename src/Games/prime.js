import readlineSync from 'readline-sync';
import youName from '../cli.js';
import { getRandomNumb } from '../getRandomNumber.js';

const prime = () => {
  const name = youName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumb(2, 101);
    console.log(`Question: ${number}`);
    let result = '';
    const answer = readlineSync.question('Your answer: ');
    for (let m = 2; number > m; m += 1) {
      if (number % m === 0) {
        result = 'no';
        m = number;
      } else {
        result = 'yes';
      }
    }
    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }console.log(`Congratulations, ${name}!`);
};
export default prime;
