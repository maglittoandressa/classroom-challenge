// Define a function to get a random integer between 1 and 6
function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Use the function to get a random integer between 1 and 6
const roll = getRandomInt(1, 6);

console.log(`You rolled a ${roll}`);
