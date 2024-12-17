// 23:40 ~ 44
function solution(number) {
    return [...number.toString()].reduce((a, c) => a + +c, 0) % 9;
}