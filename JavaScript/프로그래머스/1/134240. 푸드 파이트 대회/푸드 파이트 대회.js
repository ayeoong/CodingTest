function solution(food) {
    // var answer = '';
    // return answer;
    
    // console.log(food.sort((a, b) => a - b));
    let str = ``;
    for(let i=1; i<food.length; i++) {
        // console.log(i.toString().repeat(food[i] / 2))
        str += i.toString().repeat(food[i] / 2);
    }
    // return str + `0` + [...str].reverse().join(``);
    return `${str}0${[...str].reverse().join(``)}`;
    
//     let arr = [];
//     for(let i=1; i<food.length; i++) {
//         // console.log(food[i] / 2) // 둘이 먹을 양
//         let serve = Math.floor(food[i] / 2);
//         for(let j=0; j<serve; j++) {
//             arr.push(i);   
//         }
//         // console.log(arr)
//     }
    
//     // console.log(arr.join(``))
//     return arr.join(``) + `0` + arr.reverse().join(``);
}

// 왼 -> 오 순서로 먹기
// 오 -> 왼 순서로 먹기
// 가운데에 물

// 음식을 먹는 횟수만큼 음식 종류를 반복함
// 처음과 마지막은 무조건 1 
// 3번 음식 3개 먹어야 하면 ===> 333
// 음식 먹는 횟수 계산한 배열 만들고 가운데에 물(0) 넣고 거꾸로 배열 뒤집으면 될듯?