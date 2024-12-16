// 시작 시간 13:39 종료 시간 13:45 
function solution(s1, s2) {
    return s1.filter((v) => s2.includes(v)).length;
    // return s1.reduce((a, c) => s2.includes(c)? a += 1 : a , 0)
    // return s1.reduce((a, c) => s2.some((v) => v === c)? a += 1 : a , 0)
    // some : 하나라도 true면 true
    // every: 모두 true면 true
}