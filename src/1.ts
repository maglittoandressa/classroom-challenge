// Function to create a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Function to generate a random string of length 5
function getRandomString() {
  const possibleChars = 'abcdefghijklmnopqrstuvwxyz';
  let randomString = '';
  for (let i = 0; i < 5; i++) {
    randomString += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }
  return randomString;
}

// Function to generate a random boolean value
function getRandomBoolean() {
  return Math.round(Math.random()) === 1 ? true : false;
}

// Function to generate a random date between 2000 and 2050
function getRandomDate() {
  const start = new Date('January 1, 2000');
  const end = new Date('December 31, 2050');
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
