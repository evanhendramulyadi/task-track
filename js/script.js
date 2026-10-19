const form = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".filters button");
const errorMsg = document.getElementById("errorMsg");

// Additional UI elements
const charCount = document.getElementById("charCount");
const countAll = document.getElementById("countAll");
const countActive = document.getElementById("countActive");
const countCompleted = document.getElementById("countCompleted");
const progressBarFill = document.getElementById("progressBarFill");
const progressPercent = document.getElementById("progressPercent");
const progressStats = document.getElementById("progressStats");
const progressStatus = document.getElementById("progressStatus");
const currentDateStr = document.getElementById("currentDateStr");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

// Setup initial dates & calendar constraint
function getTodayString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

const today = getTodayString();
if (dateInput) {
    dateInput.min = today;
    if (!dateInput.value) {
        dateInput.value = today;
    }
}

// Display dynamic date in header subtitle
if (currentDateStr) {
    const options = { weekday: "long", day: "numeric", month: "short" };
    currentDateStr.textContent = new Date().toLocaleDateString("en-US", options);
}

// Real-time character count & input validation
taskInput.addEventListener("input", function () {
    const length = taskInput.value.length;

    if (charCount) {
        charCount.textContent = `${length}/18`;
        if (length >= 18) {
            charCount.classList.add("limit-reached");
        } else {
            charCount.classList.remove("limit-reached");
        }
    }

    if (length >= 18) {
        errorMsg.textContent = "Task maximum 18 characters";
    } else if (errorMsg.textContent === "Task maximum 18 characters") {
        errorMsg.textContent = "";
    }
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const text = taskInput.value.trim();
    const date = dateInput.value;
    const currentToday = getTodayString();

    if (!text || !date) {
        errorMsg.textContent = "Please fill all fields";
        return;
    }

    if (text.length > 18) {
        errorMsg.textContent = "Task maximum 18 characters";
        return;
    }

    if (date < currentToday) {
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
    dateInput.value = currentToday;
    if (charCount) {
        charCount.textContent = "0/18";
        charCount.classList.remove("limit-reached");
    }

    renderTasks();
});

function formatDisplayDate(dateStr) {
    if (!dateStr) return "";
    const parts = dateStr.split("-");
    if (parts.length !== 3) return dateStr;
    const year = parseInt(parts[0], 10);
    const monthIndex = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    const dateObj = new Date(year, monthIndex, day);

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${day} ${monthNames[monthIndex]} ${year}`;
}

function getTomorrowString() {
    const tmrw = new Date();
    tmrw.setDate(tmrw.getDate() + 1);
    const year = tmrw.getFullYear();
    const month = String(tmrw.getMonth() + 1).padStart(2, "0");
    const day = String(tmrw.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function updateProgressOverview() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const active = total - completed;

    if (countAll) countAll.textContent = total;
    if (countActive) countActive.textContent = active;
    if (countCompleted) countCompleted.textContent = completed;

    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    if (progressBarFill) {
        progressBarFill.style.width = `${percentage}%`;
    }
    if (progressPercent) {
        progressPercent.textContent = `${percentage}%`;
    }
    if (progressStats) {
        progressStats.textContent = `${completed} of ${total} completed`;
    }
    if (progressStatus) {
        if (total === 0) {
            progressStatus.textContent = "No tasks yet";
        } else if (percentage === 100) {
            progressStatus.textContent = "All completed! 🎉";
        } else if (percentage >= 50) {
            progressStatus.textContent = "Great progress! 🚀";
        } else {
            progressStatus.textContent = "Ready to focus ✨";
        }
    }
}

function renderTasks() {
    taskList.innerHTML = "";
    updateProgressOverview();

    const currentToday = getTodayString();
    const tomorrow = getTomorrowString();

    const filteredTasks = tasks.filter(task => {
        if (currentFilter === "active") return !task.completed;
        if (currentFilter === "completed") return task.completed;
        return true;
    });

    if (filteredTasks.length === 0) {
        let emptyTitle = "No tasks found";
        let emptyDesc = "Add your first task above to get organized.";

        if (currentFilter === "active") {
            emptyTitle = "All caught up!";
            emptyDesc = "You have completed all your active tasks.";
        } else if (currentFilter === "completed") {
            emptyTitle = "No completed tasks";
            emptyDesc = "Finish a task and check it off to see it here.";
        }

        const emptyLi = document.createElement("div");
        emptyLi.className = "empty-state";
        emptyLi.innerHTML = `
            <div class="empty-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>
            </div>
            <div class="empty-title">${emptyTitle}</div>
            <div class="empty-desc">${emptyDesc}</div>
        `;
        taskList.appendChild(emptyLi);
        return;
    }

    filteredTasks.forEach(task => {
        const li = document.createElement("li");

        if (task.completed) {
            li.classList.add("task-completed");
        }

        // Info block
        const info = document.createElement("div");
        info.className = "task-text";

        const title = document.createElement("span");
        title.textContent = task.text;

        const baseSize = 14;
        const shrink = Math.max(0, task.text.length - 16);
        const finalSize = Math.max(13, baseSize - shrink * 0.4);
        title.style.fontSize = finalSize + "px";

        const meta = document.createElement("div");
        meta.className = "task-meta";

        // Smart badge logic
        let badgeHtml = "";
        if (task.date === currentToday) {
            badgeHtml = `<span class="due-badge due-today">Today</span>`;
        } else if (task.date === tomorrow) {
            badgeHtml = `<span class="due-badge due-tomorrow">Tomorrow</span>`;
        } else if (task.date < currentToday && !task.completed) {
            badgeHtml = `<span class="due-badge due-overdue">Overdue</span>`;
        }

        const dateEl = document.createElement("small");
        dateEl.innerHTML = `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            ${formatDisplayDate(task.date)}
        `;

        if (badgeHtml) {
            meta.innerHTML = badgeHtml;
        }
        meta.appendChild(dateEl);

        info.appendChild(title);
        info.appendChild(meta);

        // Actions block
        const actions = document.createElement("div");
        actions.className = "actions";

        // Checkbox button
        const completeBtn = document.createElement("button");
        completeBtn.className = "complete-btn";
        completeBtn.setAttribute("type", "button");
        completeBtn.setAttribute("aria-label", task.completed ? "Mark as active" : "Mark as completed");
        completeBtn.setAttribute("title", task.completed ? "Mark as active" : "Mark as completed");
        completeBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        `;

        completeBtn.onclick = function (e) {
            e.stopPropagation();
            task.completed = !task.completed;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
        };

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.setAttribute("type", "button");
        deleteBtn.setAttribute("aria-label", "Delete task");
        deleteBtn.setAttribute("title", "Delete task");
        deleteBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
        `;

        deleteBtn.onclick = function (e) {
            e.stopPropagation();
            li.classList.add("deleting");
            setTimeout(() => {
                tasks = tasks.filter(t => t.id !== task.id);
                localStorage.setItem("tasks", JSON.stringify(tasks));
                renderTasks();
            }, 200);
        };

        // Prepend checkbox before info for standard task app layout
        li.appendChild(completeBtn);
        li.appendChild(info);
        li.appendChild(actions);
        actions.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}

filterButtons.forEach(btn => {
    btn.addEventListener("click", function () {
        filterButtons.forEach(b => {
            b.classList.remove("active");
            b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");
        currentFilter = btn.dataset.filter;
        renderTasks();
    });
});

renderTasks();