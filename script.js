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

let prev = [];
let prevLast; //might need to empty this on clear? Value is typeof string btw
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
  prevLast = prev[prev.length -1].type;
  if (chosen === "Clear") {
    prev = [];
    number1 = "";
    number2 = "";
    operator = "";
  } else if (chosen is delete) {
    if (clicked is empty) {

    } else if () {

    } else if () {
      
    } else if () {
      
    } else if () {
      
    }
  } else if (chosen is equals) {
    if ( || ) {

    } else if () {
      
    } else if () {
      
    } else if () {
      
    }
  } else if (chosen is op) {
    if ( || ) {

    } else if () {
      
    } else if () {
      
    } else if () {
      
    }
  } else if (chosen is num) {
    
    if (prev.length === 0) {
      number1 = num;
      lowerScreen.textContent = number1;
      prev.push({choice: num, type: "number1"}); //redo
    } else if (prevLast.type === "number1") {
      
    } else if () {
      
    } else if () {
      
    } else if () {
      
    }
  };
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