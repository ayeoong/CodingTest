// 15:20 ~ 29
function solution(n, control) {
    const data = { w: 1, s: -1, d: 10, a: -10 }
    
    return [...control].reduce((a, c) => a += data[c], n);
}