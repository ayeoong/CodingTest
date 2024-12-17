// 16:18 ~ 16:25
function solution(arr, k) {
    return k % 2? arr.map((v) => v * k) : arr.map((v) => v + k);
}