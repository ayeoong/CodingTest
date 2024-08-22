// 12:08 ~ 12:20
function solution(array, commands) {
    let answer = [];
    for (let i = 0; i < commands.length; i++) {
        // console.log(commands[i]);
        // console.log(commands[i][0]);
        // console.log(commands[i][0] - 1); // -1 해줘야 n번째 가능 idx는 0부터 시작
        let arr = array.slice(commands[i][0] - 1, commands[i][1]);
        
        arr.sort((a, b) => a - b);
        
        // console.log(arr[commands[i][2]]);
        
        
        answer.push(arr[commands[i][2] - 1]);
    }
    return answer;

}