//Math operation functions
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
  return num1 / num2; 
}

function power(num1, num2) {
  return num1 ** num2;
}

let prev = []; 
let prevType; //might need to empty this on clear? Value is typeof string btw. Maybe change to prevTypeType???
let prevChoice;
let number1 = ""; 
let number2 = ""; 
let operator = ""; 

function operate(num1, num2, op) {
  switch (op) {
    case "+":
      return add(+num1, +num2);
      break;
    case "-":
      return subtract(+num1, +num2);
      break;
    case "x":
      return multiply(+num1, +num2);
      break;
    case "/":
      return divide(+num1, +num2);
      break;
    case "^":
      return power(+num1, +num2);
      break;
  };
}

//Connect to and create calculator screen
const upperScreenContainer = document.querySelector(".upper-screen-container");
const lowerScreenContainer = document.querySelector(".lower-screen-container");

const buttons = document.querySelectorAll(".button-container button");

const upperScreen = document.createElement("div");
upperScreen.classList.add(".upper");
const lowerScreen = document.createElement("div");
lowerScreen.classList.add(".lower");

upperScreenContainer.appendChild(upperScreen);
lowerScreenContainer.appendChild(lowerScreen);

//Operate calculator
let operators = ["^", "/", "x", "-", "+"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function validateChoice(chosen) {
  setPrev();
  if (chosen === "C") {
    clearAll();
  } else if (chosen === "Del") {
    validateDelete();
  } else if (chosen === "=") {
    validateEquals(chosen);
  } else if (operators.includes(chosen)) {
    validateOperator(chosen);
  } else if (chosen === ".") {
    validatePeriod(chosen);
  } else if (numbers.includes(chosen)) {
    validateNumber(chosen);
  }
}

function setPrev() {
  if (prev.length === 0) {
    "";
  } else {
    prevType = prev[prev.length -1].type; //gets most updated previous choice's type
    prevChoice = prev[prev.length -1].choice; //gets most updated previous choice
  };
}

function clearAll() {
  prev = [];
  number1 = "";
  number2 = "";
  operator = "";
  lowerScreen.textContent = "";
  upperScreen.textContent = "";
}

function validateDelete() {
  if (number1.length === 0) {
    ""; //should do nothing?
  } else if (prevType === "number1" || prevType === "period1") {
    // number1 = number1.substring(0, (number1.length - 1));
    // lowerScreen.textContent = number1;
    deleteLetter(number1);
    prev.pop(); //add to helper
  } else if (prevType === "op") {
    upperScreen.textContent = "";
    lowerScreen.textContent = number1;
    operator = "";
    prev.pop(); //add to helper
  } else if (prevType === "number2" || prevType === "period2") {
    // number2 = number2.substring(0, (number2.length - 1));
    // lowerScreen.textContent = number2;
    deleteLetter(number2);
    prev.pop();
  } else if (prevType === "equals") {
    upperScreen.textContent = "";
    // number1 = number1.substring(0, (number1.length - 1));
    // lowerScreen.textContent = number1;
    deleteLetter(number1);
    prev.splice(-2, 2); //add to helper
  }
}

function deleteLetter(number) {
  if (number === number1) {
    number1 = number1.substring(0, (number1.length - 1));
    lowerScreen.textContent = number1;
  } else if (number === number2) {
    number2 = number2.substring(0, (number2.length - 1));
    lowerScreen.textContent = number2;
  }

}

function validateEquals(chosen) {
  if (number1.length === 0 || prevType === "op") {
    lowerScreen.textContent = "Error";
  } else if (prevType === "number1") {
    upperScreen.textContent = `${number1} =`;
    lowerScreen.textContent = number1;
    prev.push({choice: chosen, type: "equals"}); //redo
  } else if (prevType === "number2") {
    upperScreen.textContent = `${number1} ${operator} ${number2} =`;
    number1 = operate(number1, number2, operator).toString();
    lowerScreen.textContent = number1;
    number2 = "";
    operator = "";
    prev = []; //not sure if this is redundant, consider removing
    addManyToPrev(number1, chosen)  
  } else if (prevType === "equals") {
    "";
  }
}

function validateOperator(chosen) {
  if (number1.length === 0 || prevType === "op") {
    lowerScreen.textContent = "Error";
  } else if (prevType === "number1" || prevType === "equals") { 
    operator = chosen;
    lowerScreen.textContent = "";
    upperScreen.textContent = `${number1} ${operator}`;
    prev.push({choice: chosen, type: "op"}); //redo
  } else if (prevType === "number2") {
    number1 = operate(number1, number2, operator).toString(); 
    operator = chosen;
    lowerScreen.textContent = "";
    upperScreen.textContent = `${number1} ${operator}`;
    number2 = "";
    prev = []; //this might be redundant, consider removing
    addManyToPrev(number1, chosen);     
  } 
}

function validatePeriod(chosen) {//add case for decimal before operator (currently does nothing) (e.g., 1. then op, does nothing)
  if (number1.length === 0) {
    number1 = "0.";
    lowerScreen.textContent = number1;
    prev.push({choice: "0", type: "number1"});
    prev.push({choice: chosen, type: "period1"});
  } else if (prevType === "number1" && !number1.includes(".")) {
    number1 = number1 + chosen; 
    lowerScreen.textContent = number1;
    prev.push({choice: chosen, type: "period1"});
  } else if (prevType === "op") {
    number2 = "0.";
    lowerScreen.textContent = number2;
    prev.push({choice: "0", type: "number2"});
    prev.push({choice: chosen, type: "period2"});
  } else if (prevType === "number2" && !number2.includes(".")) {
    number2 = number2 + chosen;
    lowerScreen.textContent = number2;
    prev.push({choice: chosen, type: "period2"});
  }
}

function validateNumber(chosen) {
  if (number1.length === 0) {
    number1 = chosen;
    lowerScreen.textContent = number1;
    addToPrev(chosen, "number1");
    // prev.push({choice: chosen, type: "number1"}); //redo
  } else if (prevType === "number1" || prevType === "equals" || prevType === "period1") { 
    number1 = number1 + chosen; 
    lowerScreen.textContent = number1;
    addToPrev(chosen, "number1");
    // prev.push({choice: chosen, type: "number1"}); //redo
  } else if (chosen === "0" && prevChoice === "/") {
    lowerScreen.textContent = "Cannot divide by zero";
  } else if (prevType === "op") {
    number2 = chosen;
    lowerScreen.textContent = number2;
    addToPrev(chosen, "number2");
    // prev.push({choice: chosen, type: "number2"}); //redo
  } else if (prevType === "number2" || prevType === "period2") {
    number2 = number2 + chosen;
    lowerScreen.textContent = number2;
    addToPrev(chosen, "number2");
    // prev.push({choice: chosen, type: "number2"});
  } 
}

function addToPrev(userChoice, choiceType) {
  prev.push({choice: userChoice, type: choiceType})
}

function addManyToPrev(num, op) {
  let lastLetter;
  if (op === "=") {
    for (let i = 0; i < num.length; i++) {
      lastLetter = number1.slice(i, i+1);
      prev.push({choice: lastLetter, type: "number1"});
    }
    prev.push({choice: op, type: "equals"});
  } else if (operators.includes(op)) {
    for (let i = 0; i < num.length; i++) {
      lastLetter = number1.slice(i, i+1);
      prev.push({choice: lastLetter, type: "number1"});
    }
    prev.push({choice: op, type: "op"});
  } //add case here for decimals? 
}

//Connect calculator operation to calculator buttons
let clicked; 

buttons.forEach((button) => {
  button.addEventListener("click", () => {    
    clicked = button.textContent;
    validateChoice(clicked);
  });
});


//console tests: 

/*let prev = [];
let prevType;

function test(num1, num2) {
prevType = prev[prev.length - 1].type;
console.log(prevType);
return num1+num2;
}

prev = [{choice: "1", type: "number1"}, {choice: "+", type: "op"}, {choice: "2", type: "number2"}];*/