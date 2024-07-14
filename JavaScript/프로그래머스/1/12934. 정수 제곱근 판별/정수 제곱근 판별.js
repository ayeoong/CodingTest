function solution(n) {
    // console.log(Math.sqrt(n));
    
    // if(Number.isInteger(Math.sqrt(n))) return (Math.sqrt(n) + 1) ** 2; 
    // else return -1;
    
    const sqrt = Math.sqrt(n);
    if(!(n % sqrt))
        return (sqrt + 1) ** 2;
    
    return -1;
    
}