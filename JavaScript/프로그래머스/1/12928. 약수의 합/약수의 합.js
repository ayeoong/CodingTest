function solution(n) {
    
    if(!n)
        return 0
    
    let arr = [];
    arr.push(1); arr.push(n);
    for(let i=2; i<=Math.sqrt(n); i++) {
        if(!(n % i)) {
            arr.push(i);
            arr.push(n / i);
        }
    }
    
    return [...new Set(arr)].reduce((a, c) => a += c, 0);
    
}