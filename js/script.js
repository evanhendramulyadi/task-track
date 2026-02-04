const form = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".filters button");
const errorMsg = document.getElementById("errorMsg");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

taskInput.addEventListener("input", function () {
    const length = taskInput.value.trim().length;

    if (length >= 18) {
        errorMsg.textContent = "Task maximum 18 characters";
    } else {
        errorMsg.textContent = "";
    }
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const text = taskInput.value.trim();
    const date = dateInput.value;
    const today = new Date().toISOString().split("T")[0];

    if (!text || !date) {
        errorMsg.textContent = "Please fill all fields";
        return;
    }

    if (text.length > 18) {
        errorMsg.textContent = "Task maximum 20 characters";
        return;
    }

    if (date < today) {
        errorMsg.textContent = "Date cannot be in the past";
        return;
    }

    errorMsg.textContent = "";

    tasks.push({
        id: Date.now(),
        text,
        date,
        completed: false
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    form.reset();
    renderTasks();
});

function renderTasks() {
    taskList.innerHTML = "";

    tasks
        .filter(task => {
            if (currentFilter === "active") return !task.completed;
            if (currentFilter === "completed") return task.completed;
            return true;
        })
        .forEach(task => {

            const li = document.createElement("li");

            if (task.completed) {
                li.classList.add("task-completed");
            }

            const info = document.createElement("div");
            info.className = "task-text";

            const title = document.createElement("span");
            title.textContent = task.text;

            const baseSize = 14;
            const shrink = Math.max(0, task.text.length - 16);
            const finalSize = Math.max(13, baseSize - shrink * 0.4);
            title.style.fontSize = finalSize + "px";

            const date = document.createElement("small");
            date.textContent = task.date;

            info.appendChild(title);
            info.appendChild(date);

            const actions = document.createElement("div");
            actions.className = "actions";

            const completeBtn = document.createElement("button");
            completeBtn.className = "complete-btn";
            completeBtn.textContent = task.completed ? "Completed" : "Complete";

            completeBtn.onclick = function () {
                task.completed = true;
                localStorage.setItem("tasks", JSON.stringify(tasks));
                renderTasks();
            };

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "delete-btn";

            deleteBtn.onclick = function () {
                tasks = tasks.filter(t => t.id !== task.id);
                localStorage.setItem("tasks", JSON.stringify(tasks));
                renderTasks();
            };

            actions.appendChild(completeBtn);
            actions.appendChild(deleteBtn);

            li.appendChild(info);
            li.appendChild(actions);

            taskList.appendChild(li);
        });
}

filterButtons.forEach(btn => {
    btn.addEventListener("click", function () {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        renderTasks();
    });
});

renderTasks();