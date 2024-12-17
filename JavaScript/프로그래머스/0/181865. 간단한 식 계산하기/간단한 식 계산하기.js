// 22:20 ~  
function solution(binomial) {
    const binomialArr = binomial.split(' ');
    const [a, op, b] = binomialArr;
    // if(op === "+")
    //     return +a + +b;
    // else if(op === "-")
    //     return +a - +b;
    // else if(op === "*")
    //     return +a * +b;
   return op === "+"? +a + +b : op === "-"? +a - +b : +a * +b;
}