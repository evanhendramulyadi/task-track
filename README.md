# Task Track

Task Track is a sleek, minimalist client-side task management web application designed to help users organize, schedule, and prioritize daily workflows directly in their browser.

## 🌐 Live Demo

Experience the live application here:  
👉 **[Task Track](https://tasktrack-site.vercel.app/)**

## ✨ Key Features

- **Task Management**: Create tasks with titles and target due dates.
- **Input Validation**: Prevents past dates and enforces an 18-character task limit with real-time feedback.
- **Dynamic Filtering**: Filter tasks seamlessly between **All**, **Active**, and **Completed** views.
- **Visual Status Tracking**: Interactive completion toggle with strike-through styling and disabled action state.
- **Local Persistence**: Tasks are saved locally in the browser via the `localStorage` API, keeping data available across sessions.
- **Modern Dark UI**: Ambient glassmorphism interface with fluid responsive layouts for mobile and desktop screens.

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

