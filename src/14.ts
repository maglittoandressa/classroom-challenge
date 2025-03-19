  const getRandomTsCode = () => {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
  
    // Create a new array with the random number as its length
    const codeArray = Array(randomNumber).fill("");
  
    // Generate a random string of characters for each empty space in the array
    return codeArray.map((_) => Math.random().toString(36).substr(2)).join("\n");
  };
  
  console.log(getRandomTsCode());