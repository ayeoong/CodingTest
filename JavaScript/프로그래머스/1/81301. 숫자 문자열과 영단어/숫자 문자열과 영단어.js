function solution(s) {
    // const number = { 'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9 };
    
    const number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    // return number.map((v, i) => s = s.split(v).join(i));
    
    // return number.forEach((v, i) => s = s.split(v).join(i));
    
//     number.map((v, i) => {
//         // s = +(s.split(v).join(i));
//         s = s.split(v).join(i);
//         // return +s;
        
//     });
    
    number.forEach((v, i) => {
        s = s.split(v).join(i);
    });

    return +s;

    // return number.forEach((v, i) => {
    //     return s = s.split(v).join(i);
    // });
}

