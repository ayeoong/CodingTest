// 17:48 ~ 17:52
function solution(myString, pat) {
    return [...myString].map((a) => a === "A"? "B" : "A").join("").includes(pat)? 1:0;
}