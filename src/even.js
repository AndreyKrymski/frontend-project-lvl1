import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 1000);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes') || (answer === 'no')) {
      if ((number % 2 === 0) && (answer === 'yes')) {
        if (i !== 2) {
          console.log('Correct!');
        } else {
          console.log('Correct!');
          console.log(`Congratulations, ${name}`);
        }
      } else if ((number % 2 !== 0) && (answer === 'no')) {
        if (i !== 2) {
          console.log('Correct!');
        } else {
          console.log('Correct!');
          console.log(`Congratulations, ${name}`);
        }
      } else if (number % 2 === 0) {
        console.log(`${answer} is wrong answer;(. Correct answer was 'yes'.`);
        console.log(`Let's try again, ${name}!`);
        i = 3;
      } else {
        console.log(`${answer} is wrong answer;(. Correct answer was 'no'.`);
        console.log(`Let's try again, ${name}!`);
        i = 3;
      }
    } else if (number % 2 === 0) {
      console.log(`${answer} is wrong answer;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${name}!`);
      i = 3;
    } else {
      console.log(`${answer} is wrong answer;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${name}!`);
      i = 3;
    }
  }
};
export default brainEven;
