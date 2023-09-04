const button = document.querySelector("button");
const input = document.querySelector("input");
const resultTitle = document.querySelector("h3");

const validator = (value) => {
  const valueToNumber = Number(value);
  if (!valueToNumber) {
    alert("This field does not accept numbers less than zero");
    resultTitle.innerText = "";
    input.value = "";
    return;
  }
  return valueToNumber;
};

const findNeighbors = (event) => {
  event.preventDefault();
  var number = validator(input.value);
  if (!!number) {
    resultTitle.innerText = `
    Number: ${number}
    Neighbors: ${number++} and ${number--}
    `;
  }
};

button.addEventListener("click", findNeighbors);
