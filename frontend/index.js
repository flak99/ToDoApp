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

dataArray.forEach((data) => {
  let dataSet = document.createElement("div");
  dataSet.classList.add("scrol-items");
  dataSet.innerHTML = data;
  dataAreaView.appendChild(dataSet);
});

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
}
