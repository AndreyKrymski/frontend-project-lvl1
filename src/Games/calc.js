import readlineSync from 'readline-sync';
import { getRandomNumber } from '../getRandomNumber.js';
import youName from '../cli.js';
import getRandomMathematicalSign from '../getRandomMathematicalSign.js';

const calc = () => {
  const name = youName();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(11);
    const number1 = getRandomNumber(11);
    let result = 0;
    const sign = getRandomMathematicalSign();
    console.log(`Question: ${number} ${sign} ${number1}`);
    const answer = (readlineSync.question('Your answer: '));
    const answerNumbers = Number(answer);
    if (sign === '*') {
      result = number * number1;
    } else if (sign === '+') {
      result = number + number1;
    } else {
      result = number - number1;
    }
    if (result === answerNumbers) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log(`Congratulations, ${name}!`);
  }
};
export default calc;
