// 11:00 ~ 
function solution(num_list) {
    let count = 0;
    for(let num of num_list) {
        while (num !== 1) {
            if(!(num % 2)) {
                num /= 2;   
            } else {
                num -= 1;
                num /= 2;
            }
            count++;
        }
    }
    return count;
}