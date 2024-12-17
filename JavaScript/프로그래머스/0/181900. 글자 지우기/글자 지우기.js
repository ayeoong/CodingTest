// 10:21 ~ 10:28
function solution(my_string, indices) {
    return [...my_string].map((v, i) => indices.includes(i)? 0 : v).filter((e) => e !== 0).join("")
}