const inputs = document.querySelectorAll("input");
const deleteAllBtn = document.querySelector("#deleteAllBtn");
const calculateBtn = document.querySelector("#btn");
const testBtn = document.querySelector("#test");
let inputValues = [];

function deleteAll() {
  inputValues = [];
  for (const input of inputs) {
    input.value = "";
  }
  updateValues();
}

function updateValues() {
  inputValues = [];
  for (const input of inputs) {
    inputValues.push(input.value);
  }
  console.log(inputValues);
}

function calculate() {
  let 총합 = 0;
  let add = 0;
  for (const value of inputValues) {
    if (value === "") {
      add = 0;
    } else {
      add = Math.floor(value);
    }
    총합 += add;
    console.log(add);
  }

  showResult(Math.floor(총합 / 28));
}

function showResult(resultContent) {
  document.querySelector("#result").innerText = `결과 : ${resultContent}`;
}

function showWarnning(warnningContent) {
  document.querySelector("#warnning").innerText = warnningContent;
}

function test() {
  for (const input of inputs) {
    input.value =
      95 +
      Math.floor(
        Math.random() * 10 +
          Math.random() * 10 +
          Math.random() * 30 -
          (Math.random() * 10 * Math.random() * 4) / 6
      );
  }
  updateValues();
}

updateValues();
for (const input of inputs) {
  input.addEventListener("change", updateValues);
}

deleteAllBtn.addEventListener("click", deleteAll);
calculateBtn.addEventListener("click", calculate);
testBtn.addEventListener("click", test);
