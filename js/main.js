let getRandomNumber = (min = 1, max = 10) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
};

let checkLengthLine = (line, maxLength) => {
  return (line.length <= maxLength) ? true : false
};

// getRandomNumber(1, 10);
// checkLengthLine('test', 10);