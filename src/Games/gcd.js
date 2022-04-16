import readlineSync from 'readline-sync';
import youName from '../cli.js';
import { getRandomNumb } from '../getRandomNumber.js';

const nod = () => {
  const name = youName();
  let result = 0;
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomNumb(1, 51);
    const number2 = getRandomNumb(1, 51);
    console.log(`Question: ${number1} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    const answerNumbers = Number(answer);
    for (let m = number1; m > 0; m -= 1) {
      if ((number1 % m === 0) && (number2 % m === 0)) {
        result = m;
        m = 0;
      } else if (m === 1) {
        result = 1;
      }
    }
    if (result === answerNumbers) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }console.log(`Congratulations, ${name}!`);
};
export default nod;
