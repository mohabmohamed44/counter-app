# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast 
Refresh


# Counter App

This is a simple counter application built with React, Redux, and Vite. The app demonstrates the use of Redux for state management and showcases basic increment and decrement functionality.

## Features

- Increment and decrement the counter
- State management with Redux
- Simple and clean UI

## Project Structure

counter-app/
├── node_modules/
├── public/
├── src/
│ ├── redux/
│ │ └── store.js
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js