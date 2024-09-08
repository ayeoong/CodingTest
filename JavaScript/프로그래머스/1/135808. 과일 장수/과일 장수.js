// 15:45 ~ 
function solution(k, m, score) {
    
    score.sort((a, b) => b - a);
    // const box = parseInt(score.length / m);
    // score.splice(box * m, score.length);
    let result = 0;
    let insert = [];
    
    score.forEach(a => {
        
        insert.push(a);
        if(insert.length === m) {
            result += Math.min(...insert) * m;
            insert = [];
        }
        
    });
    
    return result;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // console.log(score);
    
    // var answer = 0;
    // return answer;
    // score.map(v => console.log(v));
//     if(score.length < m) return 0;
    
//     score.sort((a, b) => b - a);
//     let answer = 0;
//     // 사과 개수만큼 증가해서 상자 한 개씩 채우기
//     for(let i=0; i<score.length; i += m) {
//         // for(let i=1; i<=score.length; i += m) {
//         // console.log(score[i]);
//         // console.log(score[i - 1])
//         if(i + m <= score.length) { 
//             // 아;;;;;;
//             answer += score[i + m  - 1] * m;
//         }
//     } 
//     return answer;
    
    // for(let i=0; i<score.length; i++) {
    //     // console.log(score[i]);
    //     // console.log(score[i - 1])
    //     if(i + m <= score.length) {
    //         answer += score[i + m] * m;
    //     }
    // } 
    // return answer;
}