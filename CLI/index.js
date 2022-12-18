const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  
});
let result = [];
let resultSet;
let options = "What to do with it: \n1-Display words alphabetically\n2-Display numbers from smallest to largest\n3-Display numbers from largest to smallest\n4-Display words by length\n5-Display only unique words\n6-Display only unique values\nexit-to exit\n ";
const getArrayOfStrings = function (array) {
  let arrayOfStrings = [];

  for (let key of array) {
    if (isNaN(+key)) arrayOfStrings.push(key);
  };
  return arrayOfStrings;

};
const getArrayOfNumbers = function (array) {
  let ArrayOfNumbers = [];

  for (let key of array) {
    if (!isNaN(+key)) ArrayOfNumbers.push(key);
  };
  return ArrayOfNumbers;

};

const sortSli = function () {
  rl.question("Enter multiple words and numbers separated by spaces ", answer => {
    let arrayOfSample = answer.split(" ");
      console.log(`Received: ${arrayOfSample}`);
  

    rl.question(options, answers => {
      
      switch (answers) {
        case "1":
          result = getArrayOfStrings(arrayOfSample);
          result.sort();
          console.log(`${result}`);
          sortSli();
          break;
        case "2":
          result = getArrayOfNumbers(arrayOfSample);
          result.sort((a, b) => a - b);
          console.log(`${result}`);
          sortSli();
          break;
        case "3":
          result = getArrayOfNumbers(arrayOfSample);
          result.sort((a, b) => b - a);
          console.log(`${result}`);
          sortSli();
          break;
        case "4":
          result = getArrayOfStrings(arrayOfSample);
          result.sort((a, b) => a.length - b.length);
          console.log(`${result}`);
          sortSli();
          break;
        case "5":
          result = getArrayOfStrings(arrayOfSample);
          resultSet = new Set();
          for (let key of result) resultSet.add(key);
          result = Array.from(resultSet);
          console.log(`${result}`);
          sortSli();
          break;
        case "6":          
          resultSet = new Set();
          for (let key of arrayOfSample) resultSet.add(key);
          result = Array.from(resultSet);
          console.log(`${result}`);
          sortSli();
          break;
        case "exit":          
          rl.close();
          break;
        default:
          console.log("unknow command");
          sortSli();
        
      }
    });
  });
};
sortSli();