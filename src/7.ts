const getRandomInt = (max: number) => {
  // Randomly select an integer between 0 and the max value
  return Math.floor(Math.random() * Math.floor(max));
};

const getRandomNumberBetween = (min: number, max: number) => {
  // Randomly select a number between the min and max values
  const randomInt = getRandomInt(max - min);
  return randomInt + min;
};
