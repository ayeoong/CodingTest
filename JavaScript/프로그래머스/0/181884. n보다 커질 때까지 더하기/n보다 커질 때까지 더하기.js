// 23:27 ~ 23:42
const solution = (numbers, n) => numbers.reduce((a, c) => n < a? a :  a + c, 0 );