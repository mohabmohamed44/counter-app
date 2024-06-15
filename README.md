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
├── node_modules/      (Contains project dependencies installed by npm or yarn)
├── public/           (Holds static assets like images, fonts, etc.)
├── src/               (Contains the application's source code)
│   ├── redux/          (Redux store and related logic for state management)
│   │   └── store.js
│   ├── App.jsx          (Main React component for the counter application)
│   ├── main.jsx         (Entry point for the application)
│   └── index.css       (Global styles for the application)
├── .gitignore          (Specifies files and folders to be ignored by Git)
├── index.html         (The main HTML file for the application)
├── package.json        (Contains project metadata and dependencies)
└── vite.config.js      (Vite configuration for development and build processes)