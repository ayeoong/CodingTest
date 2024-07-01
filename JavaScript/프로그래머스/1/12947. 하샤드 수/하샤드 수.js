function solution(x)
{
    const num = [...x.toString()].map(v => +v).reduce((a, c) => a += c, 0); // 자릿수의 합
    return !(x % num);
}