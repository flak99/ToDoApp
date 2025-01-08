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

// Metoda DoneTask i DeleteTask

// Dodawanie zadan do listy
const listOfTaskCont = [];
function AddTask() {
  let userTask = prompt("Dodaj zadanie");
  listOfTaskCont.push(userTask);
  console.log(listOfTaskCont);
  ShowTask();
}

//Wyświetlanie zadań
function ShowTask() {
  let listOfTaskView = document.getElementById("list_of_duties_ID");
  let taskBoard = document.createElement("div");
  taskBoard.classList.add("duty");
  taskBoard.id = "done_btn";

  let taskBoardText = document.createElement("div");
  taskBoardText.classList.add("duty_text");
  taskBoardText.textContent = "Zrobic pranie";

  let taskBoardButtonArea = document.createElement("div");
  taskBoardButtonArea.classList.add("duty_delete_btn");

  let taskBoardButton = document.createElement("button");
  taskBoardButton.classList.add("delete_btn");
  taskBoardButton.id = "delete_btn_ID";
  taskBoardButton.textContent = "usuń";

  listOfTaskView.appendChild(taskBoard);
  taskBoard.appendChild(taskBoardText);
  taskBoard.appendChild(taskBoardButtonArea);
  taskBoard.appendChild(taskBoardButton);

  const deleteTaskBtn = document.getElementById("delete_btn_ID");
  const doneTaskBtn = document.getElementById("done_btn");

  deleteTaskBtn.addEventListener("click", (event) => {
    console.log("usueniato zadanie");
    event.stopPropagation();
  });

  doneTaskBtn.addEventListener("click", () => {
    console.log("Zrobiono zadanie ");
    doneTaskBtn.classList.toggle("duty_done");
  });
}

/* <div class="duty" id="done_btn">
<div class="duty_text">Zrobić pranie</div>
<div class="duty_delete_btn">
  <button class="delete_btn" id="delete_btn_ID">usuń</button>
</div>
</div> */
