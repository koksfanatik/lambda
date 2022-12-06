const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  //prompt: "Put something",
});

const sortSli = function () {
  rl.question("Enter multiple words and numbers separated by spaces ", answer => {
    let arrayOfSample = answer.split(" ");
    console.log(`Received: ${arrayOfSample}`);
  

    rl.question("What to do with it ", answer => {
      switch (answer) {
        case "1":
          console.log(`Received: ${answer}`);
          sortSli();
          break;
        case "2":
          console.log(`Received: ${answer}`);
          sortSli();
          break;
        case "3":
          console.log(`Received: ${answer}`);
          sortSli();
          break;
        default:
          break;
      }
    });
  });
};
sortSli();







/*rl.prompt();

rl.on('line', (line) => {
  line = line.trim();
  let arrayOfSample = line.split(" ");

  console.log(`Received: ${arrayOfSample}`);
  rl.setPrompt("davai ewe")
  rl.prompt();
});
*/