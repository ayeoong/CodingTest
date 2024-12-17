// 21:23 ~ 21:31
function solution(n) {
    const res = [n]; // 초기값이 n
    while(n !== 1) {
        n = n % 2 === 0 ? n / 2 : 3* n + 1;        
        res.push(n);
    }
    return res;
}
