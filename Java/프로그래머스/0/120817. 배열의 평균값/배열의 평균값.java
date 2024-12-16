import java.util.stream.*;

class Solution {
    public double solution(int[] numbers) {
        return IntStream.of(numbers).average().getAsDouble();
        // of는 배열 넣어서 원소 추출
        // range <
        // rangeClosed <= 
        // return Arrays.stream(numbers).average().orElse(0);
    }
}