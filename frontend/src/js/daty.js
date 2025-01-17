let data = new Date();

ConvertDataNameFormat();
ConvertMounthsFormat();
ShowTodayData();
ShowTommorowData();
ShowYesterdayDate();
ChangeDateBtnBackground();
ShowTaskForDate();

function ConvertDataNameFormat() {
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

  return months[footerMonth];
}
function ConvertMounthsFormat() {
  let data = new Date();
  let mounthsBeforeConvert = data.getMonth();
  const mounthsNumber = [
    ".01",
    ".02",
    ".03",
    ".04",
    ".05",
    ".06",
    ".07",
    ".08",
    ".09",
    ".10",
    ".11",
    ".12",
  ];

  return mounthsNumber[mounthsBeforeConvert];
}

function ConvertWeekDayName(number) {
  // 1 -> dzisiaj, 2 -> wczoraj, 3 -> jutro
  let data = new Date();
  let dayname = data.getDay();
  let DayNames = ["PON", "WT", "ŚR", "CZW", "PI", "SOB", "NIE"];

  if (number === 1) {
    return DayNames[dayname];
  } else if (number === 2) {
    return DayNames[dayname - 1];
  } else {
    return DayNames[dayname + 1];
  }
}

function ShowYesterdayDate() {
  let wczorajData = new Date(data);
  wczorajData.setDate(data.getDate() - 1);
  let wczoraj = wczorajData.getDate();
  let mounthsFormat = ConvertMounthsFormat();

  //Formatowanie liczby dnia i miesiąca
  if (wczoraj < 10) {
    wczoraj = `0${wczoraj}${mounthsFormat} `;
  } else {
    wczoraj = `${wczoraj}${mounthsFormat}`;
  }
  let btn1 = document.getElementById("btn1");
  let dataNumber = btn1.children[0];
  dataNumber.innerHTML = wczoraj;

  //Formatowanie nazwy dnia oraz wyswitlanie go
  let weekDayName = btn1.children[1];
  weekDayName.innerHTML = ConvertWeekDayName(2);
}
function ShowTodayData() {
  let dzisiaj = data.getDate();
  let mounthsFormat = ConvertMounthsFormat();
  if (dzisiaj < 10) {
    dzisiaj = `0${dzisiaj}${mounthsFormat} `;
  } else {
    dzisiaj = `${dzisiaj}${mounthsFormat}`;
  }

  let btn2 = document.getElementById("btn2");
  let dataNumber = btn2.children[0];
  dataNumber.innerHTML = dzisiaj;

  let weekDayName = btn2.children[1];
  weekDayName.innerHTML = ConvertWeekDayName(1);
}

function ShowTommorowData() {
  let jutroData = new Date(data);
  jutroData.setDate(data.getDate() + 1);
  let jutro = jutroData.getDate();
  let mounthsFormat = ConvertMounthsFormat();
  if (jutro < 10) {
    jutro = `0${jutro}${mounthsFormat} `;
  } else {
    jutro = `${jutro}${mounthsFormat}`;
  }

  let btn3 = document.getElementById("btn3");
  let dataNumber = btn3.children[0];
  dataNumber.innerHTML = jutro;

  let weekDayName = btn3.children[1];
  weekDayName.innerHTML = ConvertWeekDayName(3);
}

//Metoda wyboru danej daty w main page

function ChangeDateBtnBackground() {
  const buttons = document.querySelectorAll(".date");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.toggle("active");
    });
  });
}

function ShowTaskForDate() {
  const buttons = document.querySelectorAll(".date");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let dateValue = button.children[0].innerHTML;
    });
  });
}
