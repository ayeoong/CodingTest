// 8:45 ~ 8:48
function solution(my_string, index_list) {
    return index_list.reduce((a, c) => a + my_string[c], ``);
}