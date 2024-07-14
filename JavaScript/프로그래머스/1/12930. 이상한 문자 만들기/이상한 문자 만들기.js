function solution(s) {
    // var answer = '';
    // return answer;
    
    // console.log(s.split(` `));
    
    return s.split(` `).map((v, i) =>
        [...v].map((e, idx) => idx % 2 === 0? e.toUpperCase() : e.toLowerCase()
    ).join(``)).join(` `);
}
