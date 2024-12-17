// 17: 38 ~ 17 : 43
function solution(a, b) {
    const answer = 0;
    if(a % 2 !== 0 && b % 2 !== 0) {
        // return Math.pow(a, 2) + Math.pow(b, 2);
        return a ** 2 + b ** 2;
    } else if(a % 2 !== 0 || b % 2 !== 0) {
        return 2 * (a + b);
    } else return Math.abs(a - b); // Math.abs 절댓값
    return answer;
}