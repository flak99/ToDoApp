// Footer wyświetlanie daty
let footerMonth = new Date().getMonth();
let footerDay = new Date().getDate();
const months = [
  "STY",
  "LUT",
  "MAR",
  "KWI",
  "MAJ",
  "CZE",
  "LIP",
  "WRZ",
  "PAŹ",
  "GRU",
];
let dateLabelFooter = document.getElementById("data_label_ID");
dateLabelFooter.textContent = footerDay + " " + months[footerMonth];

// proby

let data = new Date();

let dzisiaj = data.getDate();

// Obliczanie daty wczoraj
let wczorajData = new Date(data);
wczorajData.setDate(data.getDate() - 1);
let wczoraj = wczorajData.getDate();

// Obliczanie daty pojutrze
let pojutrzeData = new Date(data);
pojutrzeData.setDate(data.getDate() + 2);
let pojutrze = pojutrzeData.getDate();

console.log(`Dzisiaj: ${dzisiaj}`);
console.log(`Wczoraj: ${wczoraj}`);
console.log(`Pojutrze: ${pojutrze}`);
