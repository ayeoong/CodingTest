// 22:22 ~ 22:25
function solution(n) {
    let answer = [1, n];
    
   for(let i = 2; i <= Math.sqrt(n); i++){
        if(!(n%i)) answer.push(i, n/i);
    }
    
    return  [...new Set(answer.sort((a, b) => a - b))];
}