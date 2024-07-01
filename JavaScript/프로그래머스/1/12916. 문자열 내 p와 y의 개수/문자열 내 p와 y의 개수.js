function solution(s){
    let str = s.toLowerCase().split("");
    let p = str.filter(v => v === 'p').length;
    let y = str.filter(v => v === 'y').length;
    return p === y;
}