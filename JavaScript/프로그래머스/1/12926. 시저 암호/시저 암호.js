function solution(s, n) {
    return [...s].map(v => {
        // console.log(v);
        if(v !== ` `) {
            const next = v.charCodeAt() + n;
            // console.log(String.fromCharCode(next));
            // a = 97, A = 65 // a - z까지 25만큼 차이
            v = String.fromCharCode(v.toLowerCase().charCodeAt() + n > 122? next - 26 : next)
        }
        
        return v;
        
    }).join(``);
    
    // console.log(s.charCodeAt());
//     let answer = ``;
//     [...s].forEach(v => {
//          if(v === ` `) answer += ` `;
//          else if(v >= `A` && v <= `Z`) {
//             // 대문자 처리
//              const ascii = v.charCodeAt() + n;
//              if(ascii > 90) {
//                  answer += String.fromCharCode(ascii - 26);
//              } else answer += String.fromCharCode(ascii);
             
//          } else if(v >= `a` && v <= `z`) {
//             // 소문자 처리
//              const ascii = v.charCodeAt() + n;
//               if(ascii > 122) {
//                   answer += String.fromCharCode(ascii - 26);
//              } else answer += String.fromCharCode(ascii);
             
//          }
//     });
    
//     return answer;
}

// a = 97 A = 65
// s를 n만큼 밀어서 알파벳 이동
// 아스키코드 써서 해야됨 
// 알파벳을 아스키코드로 변환하는 함수가 있나