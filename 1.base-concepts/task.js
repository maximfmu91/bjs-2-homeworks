"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4 * a * c;
  arr = d;
  
  if (d < 0) {
    arr = [];
}
  let str = [];
if (d === 0) {
  str.push(-b/(2*a));
  arr = str;
} else if (d > 0) {
  str.push((-b + Math.sqrt(d)) / (2*a));
  str.push((-b - Math.sqrt(d)) / (2*a));
  arr = str;
}

  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  if (typeof percent === 'string') {
    percent = +percent;
  }

  if (isNaN(percent) ||
      isNaN(contribution) ||
      isNaN(amount) ||
      isNaN(countMonths)) {
        return false;
      }
  amount = amount - contribution;
  let P = (percent / 100) / 12; 
  let payPerMonth = amount * (P + (P / (((1 + P)**countMonths) - 1)));
  let totalResult = payPerMonth * countMonths;
  
  return (+totalResult.toFixed(2));
}