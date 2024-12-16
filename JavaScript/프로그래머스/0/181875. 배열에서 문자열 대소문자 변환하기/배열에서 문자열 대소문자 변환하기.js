// 8:44 ~ 8:49
function solution(strArr) {
    for(let i=0; i < strArr.length; i++) {
        strArr[i] = i % 2 === 0? strArr[i].toLowerCase() : strArr[i].toUpperCase();
    }
    return strArr;
    // return strArr.map((_, i) => (i % 2)? strArr[i].toUpperCase() : strArr[i].toLowerCase());
}