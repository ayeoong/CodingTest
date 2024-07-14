function solution(n) {
    return parseInt([...n.toString(3)].reverse().join(``), 3);
    
    // return parseInt([...n.toString(3)].reverse().join(``), 2);
        
    // var answer = 0;
    // return [...n.toString(3)].reverse().join('').toString(10);
    // console.log(n.toString(3))
    // return answer;
}