// 11:15 ~ 11:24
function solution(myString, pat) {
    return myString.slice(0, myString.lastIndexOf(pat) + pat.length);
}