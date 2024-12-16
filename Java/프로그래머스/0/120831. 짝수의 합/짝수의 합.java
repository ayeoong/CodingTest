// import java.util.*;
import java.util.stream.*;

class Solution {
    public int solution(int n) {
        // return IntStream.rangeClosed(1, n).filter(a -> a % 2 == 0).sum();
        return IntStream.iterate(2, i -> i <= n, i -> i += 2).sum();
    }
}