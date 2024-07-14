function solution(n) {
    
    // for (let i=0; i<n; i++){
    //     if (n%i == 1){
    //         return i;
    //     }
    // }
    
    let x = 0;
    while(true) {
        x++;
        if(n % x === 1) return x;
    }
}