<p align="center">
  <img src="img/logo-task-track.png" alt="Task Track Logo" width="100">
</p>

<h1 align="center">Task Track</h1>

<p align="center">
  <strong>A sleek, modern client-side task management web application engineered for organizing, scheduling, and prioritizing daily workflows directly in your browser.</strong>
</p>

<p align="center">
  <a href="https://tasktrack-site.vercel.app" target="_blank"><strong>🌐 Live Demo: tasktrack-site.vercel.app</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Language-HTML5%20%7C%20CSS3%20%7C%20JavaScript-blue?style=flat-square" alt="Tech Stack">
  <img src="https://img.shields.io/badge/Storage-Local%20Storage-6366f1?style=flat-square" alt="Storage LocalStorage">
  <img src="https://img.shields.io/badge/Dependencies-Zero-success?style=flat-square" alt="Zero Dependencies">
  <img src="https://img.shields.io/badge/Deployment-Vercel-black?style=flat-square&logo=vercel" alt="Vercel Deployment">
  <img src="https://img.shields.io/badge/Copyright-All%20Rights%20Reserved-red?style=flat-square" alt="All Rights Reserved">
</p>

---

## 📌 Overview

**Task Track** is a high-performance, standalone, client-side productivity application designed to make personal task management effortless, fluid, and visually engaging. Embodying a refined dark glassmorphism aesthetic with indigo glowing accents, Task Track pairs intuitive usability with immediate responsiveness.

All task persistence and state management occur 100% locally on the user's client machine via the browser's native `localStorage` API. With zero external backend servers, zero database latency, and zero telemetry or analytics scripts, Task Track delivers an instantaneous user experience while ensuring absolute privacy.

---

## 🌐 Live Deployment

