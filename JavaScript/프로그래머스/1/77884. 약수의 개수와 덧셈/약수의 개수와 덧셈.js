function solution(left, right) {
//     let answer = 0;
//     for(let i=left; i<=right; i++) {
//         let count = 0;
//         for(let j=1; j<=i; j++) {
//             if(!(i % j)) count++;
//         }
//         answer = !(count % 2)? answer + i : answer - i;
//     }
    
//     return answer;
    
    const array = new Array(right - left + 1).fill(left);
    
    return array.reduce((a, c, i) => {
        
        let factors = 0;
        const sum = c + i;
        
        // console.log(sum);
        
        for(let j=1; j * j <= sum; j++) {

            const ahrt = sum / j;
            const skajwl = sum % j;
            if(skajwl === 0) {
                if(ahrt === j) factors++;
                else factors += 2;
            }
        }
        
        // console.log(`${sum}의 약수의 갯수는 ===> ${factors}`);
        // 약수의 개수가 짝수면 더하고, 홀수면 뻄
        if(factors % 2 === 0) a += sum;
        else a -= sum;
        return a;
        
        // return factors % 2 === 0? a += sum : a -= sum;
        
    }, 0);
}