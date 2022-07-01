/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []

    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (i = 0; i <= s.length - 1; i++) {
        if (map[s[i]]) {
            stack.push(map[s[i]])
        } else
            if (s[i] != stack.pop()) {

                return false
            }
    }
    return stack.length === 0
};