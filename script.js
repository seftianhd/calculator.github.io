let prev_number;
let now_number = 0;
let cal_operator = "";

function inputnumber(number) {
  if (now_number === "0") {
    now_number = number;
  } else {
    now_number += number;
  }
}

const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
  calculatorScreen.value = number;
  //   console.log(number);
};

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputnumber(event.target.value);
    updateScreen(now_number);
  });
});

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
    // console.log(event.target.value);
  });
});

const inputOperator = (operator) => {
  if (cal_operator === "") {
    prev_number = now_number;
  }
  cal_operator = operator;
  now_number = "0";
};

const equalsign = document.querySelector(".equal-sign");
equalsign.addEventListener("click", (event) => {
  calculate();
  updateScreen(now_number);
});

const calculate = () => {
  let result = "";
  switch (cal_operator) {
    case "+":
      result = parseFloat(prev_number) + parseFloat(now_number);
      break;
    case "-":
      result = parseFloat(prev_number) - parseFloat(now_number);
      break;
    case "*":
      result = parseFloat(prev_number) * parseFloat(now_number);
      break;
    case "/":
      result = parseFloat(prev_number) / parseFloat(now_number);
      break;
  }
  now_number = result;
  cal_operator = "";
};

const inputdot = (dot) => {
  if (now_number.includes(".")) {
    return;
  }
  now_number += dot;
};

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", (event) => {
  inputdot(event.target.value);
  updateScreen(now_number);
});

const clearAll = () => {
  prev_number = "";
  cal_operator = "";
  now_number = "0";
};

const clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(now_number);
});
