/**
 * @param {number} x
 * @return {number}
 */

function reverse(x) {
  let sign;
  const regex = /\d+/;
  let modified = "";

  const strNumber = x.toString();

  for (let row = strNumber.length - 1; row >= 0; row--) {
    if (strNumber[row].match(regex)) {
      modified += strNumber[row];
      continue;
    }
    sign = strNumber[row];
  }

  let finalNumber;
  if (sign) finalNumber = `${sign}${modified}`;
  else finalNumber = modified;

  const higherLimit = Math.pow(2, 31);
  const lowerLimit = Math.pow(-2, 31);

  if (finalNumber > higherLimit || finalNumber < lowerLimit) return 0;
  return finalNumber;
}
