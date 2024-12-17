// 12:50 ~ 12:56
function solution(arr, n) {
    // length가 홀수면 짝수 인덱스 + n
    // length가 짝수면 홀수 인덱스 + n
    if(arr.length % 2 === 0) return arr.map((v, i) => i % 2 !== 0? v + n : v);
    else return arr.map((v, i) => i % 2 === 0? v + n : v);
}