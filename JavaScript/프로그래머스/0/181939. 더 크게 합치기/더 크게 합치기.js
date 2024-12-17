// 21:50 ~ 22:04
function solution(a, b) {
    
    const str1 = +(a.toString() + b.toString());
    const str2 = +(b.toString() + a.toString());
    
    return str1 >= str2? str1 : str2;
}