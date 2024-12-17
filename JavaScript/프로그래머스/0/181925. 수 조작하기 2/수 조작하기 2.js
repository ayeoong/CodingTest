// 23:53 ~ 02
function solution(numLog) {
    let res = '';
    const pos = {
         '1' : 'w',
        '-1' : 's',
        '10' : 'd',
        '-10': 'a',
    }
    
    for(let i = 1; i < numLog.length; i++) {
        const log = numLog[i] - numLog[i - 1];
        res += pos[log];
    }
    
    return res;

}