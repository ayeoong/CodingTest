// 19:43 ~ 
function solution(array, n) {
    console.log(array.sort((a, b) => a - b));
    array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);
    return array[0];
}