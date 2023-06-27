//DO NOT USE eval() or return a new Function()

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Cannot divide by 0";
  } else {
    return num1 / num2; 
  }
}

function power(num1, num2) {
  return num1 ** num2;
}

//For divide, anything / 0 returns infinity, but should it return "can't divide by 0"? 


let n1; 
let n2; 
let op; 

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      breakl
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
    case "**":
      return power(num1, num2);
      break;
  };
}

