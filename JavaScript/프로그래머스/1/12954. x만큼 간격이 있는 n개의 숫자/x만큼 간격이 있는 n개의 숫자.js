function solution(x, n) {
    return new Array(n).fill(x).map((a, i) => a + (a * i));
    // start: x
    // x, x + x, x + x + x 
    // x의 배수만큼
//     let arr = [];
//     for(let i=1; i<=n; i++) {
//         arr.push(x * i);
//     }
    
//     return arr;
}