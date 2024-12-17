// 16:02 ~ 16:11
const solution = (num_list) => num_list.length >= 11 ? num_list.reduce((a, c) => a + c) : num_list.reduce((a, c) => a * c);