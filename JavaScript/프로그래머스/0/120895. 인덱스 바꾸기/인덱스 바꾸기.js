// 21:12 ~ 21:28
function solution(my_string, num1, num2) {
    const result = [...my_string];
    // console.log(result.splice(num1, 1)); // 이러면 한 개만 뽑혀서 나옴
    result.splice(num1, 1, my_string[num2]); // 거기에 my_string[num2] 집어넣기
    result.splice(num2, 1, my_string[num1]);
    return result.join("");
}