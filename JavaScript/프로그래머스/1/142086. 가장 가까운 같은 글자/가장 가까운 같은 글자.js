// 12:38 ~ 1:02
function solution(s) {
    
    let arr = [];
    let answer = [];

    for (let i = 0; i < s.length; i++) {
        // console.log(s[i]);
        let item = s[i];
        if (!arr.includes(item)) { // arr에 없으면
            answer.push(-1);
            arr.push(item);
        } else {
            // console.log(arr.lastIndexOf(item))
            answer.push(i - arr.lastIndexOf(item)); // 현재 위치 - 마지막 위치
            arr.push(item);
        }
    }
    return answer;
}