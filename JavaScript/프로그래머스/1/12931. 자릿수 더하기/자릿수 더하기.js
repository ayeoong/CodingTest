function solution(n)
{
    const arr = [...n.toString()].map(v => +v);
    return arr.reduce((a, c) => a += c, 0);
    
    // let num = 0;
    // [...n.toString()].reduce((a, c) => parseInt(a) += +c, 0);
    // return 1;
}