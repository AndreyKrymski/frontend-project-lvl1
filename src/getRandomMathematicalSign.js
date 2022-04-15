const getRandomMathematicalSign = () => {
  const matthematicalSign = ['+', '-', '*'];
  const number = Math.floor(Math.random() * 3);
  const answer = matthematicalSign[number];
  return answer;
};
export default getRandomMathematicalSign;
