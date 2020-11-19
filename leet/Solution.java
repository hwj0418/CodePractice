package leet;

public class Solution {

    public int strStr(String haystack, String needle) {

        if (haystack == needle) return 0;

        int word_len = haystack.length();
        int needle_len = needle.length();

        for(int i = 0; i < word_len - needle_len; i++){
            if(haystack.substring(i, i + needle_len).equals(needle)) return i; 
        }

        return -1;
    }

    public static void main(String args[]) {

        System.out.println(123);
        Solution sol = new Solution();
        System.out.println(sol.strStr("aabcd", "ab"));
    }
}
