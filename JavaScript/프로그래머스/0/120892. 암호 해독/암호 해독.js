// 21:20 ~ 21:28
function solution(cipher, code) {
    return [...cipher].filter((_, i) => !((i + 1) % code)).join(``);  
}