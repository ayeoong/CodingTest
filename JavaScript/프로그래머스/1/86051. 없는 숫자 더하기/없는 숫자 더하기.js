const solution = numbers => new Array(10).fill(0).reduce((a, c, i) => !numbers.includes(i)? a += i : a, 0);
    // return Array.from({ length:10 }).fill(0).reduce((a, c, i) => !numbers.includes(i)? a += i : a, 0);
    
    // let num = 0;
    // for(let i=0; i<=9; i++) {
    //     if(!numbers.includes(i)) num += i;
    // }
    // return num;