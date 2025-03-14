// Function to generate a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Function to generate a random color
function getRandomColor() {
  const colors = ['red', 'blue', 'green', 'yellow'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Function to generate a random animal
function getRandomAnimal() {
  const animals = ['cat', 'dog', 'bird', 'elephant', 'monkey'];
  return animals[Math.floor(Math.random() * animals.length)];
}
