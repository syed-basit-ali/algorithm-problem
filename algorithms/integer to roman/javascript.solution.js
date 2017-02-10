/**
 * @param {number} num
 * @return {string}
 */

function intToRoman(num) {
  const dict = [
    { number: 1000, symbol: "M" },
    { number: 900, symbol: "CM" },
    { number: 500, symbol: "D" },
    { number: 400, symbol: "CD" },
    { number: 100, symbol: "C" },
    { number: 90, symbol: "XC" },
    { number: 50, symbol: "L" },
    { number: 40, symbol: "XL" },
    { number: 10, symbol: "X" },
    { number: 9, symbol: "IX" },
    { number: 5, symbol: "V" },
    { number: 4, symbol: "IV" },
    { number: 1, symbol: "I" },
  ];

  const getSymbol = (value, symbol) => {
    let result = "";
    for (let i = 0; i < value; i++) {
      result += symbol;
    }
    return result;
  };

  let result = "";

  for (const object of dict) {
    const romanLength = ~~(num / ~~object.number);

    if (romanLength > 0) {
      const symbols = getSymbol(romanLength, object.symbol);
      result += symbols;
    }
    num = num % ~~object.number;
  }

  return result;
}
