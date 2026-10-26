<p align="center">
  <img src="img/logo-task-track.png" alt="Task Track Logo" width="100">
</p>

<h1 align="left">Task Track</h1>

Task Track is a sleek, minimalist client-side task management web application designed to help users organize, schedule, and prioritize daily workflows directly in their browser.

## 🌐 Live Demo

Experience the live application here:  
👉 **[Task Track](https://tasktrack-site.vercel.app/)**

## ✨ Key Features

- **Task Management**: Create tasks with titles and target due dates.
- **Input Validation & Real-time Feedback**: Prevents past dates and provides a live character counter for the 18-character task limit.
- **Progress Tracking**: Real-time progress bar with completion percentages and motivational status cues.
- **Dynamic Filtering**: Filter tasks seamlessly between **All**, **Active**, and **Completed** views with live count badges.
- **Visual Status Tracking**: Interactive circular completion toggle, smart due-date badges (Today, Tomorrow, Overdue), and smooth strike-through animations.
- **Local Persistence**: Tasks are saved locally in the browser via the `localStorage` API, keeping data available across sessions.
- **Modern Dark Luxe UI**: Ambient floating aurora glow, glassmorphism card with specular highlights, and fluid responsive layouts for mobile and desktop screens.

## 🛠️ Tech Stack

- **HTML5**: Semantic document structure and accessible forms.
- **CSS3**: Modern layout with Flexbox, custom properties, glassmorphism filters, and animations.
- **JavaScript (ES6+)**: Pure vanilla JavaScript for state management, DOM manipulation, and `localStorage` integration.
- **Hosting**: [Vercel](https://vercel.com)

## 💻 Local Setup Instructions

No build tools or external dependencies are required.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/evanhendramulyadi/task-track.git
   cd task-track
   ```

2. **Run the application**:
   - Open `index.html` directly in any modern web browser, **or**
   - Serve it using a lightweight local development server:
     ```bash
     # Using Python
     python -m http.server 3000
     ```
     Then open `http://localhost:3000` in your browser.

## 📄 Copyright & Ownership

© 2026 Evan Hendra Mulyadi. All Rights Reserved.

This project is an original work created by **Evan Hendra Mulyadi**.

This repository is publicly accessible solely for viewing, studying, and reviewing the source code. Public access does **not** grant permission to copy the entire project, rebrand or rename it, remove attribution, or claim it as your own creation. Re-use or distribution without explicit permission from the author is strictly prohibited.

