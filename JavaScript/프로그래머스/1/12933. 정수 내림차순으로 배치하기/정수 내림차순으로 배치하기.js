function solution(n) {
//      let arr = Array.from(n.toString());
//     arr = arr.sort((a, b) => b - a);
    
//     // console.log(arr.toString().split(',').join(''))
    
//     return +(arr.toString().split(',').join(''));
    
    return +([...n.toString()].sort((a, b) => b - a).join(``));
}