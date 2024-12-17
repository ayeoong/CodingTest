// 20:43 ~
// 
function solution(n) {
    let arr = [];
    for(let i = 1; i <= n; i++) {
        for(let j = 2; j <= Math.sqrt(i); j++) {
            if(!(i % j)) arr.push(i);
        }
    }
    
    return [...new Set(arr)].length;
}