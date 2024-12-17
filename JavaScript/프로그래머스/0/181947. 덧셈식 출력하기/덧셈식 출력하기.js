const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    // console.log(Number(input[0]) + Number(input[1]));
    // console.log(input.map((a) => +a))
    const [num1, num2] = input.map((a) => +a);
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
});