function solution(n) {
    return Array(n).fill(Array(n).fill(0)).map((a, i) =>  a.map((b, v) => v === i ? 1 : b))
}