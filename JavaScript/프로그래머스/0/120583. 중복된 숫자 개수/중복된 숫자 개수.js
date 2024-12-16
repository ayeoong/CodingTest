// 시작 시간: 19:52 종료 시간: 20:07
function solution(array, n) {
    return array.reduce((a, c) => n === c? a + 1 : a, 0);
}