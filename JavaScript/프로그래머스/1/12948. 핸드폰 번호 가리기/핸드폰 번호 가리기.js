// function solution(phone_number) {
//     // console.log(phone_number.slice(0, -4));
//     const number = phone_number.slice(0, -4);
//     // return phone_number.replace(phone_number.slice(0, -4), '*'.repeat(phone_number.slice(0, -4);.length));
//       return phone_number.replace(number, '*'.repeat(number.length));
// }

const solution = str => `*`.repeat(str.length - 4) + str.substr(-4);