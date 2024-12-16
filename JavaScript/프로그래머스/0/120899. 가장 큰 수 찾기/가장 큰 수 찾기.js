// 8:26 ~ 8:31
function solution(array) {
    let max = Math.max(...array);
    return [max, array.indexOf(max)];
}