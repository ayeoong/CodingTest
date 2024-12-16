// 시작 시간: 22:17, 종료 시간: 22:
function solution(my_string, letter) {
    // return [my_string].filter((v) => v !== letter);
    // return [my_string].filter((v) => v !== letter).join("");
    return [ ...my_string ].filter((v) => v !== letter).join("");    
    
    // 대리님이 알려 주신 방법
    // return my_string.replaceAll(letter, "");
}