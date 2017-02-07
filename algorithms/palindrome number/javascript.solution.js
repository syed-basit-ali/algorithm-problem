/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  const value = x.toString();

  let reversed = "";
  for (let i = value.length - 1; i >= 0; i--) {
    reversed += value[i];
  }

  if (value.toString() === reversed.toString()) {
    return true;
  }
  return false;
};
