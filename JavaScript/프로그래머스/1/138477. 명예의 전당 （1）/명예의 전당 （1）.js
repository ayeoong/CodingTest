const solution = (k, score) => {
    // let answer = [];
    // let arr = [];
    
    let data = [];
    return score.map((a, i) => {
        
        const index = data.findIndex(v => v > a);
        if(index === -1) data.push(a);
        else data.splice(index, 0, a);
        
        if(data.length > k)
            // data.shift();
            data.splice(0, 1);
        
        return data[0];
        
    });
    
//     score.forEach((v, i) => {
//         // 오늘 점수
//         arr.push(v);
//         // arr.sort((a, b) => a - b);
//         arr.sort((a, b) => b - a);
        
//         // console.log(arr);
//         // 낮은 점수 삭제
//         if(arr.length > k) arr.pop();
        
//         // answer.push(arr[arr.length]);
//         // 낮은 점수 return
//         answer.push(arr[arr.length - 1]);
//     });
    
//     console.log(answer)
    // 프로그램 초기에 k일 동안은 명예의 전당 깔고 감
    
    
    // return answer;
}