import java.util.*;
import java.util.stream.*;

class Solution {
    public int solution(int[] box, int n) {
        return Arrays.stream(box).reduce(1, (a, c) -> a * (c / n));
    }
}