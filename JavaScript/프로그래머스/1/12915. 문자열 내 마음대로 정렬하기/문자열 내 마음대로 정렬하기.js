// 23:15 ~ 23:33
function solution(strings, n) {
    // console.log(strings.sort((a, b) => a > b? 1 : -1));
    
    return strings.sort((a, b) => {
        if(a[n] > b[n]) return 1;
        if(a[n] < b[n]) return -1;
        if(a[n] === b[n]) return a > b? 1 : -1;
            
        // a[n] > b[n]? 1 : -1;
        // if(a[n] > b[n]) return 1;
        // else if(a[n] < b[n]) return -1;
        // else {
        //     if(a > b) return 1;
        //     else if(a < b) return -1;
        //     else return 0;   
        // }
    });
//     if(a[n] > b[n]) return 1;

//         if(a[n] < b[n]) return -1;
//         if(a[n] === b[n]){
//             if(a>b) return 1;
//             if(a<b) return -1;
//             return 0;
//         }
}