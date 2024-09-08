const solution = arr => Math.min(arr.length / 2, [...new Set(arr)].length);

// function solution(nums) {
//     const type = new Set(nums);
//     return Math.min(type.size, nums.length / 2);
// }