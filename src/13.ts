// Function to generate a random number between 1 and 6
function getRandomNumber(): number {
  return Math.floor(Math.random() * 6) + 1;
}

// Function to generate a random dice roll result
function getDiceRollResult(): string[] {
  const roll = getRandomNumber();
  if (roll === 1) {
    return ["🎉", "You got a 1! That's a great start!"];
  } else if (roll === 2) {
    return ["😳", "You got a 2. Better luck next time!"];
  } else if (roll === 3) {
    return ["🤔", "You got a 3. Not bad, but you could do better."];
  } else if (roll === 4) {
    return ["😢", "You got a 4. That's a bummer."];
  } else if (roll === 5) {
    return ["🤷‍♂️", "You got a 5. It's a close call."];
  } else {
    return ["🎉", "You got a 6! Congratulations, you're a winner!"];
  }
}
