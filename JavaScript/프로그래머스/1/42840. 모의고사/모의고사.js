// 12:37 ~
function solution(answers) {
    const arr1 = [ 1, 2, 3, 4, 5 ];
    const arr2 = [ 2, 1, 2, 3, 2, 4, 2, 5 ];
    const arr3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 ];
    
    const result = answers.reduce((a, c, i) => {
        if(arr1[i % arr1.length] === c) a[0] += 1;
        if(arr2[i % arr2.length] === c) a[1] += 1;
        if(arr3[i % arr3.length] === c) a[2] += 1;
        
        return a;
    }, [0, 0, 0]);
    
    const first = Math.max(...result);
    
    return result.reduce((a, c, i) => ((c === first)? a.push(i + 1) : a, a), []);
    
    // console.log(Math.max(...result));
    
    // console.log(result);
    
//     const len1 = arr1.length;
//     const len2 = arr2.length;
//     const len3 = arr3.length;
    
//     let score1 = 0;
//     let score2 = 0;
//     let score3 = 0;
    
//     // console.log(answers.filter((v, i) => v === arr1[i]));
    
//     for(let i=0; i<answers.length; i++) {
//         if(arr1[i % len1] === answers[i]) score1 += 1;
//         if(arr2[i % len2] === answers[i]) score2 += 1;
//         if(arr3[i % len3] === answers[i]) score3 += 1;
//     }
    
//     const max = Math.max(score1, score2, score3);
//     const result = [];
    
//     if (score1 === max) result.push(1);
//     if (score2 === max) result.push(2);
//     if (score3 === max) result.push(3);
    
//     return result;
}
