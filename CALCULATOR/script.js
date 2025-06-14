const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let operator = "";
let firstValue = "";
let resultShown = false;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
      firstValue = "";
      operator = "";
      display.textContent = "0";
      resultShown = false;
      return;
    }

    if (value === "=") {
      if (firstValue !== "" && operator !== "" && currentInput !== "") {
        const expression = firstValue + operator + currentInput;
        display.textContent = eval(expression);
        resultShown = true;
      }
      return;
    }

    if (["+", "-", "*", "/"].includes(value)) {
      if (currentInput === "") return;
      firstValue = currentInput;
      operator = value;
      currentInput = "";
      return;
    }

    if (resultShown) {
      currentInput = value;
      resultShown = false;
    } else {
      currentInput += value;
    }

    display.textContent = currentInput;
  });
});
