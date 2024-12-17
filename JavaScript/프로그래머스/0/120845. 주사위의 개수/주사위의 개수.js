// 8:31 ~ 8:37
function solution(box, n) {
    return box.reduce((a, c) => a * parseInt(c / n), 1);
}