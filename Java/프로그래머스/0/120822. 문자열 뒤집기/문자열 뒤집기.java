class Solution {
    public String solution(String my_string) {
        
        String reverse = "";
        for(int i=my_string.length() - 1; i >= 0; i--) {
            reverse += my_string.charAt(i);
        }
        
        return reverse;
    }
}