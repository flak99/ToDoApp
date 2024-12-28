// const zadania = ["Umyc rece", "kupic pączka", "Sprzedać nerkę", "poczytać"];

let przycisk = document.getElementById("btn");
let inputArea = document.getElementById("inputArea");
let zadania = document.querySelectorAll(".ala");

przycisk.addEventListener("click", function () {
  inputArea.classList.toggle("open");
  zadania.forEach((e) => {
    e.classList.add("open");
  });
  console.log("click");
});
