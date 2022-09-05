const inputNbr = document.querySelector("#input-nbr");
const convBtn = document.querySelector("#conv-btn");
const resetBtn = document.querySelector("#reset-btn");
const lengthEl = document.querySelector("#length");
const volumeEl = document.querySelector("#volume");
const massEl = document.querySelector("#mass");

let userInput = [];

const data = [
  { variable: lengthEl, unitOne: "meters", convNum: 3.281, unitTwo: "feet" },
  {
    variable: volumeEl,
    unitOne: "liters",
    convNum: 0.264,
    unitTwo: "gallons",
  },
  {
    variable: massEl,
    unitOne: "kilograms",
    convNum: 2.204,
    unitTwo: "pounds",
  },
];

convBtn.addEventListener("click", function () {
  userInput.push(inputNbr.value);

  for (let i = 0; i < data.length; i++) {
    data[i].variable.innerHTML = `${userInput[0]} ${data[i].unitOne} = ${(
      userInput[0] * data[i].convNum
    ).toFixed(2)} ${data[i].unitTwo} | ${userInput[0]} ${data[i].unitTwo} = ${(
      userInput[0] / data[i].convNum
    ).toFixed(2)} ${data[i].unitOne}`;
  }
  inputNbr.value = "";
});

resetBtn.addEventListener("click", function () {
  location.reload();
});