The application is deployed on Vercel and globally accessible:
- **Live URL**: [https://tasktrack-site.vercel.app](https://tasktrack-site.vercel.app)
- **Deployment Platform**: Vercel (Edge Network)
- **Build Configuration**: Zero build step required (Static HTML/CSS/JS)

---

## ✨ Key Features

### 📋 Task Management & Workflow
- **Rapid Task Creation**: Quickly record tasks with title input and due date scheduling.
- **Dynamic Status Progression**: Toggle tasks between active and completed states with real-time visual feedback, including status bar indicators and text strike-through.
- **Instant Deletion**: Remove tasks from memory and storage with a single click.
- **Adaptive Typographic Scaling**: Dynamically scales task title font size based on string length to guarantee optimal layout balance and prevent text overflow.

### 🔍 Intelligent Filtering & Display
- **Real-Time Category Filtering**:
  - **All**: Displays the full inventory of scheduled tasks.
  - **Active**: Filters down strictly to pending, unfinished tasks.
  - **Completed**: Isolates finished items for productivity tracking.
- **Dynamic Empty States**: Automatically renders a styled placeholder box when a filter yields no matching items.

### 🛡️ Client-Side Validation & Safeguards
- **Character Length Enforcement**: Enforces an 18-character ceiling with real-time inline notification warning the user as soon as the threshold is met.
- **Past Date Prevention**: Restricts task scheduling to current or future dates (`date >= today`), rejecting past dates with immediate contextual error messages.
- **Mandatory Field Verification**: Validates presence of both title and date before committing tasks to storage, preventing empty or partial records.

### 🎨 Modern Interface & Visual Hierarchy
- **Refined Dark Glassmorphism**: Crafted using layered slate backgrounds, backdrop blur filters (`backdrop-filter: blur(16px)`), and subtle ambient indigo radial glows.
- **Micro-Interactions & Animations**: Smooth hover transitions, tactile scale responses on click, entry animations (`@keyframes fadeIn`), and custom slim webkit scrollbars.
- **Pixel-Perfect Alignment**: Geometrically centered SVG action icons and clean date picker indicators.
- **Fully Responsive Architecture**: Fluid layout container with custom breakpoints catering smoothly to mobile screens (down to 360px), tablets, and high-DPI desktop viewports.

---

## 🛠️ Tech Stack

- **HTML5**: Semantic W3C-compliant document structure, accessibility attributes, and mobile viewport optimizations.
- **CSS3**: Modern layout architecture utilizing Flexbox, Custom Properties (CSS variables), glassmorphism filters, and CSS keyframe animations.
- **JavaScript (ES6+)**: Pure vanilla JavaScript utilizing event-driven state updates, JSON serialization, and the Web Storage API (`localStorage`), engineered with zero external libraries or dependencies.
- **Deployment**: [Vercel](https://vercel.com) (Edge Network CDN).

---

## 📁 Project Structure

```
task-track/
├── css/
│   └── style.css            # Design system, glassmorphic layout, and animation keyframes
├── img/
│   └── logo-task-track.png  # Brand identity badge and browser favicon
├── js/
│   └── script.js            # Core application state, validation, and localStorage engine
├── index.html               # Main semantic HTML structure and markup
└── README.md                # Project documentation and architectural guidelines
```

---

## 💻 Getting Started

Because Task Track is built strictly using standard web technologies, no build pipeline, compiler, or package manager (`npm`, `yarn`, `pnpm`) is required.

### Prerequisites
A modern web browser supporting modern ECMAScript and CSS features (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Opera, Brave, etc.).

### Local Setup Instructions

#### 1. Clone the Repository
```bash
git clone https://github.com/evanhendramulyadi/task-track.git
cd task-track
```

#### 2. Run the Application

You can run Task Track using any of the following methods:

- **Direct File Opening**:
  Double-click `index.html` in your system file manager (Windows File Explorer, macOS Finder, or Linux file manager) to open it directly in your browser.

- **VS Code Live Server Extension**:
  Open the project directory in Visual Studio Code, right-click `index.html`, and select **Open with Live Server**.

- **Python HTTP Server**:
  ```bash
  # Python 3
  python -m http.server 3000
  ```
  Then navigate to `http://localhost:3000` in your web browser.

- **Node.js Serve (Optional)**:
  ```bash
  npx serve .
  ```

---

## 📖 How to Use

1. Enter your task description into the **Add a task** field (maximum 18 characters).
2. Select a target due date using the integrated date picker (must be today or in the future).
3. Click the **+** button or press `Enter` to commit the task.
4. Filter your active workflow using the **All**, **Active**, or **Completed** segment buttons.
5. Click **Complete** on any task to mark it done.
6. Click **Delete** to permanently erase a task from your list.

---

## 🏗️ Architecture & State Management

### Data Model & Storage Schema
Tasks are modeled as lightweight, self-contained JavaScript objects and persisted as a JSON string under the `tasks` key in `localStorage`:
```json
[
  {
    "id": 1773829410123,
    "text": "Review PRs",
    "date": "2026-10-18",
    "completed": false
  }
]
```

### Reactive Rendering Cycle
1. **Single Source of Truth**: State is maintained in an in-memory `tasks` array, initialized upon load from `localStorage`.
2. **Deterministic Mutation**: Any state modification (adding, completing, or removing a task) updates the in-memory array, serializes the updated dataset to `localStorage`, and immediately triggers `renderTasks()`.
3. **Dynamic Typographic Calculation**:
   To prevent long task titles from breaking visual harmony, text size is dynamically computed before DOM injection:
   $$\text{fontSize} = \max\left(13,\; 14 - \max(0,\; \text{length} - 16) \times 0.4\right)\text{ px}$$

---

## ⚙️ Environment & Configuration

- **Zero Configuration**: No `.env` files, build scripts, or secret tokens are needed.
- **Client-Side Execution**: All processing and state persistence occur strictly within the local browser context.
- **Privacy Assurance**: No secrets, user tasks, or telemetry data are logged or transmitted.

---

## 📄 Copyright & Terms of Use

© 2026 Evan. All Rights Reserved.

### Intellectual Property & Repository Guidelines
This project is an original creation by **Evan**.

This repository is maintained publicly for the purpose of transparency, portfolio display, technical study, and peer review of client-side web application development practices:

- **Review & Learning**: You are welcome to view, inspect, test, and learn from the source code and architectural patterns for individual study and research.
- **No Plagiarism or Unauthorized Rebranding**: Public visibility does not grant permission to duplicate the project, remove original attributions, rename or rebrand the software, and falsely claim authorship.
- **Usage & Redistribution**: Any reuse, adaptation, or derivative work must respect the creator's copyright and applicable terms. Re-implementing similar productivity tracking concepts independently from scratch for educational purposes is welcomed and encouraged.
