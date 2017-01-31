/**
 * @param {string} s
 * @return {number}
 */

export function lengthOfLongestSubstring(s) {
  let temp = "";
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    if (temp.includes(s[i])) {
      let j = i - 1;
      const value = s[i];
      while (s[j] !== value) {
        j--;
      }
      i = j;
      temp = "";
    } else {
      temp += s[i];
      if (temp.length > maxLength) {
        maxLength = temp.length;
      }
    }
  }
  return maxLength;
}
