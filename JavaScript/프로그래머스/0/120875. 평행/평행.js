// 18:56 ~
function solution(dots) {
    
    // 기울기 공식
    // slope = y - y1 / x - x1
    // 각 점 4개로 할 수 있는 조합 경우의 수
    // 1 - 2 / 3 - 4
    // 1 - 3 / 2 - 4
    // 1 - 4 / 2 - 3 
    
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
    if((y1 - y2) / (x1 - x2) === (y3 - y4) / (x3 - x4)) return 1;
    if((y1 - y3) / (x1 - x3) === (y2 - y4) / (x2 - x4)) return 1;
    if((y1 - y4) / (x2 - x3) === (y2 - y3) / (x2 - x3)) return 1;
    
//     const arr = [];
//     for(let i=0; i<dots.length - 1; i++) {
//         for(let j=i+1; j<dots.length; j++) {
//             // console.log(dots[i][1]); // y
//             // dots[i][1] - dots[j][1] // y - y1
//             // dots[i][0] - dots[j][0] // x - x1
//             const slope = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);
//             // console.log(slope); // 기울기 값

//             // console.log(arr);
//             // console.log(arr.indexOf(slope));
            
//             if(arr.indexOf(slope) != -1) return 1; 
//             // indexOf는 찾을 수 없는 경우에 -1 반환하니까 -1이 아니면 찾은 거
            
//             arr.push(slope);
//         }
//     }
    
    return 0;
}