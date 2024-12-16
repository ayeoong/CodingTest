// 15:45 ~ 15:57
function solution(array) {
    array.sort((a, b) => a - b)
    return array[ (parseInt)(array.length / 2) ];
}