// 23:03 ~ 23:09
function solution(order) {
    const str = [...order.toString()];
    return [...order.toString()].reduce((a, c) => (!(c % 3) && +c)? a += 1 : a, 0);
    
}