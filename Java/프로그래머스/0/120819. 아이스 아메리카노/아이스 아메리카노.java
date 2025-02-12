class Solution {
    public int[] solution(int money) {
        // int coffee = money / 5500;
        // int change = money % 5500;
        
        int[] array = { money / 5500, money % 5500 };
        return array;
        // return { money / 5500, money % 5500 };
    }
}