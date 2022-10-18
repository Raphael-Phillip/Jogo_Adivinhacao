const screenOne = document.querySelector(".screenOne");
const screenTwo = document.querySelector(".screenTwo");
//Eventos
const btnTry = document.querySelector("#btnTry");
const btnAgain = document.querySelector("#btnAgain");

const randomNuber = Math.round(Math.random() * 10);

let xAttempts = 1;

// função callback
btnTry.addEventListener("click", handleTryClick);
btnAgain.addEventListener("click", haldleResetClick);
document.querySelector("keydown", keyEnter);

function handleTryClick(event) {
  event.preventDefault(event) // não faça o padrão do button

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == inputNumber) {
    toglleScreen()
    screenTwo.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ""
  xAttempts++
};

function haldleResetClick () {
  toglleScreen()
  xAttempts = 1
  randomNuber = Math.round(Math.random() * 10)
};

function toglleScreen() {
  screenOne.classList.toggle("hide")
  screenTwo.classList.toggle("hide")
};

function keyEnter () {
  if (keyEnter.key == "Enter" && screenOne.classList.contains("hide")){
    haldleResetClick()
  }
};