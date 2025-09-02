function add(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

function subtract(...args) {
  let difference = args[0];
  for (let i = 1; i < args.length; i++) {
    difference -= args[i];
  }
  return difference;
}

function multiply(...args) {
  let product = 1;
  for (let i = 0; i < args.length; i++) {
    product *= args[i];
  }
  return product;
}

function divide(...args) {
  let quotient = args[0];
  for (i = 1; i < args.length; i++) {
    quotient /= args[i];
  }
  return quotient;
}

module.exports= {add, subtract, multiply, divide}