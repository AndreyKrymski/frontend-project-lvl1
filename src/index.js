import readlineSync from 'readline-sync';
import youName from './cli.js';

const main = (rules, asdf) => {
  const name = youName();
  console.log(rules);

  for (let i = 0; i < 3; i += 1) {
    const [question, result] = asdf();

    console.log(question);
    const answer = readlineSync.question('Your answer: ');

    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default main;
