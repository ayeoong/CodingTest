function solution(numbers) {
    let data = {};
    
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            // answer.push(numbers[i] + numbers[j]);
            const sum = numbers[i] + numbers[j];
            // console.log(data, sum, data[sum]);
            if(!data[sum])
                data[sum] = true;
            
        }  
    }
    // console.log(data);
    return Object.keys(data).map(Number).sort((a, b) => a - b);
    // console.log(data)
    // console.log(Object.keys(data).map(Number))
//     let answer = [];
    
//     for(let i=0; i<numbers.length; i++){
//         for(let j=i+1; j<numbers.length; j++){
//             answer.push(numbers[i] + numbers[j]);
//         }  
//     }
//    // return answer.sort((a, b) => a - b);
//      return [...new Set(answer)].sort((a, b) => a - b);
    
}