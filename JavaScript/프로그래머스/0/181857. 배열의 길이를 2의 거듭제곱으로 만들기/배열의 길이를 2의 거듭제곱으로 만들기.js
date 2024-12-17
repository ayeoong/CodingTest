// 14:58 ~ 

function solution(arr) {
    const len = arr.length;
    let num = 0;
    
    while((2 ** num) < len) {
        num++;
        console.log(num);
    }
    for (let i = len; i < (2 ** num); i++) { // 2 ** num - 길이 = 넣어야 하는 0의 개수
      arr.push(0);
    }
    return arr;
}


    
    // if(Number.isInteger(Math.sqrt(len))) {
    //     return arr;
    // } else {
    //     for(i=0; i<=Number.isInteger(Math.sqrt(len)); i++) {
    //         arr.push(0);
    //         // Array(answer).fill(0);
    //     }
    //     return arr;
    // }
    // console.log(2 ** num === len);
   
    
    // if(2 ** num === len) return answer;    
    // else if(2 ** num > len) return num++;
    // else {
    //     for(let i=0; i < (2 ** num) - len; i++) {
    //         answer.push(0);
    //     }
    // }
    
  // for (let i = 0; 2 ** i < len; i++) {
  //   for (let j = len; j < 2 ** i; j++) {
  //     arr.push(0);
  //   }
  // }