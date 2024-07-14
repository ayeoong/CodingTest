const solution = (absolutes, signs) => absolutes.reduce((a, c, i) => a += signs[i]? c : -c, 0);


    // let answer = 0;
    
    // for (let i=0; i < signs.length; i++) {
    //     if(signs[i] == true) {
    //         answer += absolutes[i]; 
    //     } else {
    //         answer += absolutes[i] *-1;
    //     }                          
    // }
    // return answer;