// Wyświetlanie dat
const dataArray = [];
const dataAreaView = document.getElementById("dates_container_ID");

function generateDates() {
  const year = new Date().getFullYear(); // Pobierz bieżący rok
  let currentDate = new Date(year, 0, 1); // Ustaw datę na 1 stycznia
  const endDate = new Date(year, 0, 31); // Ustaw datę na 31 Stycznia

  while (currentDate <= endDate) {
    // Formatowanie daty do DD.MM
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    dataArray.push(`${day}.${month}`);
    currentDate.setDate(currentDate.getDate() + 1);
  }
}

function displayDates() {
  dataArray.forEach((data) => {
    let dataSet = document.createElement("div");
    dataSet.classList.add("scrol-items");
    dataSet.innerHTML = data;
    dataAreaView.appendChild(dataSet);
  });
}

generateDates();
displayDates();

// Footer wystwlanie dziajeszej daty
let footerMonth = new Date().getMonth();
let footerDay = new Date().getDate();
const months = ["STY", "LUT", "MAR"];
let dateLabelFooter = document.getElementById("data_label_ID");
dateLabelFooter.textContent = footerDay + " " + months[footerMonth];

let taskCountArea = document.getElementById("number_of_task_ID");
taskCountArea.textContent = `0 zadań`;

// Tworzenie Zadań jako obiekty
class TaskClass {
  constructor(taskText, taskData) {
    this.text = taskText;
    this.data = taskData;
  }
}

// Dodawanie zadan do listy

const listOfTaskCont = []; // Tablica przechowująca zadania

function AddTask() {
  let userTask = prompt("Dodaj zadanie");
  let userTaskData = prompt("podaj date");
  let task = new TaskClass(userTask, userTaskData);
  listOfTaskCont.push(task);
  console.log(listOfTaskCont);
  ShowTask();
}

function ShowTask() {
  let listOfTaskView = document.getElementById("list_of_duties_ID");

  // Wyczyść poprzednie elementy
  listOfTaskView.innerHTML = "";

  listOfTaskCont.forEach((task) => {
    let taskBoard = document.createElement("div");
    taskBoard.classList.add("duty");

    let taskBoardText = document.createElement("div");
    taskBoardText.classList.add("duty_text");
    taskBoardText.textContent = task.text;

    let taskBoardButtonArea = document.createElement("div");
    taskBoardButtonArea.classList.add("duty_delete_btn");

    let taskBoardButton = document.createElement("button");
    taskBoardButton.classList.add("delete_btn");
    taskBoardButton.textContent = "usuń";

    // Dodawanie elementów
    taskBoard.appendChild(taskBoardText);
    taskBoard.appendChild(taskBoardButtonArea);
    taskBoardButtonArea.appendChild(taskBoardButton);
    listOfTaskView.appendChild(taskBoard);

    // Listener dla ukończenia zadania
    taskBoard.addEventListener("click", () => {
      console.log("Zrobiono zadanie ");
      taskBoard.classList.toggle("duty_done");
    });

    // Listener dla usuwania zadania
    taskBoardButton.addEventListener("click", (event) => {
      event.stopPropagation(); // Zapobiega wywołaniu listenera "Zrobiono zadanie"
      console.log("Usunięto zadanie");
      listOfTaskCont.splice(listOfTaskCont.indexOf(task), 1); // Usuń zadanie z tablicy
      ShowTask(); // Odśwież listę
    });
  });

  // Footer wystwtlanie ilosciz dan na dziś
  let taskCount = listOfTaskCont.length;
  let taskCountArea = document.getElementById("number_of_task_ID");
  taskCountArea.textContent = `${taskCount} zadań`;
}

// Pasek doświadczenia

// Poziomy uzytkownka

// Dodawanie i rozciaganie paska exp
let expBar = document.getElementById("exp_bar_ID");
let borderLVL = maxExpLvl;

let zdobytePunkty = 47;
let dodajBtn = document.getElementById("btn-dodaj");

dodajBtn.addEventListener("click", () => {
  //Dodawanie punktów
  if (punkty < borderLVL) {
    punkty += zdobytePunkty;
    console.log(punkty);
  } else {
    punkty = borderLVL;
    console.log(`${punkty}`);
  }

  //Wystwtlanie paska exp
  let punktyProcentowo = (punkty / borderLVL) * 100;
  expBar.style.width = `${punktyProcentowo}%`;

  //Wyswietlanie poziomu urzytkownika
  let lvlLabel = document.getElementById("user_level_ID");
  let userLVL = 1;
  if (punkty > borderLVL) {
    lvlLabel.innerHTML = `${userLVL + 1}`;
  }
});
