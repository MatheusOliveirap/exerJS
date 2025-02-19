const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite seu salario: ", (salario) => {

const aumento = parseFloat(salario) * 0.15;
console.log("Salario final: " + aumento);

rl.close();
 });