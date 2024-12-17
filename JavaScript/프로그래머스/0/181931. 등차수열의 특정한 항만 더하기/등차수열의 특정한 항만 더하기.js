// 15:30 ~ 
function solution(a, d, included) {
    return included.reduce((acc, cur, idx) => included[idx]? acc += idx * d + a : acc, 0);
}