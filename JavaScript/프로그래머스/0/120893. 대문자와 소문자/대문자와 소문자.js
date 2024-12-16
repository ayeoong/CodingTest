// 21:10 ~ 2!:14
function solution(my_string) {
    return [...my_string].map((v) => v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()).join("");
}