// 10:35 ~ 10:45
function solution(my_string, s, e) {
    const reverseStr = [...my_string].slice(s, e + 1).reverse().join("");
    return my_string.slice(0, s) + reverseStr + my_string.slice(e + 1);
}