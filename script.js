// Formatting a number as price

// Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.

// function should return a string 'NaN' if the input is not a valid number

var numberToPrice = function (number) {
  if (isNaN(number) || number === "") {
    return "NaN";
  }

  const minus = number < 0 ? "-" : "";
  const res = Math.abs(number).toFixed(3).slice(0, -1).split("");
  for (let i = res.length - 6; i > 0; i -= 3) {
    res.splice(i, 0, ",");
  }

  const final = minus + res.join("");
  console.log(final);

  return minus + res.join("");
};
numberToPrice(-5);
numberToPrice(123.1009);
numberToPrice(1234.1);
numberToPrice(12345.1);
numberToPrice(123456.1);
numberToPrice(1234567.1);

numberToPrice(-123.1);
numberToPrice(-1234.1);
numberToPrice(-12345.1);
numberToPrice(-123456.1);
numberToPrice(-1234567.1);
