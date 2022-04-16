import readlineSync from 'readline-sync';
import youName from '../cli.js';
import { getRandomNumb, getRandomNumber } from '../getRandomNumber.js';

const progression = () => {
  const name = youName();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomNumb(1, 100);
    const number2 = getRandomNumb(5, 16);
    const number3 = getRandomNumb(1, 11);
    const answe = [];
    for (let m = number1; number1 + number2 * number3 > m; m += number3) {
      answe.push(m);
    }
    const magic = getRandomNumber(number2);
    const result = answe[magic];
    answe[magic] = '..';
    const qwestion = answe.join(' ');
    console.log(`Question: ${qwestion}`);
    const answer = (readlineSync.question('Your answer: '));
    const answerNumbers = Number(answer);
    if (result === answerNumbers) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }console.log(`Congratulations, ${name}!`);
};
export default progression;
