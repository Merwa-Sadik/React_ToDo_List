# React Todo List Application

A simple and interactive Todo List application built with React and TypeScript. This application allows users to add, edit, delete, and mark tasks as complete.

## Features

- ✅ Add new tasks
- ✏️ Edit existing tasks (double-click on task text)
- ✓ Mark tasks as complete/incomplete
- 🗑️ Delete tasks
- 📱 Responsive design
- 🎨 Clean and modern UI

## Technologies Used

- React 18
- TypeScript
- Vite
- CSS3

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd React_ToDo_List/react_ToDo
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Usage

- **Add a task**: Type in the input field and click "Add" or press Enter
- **Edit a task**: Double-click on the task text, edit it, and press Enter or click outside
- **Complete a task**: Click the checkbox next to the task
- **Delete a task**: Click the × button on the right side of the task

## Project Structure

```
react_ToDo/
├── src/
│   ├── components/
│   │   └── ToDo.tsx       # TodoList and TodoItem components
│   ├── types.ts           # TypeScript type definitions
│   ├── App.tsx            # Main application component
│   ├── App.css            # Application styles
│   └── main.tsx           # Application entry point
├── package.json
└── vite.config.ts
```

## License

MIT
