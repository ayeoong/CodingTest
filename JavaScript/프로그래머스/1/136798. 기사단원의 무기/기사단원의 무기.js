// 13:42 ~ 
function solution(number, limit, power) {
    let total = 0;
    
    for(let i = 1; i <= number; i++) {
        let divisor = 0;
        
        // for(let j = 1; j <= Math.sqrt(i); j++) {
        for(let j = 1; j * j <= i; j++) {
            if(i % j === 0) {
                divisor += 1;
                
                // 36의 약수 6, 6 이런 경우에는 약수 두 번 들어가니까
                if(i / j !== j) {
                    divisor += 1;
                }
            }
        }
        // console.log(divisor);
        // divisor가 limit보다 큰지 아닌지
        let weapon = divisor > limit? power : divisor;
        
        total += weapon;
    }
    
    return total;
    // const divisor = [1, number]; 
    // number의 약수를 구한 거 .. 이거 말고 1부터 number까지 다 구해야돼
    // 약수가 아니라 약수 개수를 구해야됨 ; 
    // for(let i = 2; i <= Math.sqrt(number); i++) {
    //     if(!(number % i)) divisor.push(i, number / i);
    // }
}

/**
1. 약수 구하기
2. limit 적용
3. 철 무게 계산
*/