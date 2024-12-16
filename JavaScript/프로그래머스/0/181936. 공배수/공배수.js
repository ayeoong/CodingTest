// 17:26 ~ 17:30
function solution(number, n, m) {
    // if ( number % n === 0 && number % m === 0 ) return 1;
    // else return 0;
    
    // return number % n === 0 && number % m === 0 ? 1 : 0;
    // 나머지 0이면 false(0) 있으면 true(1)
    // return number % n || number % m? 0 : 1;
    return +!(number % n || number % m);
}
