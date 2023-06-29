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

let prev = []; //types are number1, number2, op, equals
let prevLast; //might need to empty this on clear? Value is typeof string btw. Maybe change to prevLastType???
let number1 = ""; //these might need to be arrays or objects?
let number2 = ""; //instead of making these 0 to begin, just use +number1/2 when passing them to operate 
let operator = ""; 

function operate(num1, num2, op) {
  switch (op) {
    case "+":
      return add(+num1, +num2);
      break;
    case "-":
      return subtract(+num1, +num2);
      break;
    case "*":
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

//Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

const screenContainer = document.querySelector(".screen-container");

const upperScreenContainer = document.querySelector(".upper-screen-container");
const lowerScreenContainer = document.querySelector(".lower-screen-container");

const buttons = document.querySelectorAll(".button-container button");

const upperScreen = document.createElement("div");
upperScreen.classList.add(".upper");
const lowerScreen = document.createElement("div");
lowerScreen.classList.add(".lower");

upperScreenContainer.appendChild(upperScreen);
lowerScreenContainer.appendChild(lowerScreen);


let operators = ["^", "/", "*", "-", "+"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

function setPrev() {
  if (prev.length === 0) {
    "";
  } else {
    prevLast = prev[prev.length -1].type; //gets most updated previous choice's type
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

function displayValue(chosen) {
  setPrev();
  
  if (chosen === "Clear") {
    clearAll();
  } else if (chosen === "Del") {
    if (prev.length === 0) {
      ""; //should do nothing?
    } else if (prevLast === "number1") {
      number1 = number1.substring(0, (number1.length - 1));// put in a helper function?
      lowerScreen.textContent.substring(0, (lowerScreen.textContent.length - 1));
      prev.pop();
    } else if (prevLast === "op") {
      upperScreen.textContent = "";
      lowerScreen.textContent = number1;
      operator = "";
      prev.pop();
    } else if (prevLast === "number2") {
      number2 = number2.substring(0, (number2.length - 1));// put in a helper function?
      lowerScreen.textContent.substring(0, (lowerScreen.textContent.length - 1));
      prev.pop();
    } else if (prevLast === "equals") {
      upperScreen.textContent = "";
      lowerScreen.textContent.substring(0, (lowerScreen.textContent.length - 1));
      prev.splice(-2, 2);
    }
  } else if (chosen === "=") {
    if (prev.length === 0 || prevLast === "op") {
      lowerScreen.textContent = "Error";
    } else if (prevLast === "number1") {
      upperScreen.textContent = `${number1} =`;
      lowerScreen.textContent = number1;
      prev.push({choice: chosen, type: "equals"}); //redo
    } else if (prevLast === "number2") {
      upperScreen.textContent = `${number1} ${operator} ${number2} =`;
      number1 = operate(number1, number2, operator);
      lowerScreen.textContent = number1;
      number2 = "";
      operator = "";
      //clear clicked and add new num1 & operator  
    } else if (prevLast === "equals") {
      "";//should do nothing
    }
  } else if (operators.includes(chosen)) {
    if (prev.length === 0 || prevLast === "op") {
      lowerScreen.textContent = "Error";
    } else if (prevLast === "number1" || prevLast === "equals") { //not sure if merging these will work
      operator = chosen;
      lowerScreen.textContent = "";
      upperScreen.textContent = `${number1} ${operator}`;
      prev.push({choice: chosen, type: "op"}); //redo
    } else if (prevLast === "number2") {
      number1 = operate(number1, number2, operator); 
      lowerScreen.textContent = "";
      upperScreen.textContent = `${number1} ${operator}`;
      //clear clicked and add new num1 & operator      
    } 
  } else if (numbers.includes(chosen)) {
    if (prev.length === 0) {
      number1 = chosen;
      lowerScreen.textContent = number1;
      prev.push({choice: chosen, type: "number1"}); //redo
    } else if (prevLast === "number1" || prevLast === "equals") { //not sure if merging these will work
      number1 = number1 + chosen; 
      lowerScreen.textContent = number1;
      prev.push({choice: chosen, type: "number1"}); //redo
    } else if (prevLast === "op") {
      number2 = chosen;
      lowerScreen.textContent = number2;
      prev.push({choice: chosen, type: "number2"}); //redo
    } else if (prevLast === "number2") {
      number2 = number2 + chosen;
      lowerScreen.textContent = number2;
      prev.push({choice: chosen, type: "number2"});
    } 
  };
}


function addToPrev(...choice) {

}

let clicked; 

buttons.forEach((button) => {
  button.addEventListener("click", () => {    
    clicked = button.textContent;
    displayValue(clicked);
  });
});


//console tests: 

/*let prev = [];
let prevLast;

function test(num1, num2) {
prevLast = prev[prev.length - 1].type;
console.log(prevLast);
return num1+num2;
}

prev = [{choice: "1", type: "number1"}, {choice: "+", type: "op"}, {choice: "2", type: "number2"}];*/


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

/*function displayValue(chosen) {
  if (chosen is num) {
    if (operator is empty) {
      number1 = number1+ chosen and prev = chosen, then show on lowerScreen
    } else {
      number2 = number2+ chosen and prev = chosen, then show on lowerScreen
    }
  } else if (chosen is op) {
    if (upperScreen is empty) { //maybe change to if number1 is empty
      error
    } else if (prev is operator){
      error
    } else if (number2 isnt empty) {
      call operator with number1, operator, and number2, then let number1 = result and operator = chosen, then clear prev THEN prev = result (separated digits) AND chosen, then show number1 and chosen on upperScreen, then clear lowerScreen
    } else {
      number1 followed by operator on upperScreen, and lowerScreen is empty, and operator = op, and prev = chosen
    }
  } else if (chosen is equals) {
    if (upperScreen is empty) { //maybe change to if number1 is empty
      error
    } else if (prev is operator) {
      error
    } else if (previous is equals) {
      do nothing
    } else if (number1 isnt empty and number2 IS empty) {
      number1 on upperScreen and on lowerScreen, prev = equals
    } else {
      call operator with number1, operator, and number2, then show number1 operator number2 equals on upperScreen and result on lowerScreen, then let number1 = results and prev = number1 (separated digits) AND equals, then clear number2 and operator
    } 
  } else if (chosen is clear) {
    clear all screens, number1, number2, prev, and operator
  } else if (chosen is del) {
    if (number1 is empty) {
      do nothing
    } else if (previous is equals) {
      clear upperScreen, then remove last digit from number1, then remove last digit from lowerScreen, then remove last TWO digits from previous (to account for the = and the deleted number)
    } else if (number2 isnt empty) {
      remove last from number2, remove last from previous, remove last from lowerScreen
    } else if (operator isnt empty) {
      clear operator, remove last from previous, remove last from upperScreen
    } else {
      remove last from number1, remove last from previous, remove last from lowerScreen
    }
  };
}
*/