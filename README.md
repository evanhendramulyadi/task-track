# Task Track

A sleek, responsive, and minimalist web-based task tracking application designed to help users organize daily to-dos with ease. Built with modern vanilla web technologies, featuring client-side persistence and an ambient dark-mode aesthetic.

---

## 🚀 Live Demo

Experience the live application here:  
👉 **[Task Track](https://tasktrack-site.vercel.app/)**

---

## ✨ Features

- **Task Creation & Scheduling**: Add tasks quickly with an integrated deadline date picker.
- **Input Validation**:
  - Task length validation (maximum 18 characters).
  - Date validation (prevents setting past dates).
  - Empty field detection with clear inline error messages.
- **Dynamic Task Filtering**: Seamlessly filter tasks by status:
  - **All**: View all scheduled tasks.
  - **Active**: View tasks currently pending completion.
  - **Completed**: View tasks marked as done.
- **Local Persistence**: Tasks are saved automatically to the browser's `localStorage`, ensuring data persists across page refreshes.
- **Modern Glassmorphic UI**:
  - Dark mode aesthetic with deep slate and indigo hues.
  - Ambient radial gradients and backdrop blur.
  - Interactive visual states (line-through on completion, active status border accents, custom scrollbars, and hover animations).
- **Responsive Layout**: Designed to adapt cleanly across mobile and desktop devices.

---

## 🛠️ Tech Stack

- **Markup**: HTML5 (Semantic Structure)
- **Styling**: CSS3 (Modern Glassmorphism, CSS Variables, Flexbox, Keyframe Animations)
- **Scripting**: Vanilla JavaScript (ES6+, DOM Manipulation, LocalStorage API)
- **Deployment**: [Vercel](https://vercel.com)

---

## 📁 Project Structure

```
task-track/
├── index.html        # Main HTML entry point
├── css/
│   └── style.css     # Stylesheet containing design system and animations
├── js/
│   └── script.js     # Core application logic and state management
├── img/
│   └── logo-task-track.png  # Brand logo and favicon
└── README.md         # Project documentation
```

---

## 💻 Getting Started Locally

Because this project is built entirely with pure vanilla technologies, no build tools or package managers are required.

### Prerequisites

A modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, or Apple Safari).

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/task-track.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd task-track
   ```

3. **Open the project**:
   - Double-click `index.html` to open it directly in your web browser, **or**
   - Use a local development server such as VS Code's **Live Server** extension, or run:
     ```bash
     # Using Python 3
     python -m http.server 3000
     ```
     Then navigate to `http://localhost:3000` in your browser.

---

## 📄 Copyright & Ownership

© 2026 Evan. All Rights Reserved.

This project is the original work of **Evan**. 

This repository is publicly available for the sole purpose of viewing and learning from the source code. Public access does **not** grant permission to copy this project, rebrand it, or claim it as your own creation. Any reproduction, distribution, or derivative use without explicit authorization is strictly prohibited and must respect all applicable copyright and intellectual property rights.

