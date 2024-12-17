// 시작 시간 14:55 종료 시간 15:07
function solution(n) {
    return n.toString().split("").reduce((a, c) => parseInt(a) + parseInt(c), 0);
}