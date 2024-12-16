// 시작 시간 13:50 종료 시간 13:52
function solution(num_list) {
    const a = num_list.filter(v => v % 2 === 0).length;
    const b = num_list.filter(v => v % 2 !== 0).length;
    return [a, b];
}