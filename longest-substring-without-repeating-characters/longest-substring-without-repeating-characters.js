/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0
    let start = 0
    const set = new Set()
    for (let end = 0; end < s.length; end++){
        const char = s[end]
        while (set.has(char)){
            set.delete(s[start])
            start++
        }
        set.add(char)
        maxLen = Math.max(maxLen, end - start +1)
    }
    return maxLen
};