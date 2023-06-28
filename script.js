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
    return "Cannot divide by 0"; // make this something funnier
  } else {
    return num1 / num2; 
  }
}

function power(num1, num2) {
  return num1 ** num2;
}

let previous = [""];
let number1 = ""; //these might need to be arrays or objects?
let number2 = ""; //instead of making these 0 to begin, just use +number1/2 when passing them to operate 
let operator = ""; 

function operate(num1, num2, op) {
  switch (op) {
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

//Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

const screenContainer = document.querySelector(".screen-container");

const buttons = document.querySelectorAll(".button-container button");

const upperScreen = document.createElement("div");
const lowerScreen = document.createElement("div");

screenContainer.appendChild(upperScreen);
screenContainer.appendChild(lowerScreen);

function displayValue(chosen) {
  if (chosen is num) {
    if (operator is empty) {
      number1 = number1+ chosen and prev = chosen
    } else {
      number2 = number2+ chosen and prev = chosen
    }
  } else if (chosen is op) {
    if (upperScreen is empty) { //maybe change to if number1 is empty
      error
    } else if (prev is operator){
      error
    } else {
      number1 followed by operator on upperScreen, and lowerScreen is empty, and prev = chosen
    }
  } else if (chosen is equals) {
    if (upperScreen is empty) { //maybe change to if number1 is empty
      error
    } else if (prev is operator) {
      error
    } else if (number1 isnt empty and number2 IS empty) {
      number1 on upperScreen and on lowerScreen
    } else {

    } 
  } else if (chosen is clear) {
    clear all screens, number1, number2, prev, and operator
  } else if (chosen is del) {
    if (number1 is empty) {
      do nothing
    } else {
      if (number2 isnt empty) {
        remove last digit from number2 and last digit from lowerScreen
      } else if (operator isnt empty) {
        remove operator and operator from upperScreen
      } else if (operator and number 2 are empty AND number1 isnt empty) {
        remove last digit from number1
      } else {
        do nothing
      }
    }
  };
}

let clicked;
let classes;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    clicked = button.textContent;
    classes = button.className;
    displayValue(clicked);
  });
});




/*
const screenContainer = document.querySelector(".screen-container");

const buttons = document.querySelectorAll(".button-container button");

const upperScreen = document.createElement("div");
const lowerScreen = document.createElement("div");

screenContainer.appendChild(upperScreen);
screenContainer.appendChild(lowerScreen);

function validateClick(choice) {
  if (upperScreen.textContent === "" && !classes.includes("num"))
}

function assignValue() {
  if (upperScreen.textContent === "") {
    number1 = 
  }
}

function displayValue() {
  console.log("hi");
}

let clicked;
let classes;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    clicked = button.textContent;
    classes = button.className;
  });
});*/