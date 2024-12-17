// 23:10 ~ 23:22
function solution(num, k) {
    const numstr = num.toString().indexOf(k);
    return numstr !== -1? numstr + 1 : -1;
}