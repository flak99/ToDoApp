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
const listOfTaskCont = [];
function AddTask() {
  let userTask = prompt("Dodaj zadanie");
  let userTaskData = prompt("podaj date");
  let task = new TaskClass(userTask, userTaskData);
  listOfTaskCont.push(task);
  console.log(listOfTaskCont);
  ShowTask();

  console.log(task.text, task.data);
}

//Wyświetlanie zadań
function ShowTask() {
  let listOfTaskView = document.getElementById("list_of_duties_ID");
  let taskBoard = document.createElement("div");
  taskBoard.classList.add("duty");

  let taskBoardText = document.createElement("div");
  taskBoardText.classList.add("duty_text");
  listOfTaskCont.forEach((e) => {
    taskBoardText.textContent = e.text;
  });

  let taskBoardButtonArea = document.createElement("div");
  taskBoardButtonArea.classList.add("duty_delete_btn");

  let taskBoardButton = document.createElement("button");
  taskBoardButton.classList.add("delete_btn");
  taskBoardButton.textContent = "usuń";

  listOfTaskView.appendChild(taskBoard);
  taskBoard.appendChild(taskBoardText);
  taskBoard.appendChild(taskBoardButtonArea);
  taskBoardButtonArea.appendChild(taskBoardButton);

  const deleteTaskBtn = document.querySelectorAll(".delete_btn");
  const doneTaskBtn = document.querySelectorAll(".duty");

  deleteTaskBtn.forEach((e) => {
    e.addEventListener("click", (event) => {
      console.log("usueniato zadanie");
      event.stopPropagation();
    });
  });

  doneTaskBtn.forEach((e) => {
    e.addEventListener("click", () => {
      console.log("Zrobiono zadanie ");
      e.classList.toggle("duty_done");
    });
  });
}
