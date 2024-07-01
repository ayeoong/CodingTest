function solution(n) {
    // console.log([...n.toString()].reverse().map(v => +v));
    // return [...n.toString()].map(v => +v).sort((a, b) => b - a);
    return [...n.toString()].reverse().map(v => +v);
}