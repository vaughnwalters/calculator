"use strict";

var num1 = null;
var num2 = null;
var selectedFunc = null;

// **********************
// functions to be tested
// **********************

// to make first test pass
// function add () {
// };
// to make second test pass
function add (num1, num2) {
  return num1+ num2;
};

// to make fourth test pass
function subtract (num1, num2) {
  return num1 - num2;
};

// make multiply function
// // multiply two integers
function multiply (num1, num2) {
  return num1 * num2;
};

// make divide function
// // divide two integers
function divide (num1, num2) {
  return num1 / num2;
};

// make square function
// square an integer
function square (num) {
  return num * num;
};

// make squareRoot function
// find squareRoot of an integer
function squareRoot (num) {
  return Math.sqrt(num);
};

function chooseOp (func, num1, num2) {
  return window[func](num1, num2);
}

$("#calcs").on("click", "button", function() {
// get value of number entered in input field
  num1 = parseInt($("#input").val());
// choose which operator was clicked on
  selectedFunc = $(this)[0].id;
  if (selectedFunc === "squareRoot" || selectedFunc === "square") {
// execute chooseOp and pass in values
// function called that chooses which operator is to be used
// this will call the chooseOp function and pass on num1 and an int
    var answer = chooseOp(selectedFunc, num1);
    $("#input").val(`answer is ${answer}`);
  } else {
// clear input field
  $("#input").val("").focus();
  };
});

// on keyup event capture second value that is entered and assign it to 
// a variable and then run the chooseOp function with this value
// and the function and value chosen in the click event
$("#calcs").keydown(function (e) {
  if (e.keyCode == 13) {
    num2 = parseInt($("#input").val());
    var answer = chooseOp(selectedFunc, num1, num2);
    $("#input").val(`answer is ${answer}`);  
  }
}); 