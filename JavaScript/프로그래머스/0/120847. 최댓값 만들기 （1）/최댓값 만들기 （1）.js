// 시작 시간 18:55 종료 시간 19:14
function solution(numbers) {
    numbers.sort((a, b) => b - a);
    return numbers[0] * numbers[1];
}