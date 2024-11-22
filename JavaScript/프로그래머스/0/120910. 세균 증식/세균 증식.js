// 17:12 ~ 17:21
function solution(n, t) {
    // var answer = 0;
    // for( let i=1; i<=t; i++ ) {
    //     n *= 2;
    // }
    // return n;
    
   // return Math.pow(2, t) * n; // Math.pow(제곱)
    return 2 ** t * n;           // ** 이것도 제곱
}