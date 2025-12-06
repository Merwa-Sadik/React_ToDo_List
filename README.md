# 📝 React Todo List Application

<div align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/CSS3-Modern-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
</div>

<br />

<p align="center">
  A modern, interactive Todo List application built with React and TypeScript featuring a beautiful gradient UI, smooth animations, and real-time task statistics.
</p>

## ✨ Features

- ✅ **Add Tasks** - Quickly add new tasks with a clean input form
- ✏️ **Edit Tasks** - Double-click any task to edit it inline
- ☑️ **Mark Complete** - Check off completed tasks with visual feedback
- 🗑️ **Delete Tasks** - Remove tasks with a single click
- 📊 **Live Statistics** - Track total, completed, and pending tasks in real-time
- 🎨 **Modern UI** - Beautiful gradient design with glassmorphism effects
- ✨ **Smooth Animations** - Polished hover effects and transitions
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ♿ **Accessible** - ARIA labels and keyboard navigation support

## 🚀 Demo

### Key Interactions:
- Type and press **Enter** or click **Add** to create a task
- **Double-click** on task text to edit
- **Click checkbox** to mark as complete/incomplete
- **Click Delete** button to remove a task

## 🛠️ Technologies Used

- **React 18** - Modern React with Hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **CSS3** - Modern styling with gradients and animations

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd React_ToDo_List
```

2. **Navigate to the project directory**
```bash
cd react_ToDo
```

3. **Install dependencies**
```bash
npm install
```

## 🎯 Usage

### Development Mode

Start the development server with hot reload:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

Create an optimized production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 📁 Project Structure

```
react_ToDo/
├── src/
│   ├── components/
│   │   └── ToDo.tsx          # TodoList and TodoItem components
│   ├── types.ts              # TypeScript type definitions
│   ├── App.tsx               # Main application component with state management
│   ├── App.css               # Application styles with gradients and animations
│   ├── index.css             # Global styles and theme
│   └── main.tsx              # Application entry point
├── public/
│   └── vite.svg              # Vite logo
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
└── README.md                 # Project documentation
```

## 🎨 Features Breakdown

### Component Architecture

- **App.tsx** - Main component managing todo state and statistics
- **TodoList** - Renders the input form and list of todos
- **TodoItem** - Individual todo item with edit, complete, and delete functionality

### State Management

- Uses React Hooks (useState) for local state management
- Efficient re-rendering with proper key props
- Type-safe state updates with TypeScript

### Styling Highlights

- Gradient backgrounds and text effects
- Glassmorphism UI elements
- Smooth transitions and hover effects
- Responsive design with mobile breakpoints
- Dark theme optimized

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Built with ❤️ using React and TypeScript

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for the blazing fast build tool
- TypeScript for type safety

---

<div align="center">
  Made with ❤️ and ☕
</div>
