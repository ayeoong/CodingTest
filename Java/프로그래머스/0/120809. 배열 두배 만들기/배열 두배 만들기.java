import java.util.*;

class Solution {
    public List<Integer> solution(int[] numbers) {
        int[] t1 = { 1, 2, 3, 4 };
        List<Integer> t2 = new ArrayList<Integer>();
        
        System.out.println(t2);
        for(int i=0; i<numbers.length; i++) {
            // System.out.println(numbers[i] * 2);
            t2.add(numbers[i] * 2);
            
        }
        
        return t2;
    }
}