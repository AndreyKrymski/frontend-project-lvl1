import readlineSync from 'readline-sync';
import youName from '../cli.js';
import { getRandomNumber } from '../getRandomNumber.js';

const brainEven = () => {
  const name = youName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else {
      if (number % 2 === 0) {
        console.log(`${answer} is wrong answer. Correct answer was 'yes'.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
      console.log(`${answer} is wrong answer. Correct answer was 'no'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }console.log(`Congratulations, ${name}!`);
};
export default brainEven;
