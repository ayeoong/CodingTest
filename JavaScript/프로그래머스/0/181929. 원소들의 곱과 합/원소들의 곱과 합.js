// 18:15 ~ 
function solution(num_list) {
    return num_list.reduce((a, c) => a*c) > num_list.reduce((a, c) => a+c) ** 2? 0 : 1;
}