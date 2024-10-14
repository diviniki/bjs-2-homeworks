"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d === 0) {
    arr.push(-b / (2 * a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d) )/(2*a));
    arr.push((-b - Math.sqrt(d) )/(2*a))
  } else {
    arr;
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
  let C = contribution;
  let S = amount;
  let n = countMonths;
  
  let monthlyPayment = ((S - C) * (P + (P / ((Math.pow((1 + P), n)) - 1))));

  let debtAmount = parseFloat((monthlyPayment * countMonths).toFixed(2));

  return debtAmount;
}
