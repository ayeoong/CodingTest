function solution(arr) {
    // arr = arr.sort((a, b) => b - a);
    // if(arr.length === 1) return [-1];
    // else return arr.slice(0, arr.length - 1);
    
    const min = Math.min(...arr);
    arr = arr.filter(v => v !== min);
    return arr.length? arr : [-1];
    // if(arr.length === 1) return [-1];
    // return arr.filter(v => v !== min);
    
}