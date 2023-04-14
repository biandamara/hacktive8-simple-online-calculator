let display = document.getElementById("display");
let numbers = document.getElementsByClassName("numbers");
let operators = document.getElementsByClassName("operators");
let clearAllButton = document.getElementById("clear-all-button");
let clearButton = document.getElementById("clear-button");
let resultButton = document.getElementById("result-button");

// display input
display.addEventListener("input", function () {
  let validInput = display.value.match(/^[0-9\*\/\+\-]+$/);
  if (validInput) {
    console.log("Valid Input");
  } else {
    display.value = "";
    alert("Invalid Input");
    console.log("Invalid Input");
  }
});

// button numbers
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    let pushed = this.value;
    display.value = display.value + pushed;
  });
}

// button operators
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    let pushed = this.value;
    display.value = display.value + pushed;
  });
}

// button all clear
clearAllButton.addEventListener("click", function () {
  display.value = "";
});

// button clear entry
clearButton.addEventListener("click", function () {
  let maxLength = display.value.length;
  display.value = display.value.substring(0, maxLength - 1);
});

// button result
resultButton.addEventListener("click", function () {
  try {
    display.value = eval(display.value);
  } catch {
    alert("Error: " + display.value);
  }
});
