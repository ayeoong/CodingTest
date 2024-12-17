// 22: 10 ~ 22:12
function solution(myString, pat) {
    const reg = new RegExp(pat, `gi`);
    return myString.match(reg)? 1:0;
    
}