class Solution {
    public int solution(int slice, int n) {
        double piece = Math.ceil((double)n / (double)slice);
        return (int)piece;
    }
}