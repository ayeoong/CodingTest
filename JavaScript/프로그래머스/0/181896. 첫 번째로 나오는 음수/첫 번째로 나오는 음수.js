// // 14:53 ~ 15:19 
// for문
// function solution(num_list) {
//     let answer = -1;

//     for (let i=0; i<=num_list.length; i++) {
//         if (num_list[i] < 0) {
//             answer = i;

//             break;
//         };
//     }

//     return answer;
// }

// findIndex
function solution(num_list) {
    const num = 0;
    return num_list.findIndex((v) => v < num);
} 