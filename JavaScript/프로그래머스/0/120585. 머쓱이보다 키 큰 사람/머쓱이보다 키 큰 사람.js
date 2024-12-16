function solution(array, height) {
    // return array.filter(i => i > height).length;
    return array.reduce((a, c) => 
        c > height? a+=1:a
    , 0);
    
}