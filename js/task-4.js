const btnIncrement = document.querySelector(
  "#counter button[data-action='increment']",
);
const btnDecrement = document.querySelector(
  "#counter button[data-action='decrement']",
);
const counter = document.querySelector('#counter #value');

let counterValue = +counter.textContent;

btnDecrement.addEventListener('click', () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});

btnIncrement.addEventListener('click', () => {
  counterValue += 1;
  counter.textContent = counterValue;
});

// ------------------вариант с внешней функцией------------------
// btnDecrement.addEventListener('click', btnClicToDecrement);

// btnIncrement.addEventListener('click', btnClicToIncrement);

// function btnClicToDecrement() {
//   counterValue -= 1;
//   counter.textContent = counterValue;
// }
// function btnClicToIncrement() {
//   counterValue += 1;
//   counter.textContent = counterValue;
// }
