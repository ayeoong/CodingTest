// 21:32 ~ 21;39
function solution(num_list) {
    const even = [];
    const odd = [];
    
   num_list.map((num, i) =>!(i % 2)? odd.push(num):even.push(num));
   
    const evenSum = even.reduce((a, c) => a + c);
    const oddSum = odd.reduce((a, c) => a + c);
    
    return Math.max(evenSum,oddSum);
}