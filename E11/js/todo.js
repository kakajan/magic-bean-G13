const titleInput = document.querySelector(".taskTitle");
const dueDateInput = document.querySelector(".taskDue");
const taskLists = document.querySelector(".taskLists");
const doneLists = document.querySelector(".doneLists");
const addBtn = document.querySelector(".addBtn");
const editBtn = document.querySelector(".editBtn");
const tasks = JSON.parse(localStorage.getItem("tasks"));
let currentTaskIndex;
editBtn.style.display = "none";
showList(generateListItems());
showCompletedList();

function showList(listItems) {
  taskLists.innerHTML = listItems;
}
function showCompletedList() {
  doneLists.innerHTML = completedTasks();
}
function removeItem(index) {
  tasks.splice(index, 1);
  console.log(tasks);
  showList(generateListItems());
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function generateListItems() {
  let list = "";
  tasks.forEach((val, index) => {
    if (!val.complete) {
      list += `<li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <h5>${val.title} | ${val.dueData}</h5>
            <div class="actions">
              <button onclick="editTask(${index})" class="btn btn-sm btn-outline-secondary" type="button">
                <i class="bi bi-pen"></i>
              </button>
              <button onclick="removeItem(${index})" class="btn btn-sm btn-outline-danger" type="button">
                <i class="bi bi-trash"></i>
              </button>
              <button onclick="complete(${index})" class="btn btn-sm btn-outline-success" type="button">
                <i class="bi bi-check-all"></i>
              </button>
            </div>
          </li>`;
    }
  });
  return list;
}
function completedTasks() {
  let list = "";
  tasks.forEach((val, index) => {
    if (val.complete) {
      list += `<li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <h5>${val.title} | ${val.dueData}</h5>
            <div class="actions">
              <i class="bi bi-check-all"></i>
            </div>
          </li>`;
    }
  });
  return list;
}
function addTask() {
  const newTask = {
    title: titleInput.value,
    dueData: dueDateInput.value,
    complete: false,
  };
  tasks.push(newTask);
  console.log(tasks);
  resetInput();
  titleInput.focus();
  showList(generateListItems());
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function resetInput() {
  titleInput.value = "";
  dueDateInput.value = "";
}
function updateTask() {
  tasks[currentTaskIndex].title = titleInput.value;
  tasks[currentTaskIndex].dueData = dueDateInput.value;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showList(generateListItems());
  resetInput();
  editBtn.style.display = "none";
  addBtn.style.display = "block";
}
function editTask(index) {
  currentTaskIndex = index;
  addBtn.style.display = "none";
  editBtn.style.display = "block";
  titleInput.value = tasks[index].title;
  dueDateInput.value = tasks[index].dueData;
}
function complete(index) {
  tasks[index].complete = true;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showCompletedList();
  showList(generateListItems());
}
