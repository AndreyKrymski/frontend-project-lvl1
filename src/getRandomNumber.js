const getRandomNumber = (dozens = 1000) => {
  const number = Math.floor(Math.random() * dozens);
  return number;
};
export default getRandomNumber;
