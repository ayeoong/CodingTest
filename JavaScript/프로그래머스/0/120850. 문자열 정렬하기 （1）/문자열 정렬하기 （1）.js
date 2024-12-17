// 240214 
// 20:03 ~ 20:13
function solution(my_string) {
    return my_string.match(/\d/g).sort((a, b) => a - b).map(i => +i);
}