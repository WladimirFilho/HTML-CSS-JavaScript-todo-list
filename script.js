// Selectors
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function Add new task
function addTask() {
  if (inputBox.value === "") {
    alert("No task was written to the input");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    inputBox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  saveDate();
}

// Function clicked
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveDate();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveDate();
    }
  },
  false
);

// Save local storage
function saveDate() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

function deleteAllTasks() {
  localStorage.clear();
  location.reload(true);
}

showTask();
