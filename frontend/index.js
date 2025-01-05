// const zadania = ["Umyc rece", "kupic pączka", "Sprzedać nerkę", "poczytać"];

// let przycisk = document.getElementById("btn");
// let inputArea = document.getElementById("inputArea");
// let zadania = document.querySelectorAll(".ala");

// przycisk.addEventListener("click", function () {
//   inputArea.classList.toggle("open");
//   zadania.forEach((e) => {
//     e.classList.add("open");
//   });
//   console.log("click");
// });

// Wyświetlanie dat
const dataArray = [];
const dataAreaView = document.getElementById("dates_container_ID");

for (let i = 1; i < 10; i++) {
  let data = `0${i}.01`;
  dataArray.push(data);
}
for (let i = 10; i <= 31; i++) {
  let data = `${i}.01`;
  dataArray.push(data);
}
console.log(dataArray);

dataArray.forEach((data) => {
  let dataSet = document.createElement("div");
  dataSet.classList.add("scrol-items");
  dataSet.innerHTML = data;
  dataAreaView.appendChild(dataSet);
});
