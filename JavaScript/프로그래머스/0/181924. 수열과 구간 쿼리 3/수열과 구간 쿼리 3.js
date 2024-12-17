// 10:16 ~ 
function solution(arr, queries) {
    for(const [num1, num2] of queries) {
        [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
    }
    return arr;
}