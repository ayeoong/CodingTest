// 13:30 ~ 
function solution(strArr) {
    let answer = 0;
    
    const max_length = Math.max(...strArr.map((e) => e.length));
    const group = {}; // 그룹 개수 저장
    
    for(let i = 1; i <= max_length; i++) {
        const data = strArr.filter((e) => e.length === i);
        group[i] = data.length;
    }
    
    return Math.max(...Object.values(group));
}