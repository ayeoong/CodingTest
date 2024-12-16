// 16:43 ~ 17:04

function solution(my_string) {
    let str = my_string.replace(/[^0-9]/g, '');
    return [...str].reduce((a, c) => a + parseInt(c), 0);
}