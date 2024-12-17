function solution(s) {
    let answer = [];
   return [...s].filter((e) => s.indexOf(e) === s.lastIndexOf(e)).sort().join("");

    
}