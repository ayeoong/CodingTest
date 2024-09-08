const isPrime = (v) => {
    // 1과 자기 자신만을 약수로 가지는 수
    for(let l=2; l<=Math.sqrt(v); l++) {
        if(v % l === 0) return false;
    }    
    return true;
}

function solution(nums) {
    let answer = 0;
    const len = nums.length;
    
    for(let i=0; i<len-2; i++) {
        for(let j=i+1; j<len-1; j++) {
            for(let k=j+1; k<len; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                if(isPrime(sum)) answer++;
            }
        }
    }   
    
    return answer;
}

// 1. 소수 판별 로직 작성
// 2. 3개의 수를 더한 모든 경우의 수 만드는 로직 작성
// 3. 모든 경우의 수를 소수인지 판별하는 로직 작성