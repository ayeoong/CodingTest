// 23:25 ~ 23:40 
function solution(age) {
    const alphabet = "abcdefghij";
    return age.toString().split("").map((v) => alphabet[v]).join("");
}