// Tworzenie Zadań jako obiekty
class TaskClass {
  constructor(taskText, taskData) {
    this.text = taskText;
    this.data = taskData;
  }
}

// Dodawanie zadan do listy
const listOfTaskCont = [];

let userTask = document.getElementById("task-btn-add-ID");
userTask.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    AddTask();
    ShowTaskModal();
  }
});

function AddTask() {
  let userTask = document.getElementById("task-btn-add-ID");
  let taskUser = userTask.value;
  userTask.value = "";
  let task = new TaskClass(taskUser);
  listOfTaskCont.push(task);

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
      taskBoard.classList.toggle("duty_done");
    });

    // Listener dla usuwania zadania
    taskBoardButton.addEventListener("click", (event) => {
      event.stopPropagation(); // Zapobiega wywołaniu listenera "Zrobiono zadanie"

      listOfTaskCont.splice(listOfTaskCont.indexOf(task), 1); // Usuń zadanie z tablicy
      ShowTask(); // Odśwież listę
    });
  });

  // Footer wystwtlanie ilosciz dan na dziś
  let taskCount = listOfTaskCont.length;
  let taskCountArea = document.getElementById("number_of_task_ID");
  taskCountArea.textContent = `${taskCount} zadań`;
}

//Footer wysiws
let taskCountArea = document.getElementById("number_of_task_ID");
taskCountArea.textContent = `0 zadań`;

function ShowTaskModal() {
  let modal = document.getElementById("modal-task-ID");
  modal.classList.toggle("modal-add-task-cont-ON");
}
