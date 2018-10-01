module.exports = function solveEquation(equation) {
  var findNum = /[+-]?\s?\d+/g;
  var numbers = equation.match(findNum);
  numbers.splice(1, 1);
  for (var i = 1; i < 3; i++) {
      console.log(numbers[i]);
      numbers[i] = numbers[i].replace(" ", "");
      numbers[i] = numbers[i].replace("+", "");
  }
  var a = Number(numbers[0]);
  var b = Number(numbers[1]);
  var c = Number(numbers[2]);

  var D = b*b - 4*a*c;
  var x1;
  var x2;
  if (/-/.test(numbers[0])) {
      x1 = (-b + Math.round(Math.sqrt(D))) / (2 * a);
      x2 = (-b - Math.round(Math.sqrt(D))) / (2 * a);
  } else {
      x1 = (-b - Math.round(Math.sqrt(D))) / (2 * a);
      x2 = (-b + Math.round(Math.sqrt(D))) / (2 * a);
  }
  const arr = [];
  arr.push(x1);
  arr.push(x2);
return arr;
}
