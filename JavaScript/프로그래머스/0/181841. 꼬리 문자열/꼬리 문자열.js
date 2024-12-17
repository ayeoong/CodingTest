// 8:30 ~ 33
function solution(str_list, ex) {
    // return str_list.filter((v) => !v.includes(ex)).join("");
    return str_list.map((v => v.indexOf(ex) === -1? v : ``)).join(``);
}