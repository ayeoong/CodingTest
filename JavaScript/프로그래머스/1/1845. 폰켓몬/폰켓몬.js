function solution(nums) {
    // 고유한 포켓몬 종류
    const type = new Set(nums);
    
    console.log(type.size);
    console.log(nums.length / 2);
    
    return Math.min(type.size, nums.length / 2);
    // return 1;
}