function solution(seoul) {
    let x = 0;
    seoul.filter((v, i) => v === `Kim`? x = i : ``);
    
    return `김서방은 ${x}에 있다`;
}