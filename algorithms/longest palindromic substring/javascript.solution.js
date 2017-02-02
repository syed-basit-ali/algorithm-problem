/**
 * @param {string} s
 * @return {string}
 */

function longestPalindrome(s) {
  const expandFromMiddle = (str, left, right) => {
    if (!str || left > right) return 0;

    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }

    return right - left - 1;
  };

  const value = s;
  if (!value || value.length < 1) {
    return "";
  }

  let start = 0;
  let end = 0;

  for (let i = 0; i < value.length; i++) {
    let len1 = expandFromMiddle(value, i, i);
    let len2 = expandFromMiddle(value, i, i + 1);

    let maximum = Math.max(len1, len2);
    if (maximum > end - start) {
      start = i - ~~((maximum - 1) / 2);
      end = i + ~~(maximum / 2);
    }
  }

  return value.substring(start, end + 1);
}
