function solution(n, m) {
    // var answer = [];
    // return answer;
    // 최대공약수 (둘 다 나머지가 0이 되는 수)
    // let gcd = 1;
    // for(let i=2; i<=Math.min(n, m); i++) {
    //     if(!(n % i) && !(m % i)) gcd = i;
    // }
    
    const gcd = getGCD(Math.max(n, m), Math.min(n, m));
    // const gcd = getGCD(150, 108);
    // 최소공배수
    // 두 수를 곱하고 최대 공약수로 나누면 최소 공배수 
    
    return [gcd, n * m / gcd];
}

const getGCD = (a, b) => {
    
    if(b === 0)
        return a;
    
    return getGCD(b, a % b);
    
}