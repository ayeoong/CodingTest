function solution(s, n) {
    
    // console.log(s.charCodeAt());
    let answer = "";
    [...s].forEach(v => {
         if(v === ` `) answer += ` `;
         else if(v >= `A` && v <= `Z`) {
            // 대문자 처리
            // console.log(v.charCodeAt() + n);
            // console.log(String.fromCharCode(change));
            // const change = String.fromCharCode(v.charCodeAt() + n);
             
             const ascii = v.charCodeAt() + n;
             if(ascii > 90) {
                 answer += String.fromCharCode(ascii - 26);
             } else answer += String.fromCharCode(ascii);
             // return String.fromCharCode(change);
         } else if(v >= `a` && v <= `z`) {
            // 소문자 처리
             const ascii = v.charCodeAt() + n;
             
              if(ascii > 122) {
                  answer += String.fromCharCode(ascii - 26);
             } else answer += String.fromCharCode(ascii);
             
         }
    });
    
    return answer;
}


// a = 97 A = 65
// s를 n만큼 밀어서 알파벳 이동
// 아스키코드 써서 해야됨 
// 알파벳을 아스키코드로 변환하는 함수가 있나