function solution(n) {
    
    for (let i=0; i<n; i++){
        if (n%i == 1){
            return i;
        }
    }
    // let x = 0;
    // while(true) {
    //     if(n % x === 1) {
    //         break;
    //     }
    //     x++;
    // }
    // return x;
}