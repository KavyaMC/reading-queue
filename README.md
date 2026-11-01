# Reading Queue

A simple, accessible reading tracker built with React and Vite.

## About the Project

Reading Queue is a React learning project that aims to provide a simple way to organise and track books and articles.

The application is being developed as a hands-on exercise in learning React, JavaScript, component-based development, and accessible web development.

The goal is to build an application that allows users to manage their reading lists, track reading progress, and review their reading statistics.

## Planned Features

- **Reading Management:** Add and delete books and articles manually or search an online library to add items.
- **Reading Status:** Organise items into three categories: Want to Read, Reading, and Finished.
- **Progress Tracking:** Record pages read and monitor individual reading progress.
- **Filtering and Sorting:** Filter items by reading status and sort them by title or progress.
- **Reading Statistics:** View total items, completed books, pages read, and overall progress.
- **Yearly Reading Goal:** Set and track an annual reading target.
- **Data Persistence:** Save reading lists and preferences using browser local storage.

## Accessibility

Accessibility is an important part of this project's development.

The application aims to support keyboard navigation and screen reader users throughout its interface.

Development priorities include:

- Semantic HTML and meaningful document structure.
- Properly labelled form fields and buttons.
- Keyboard-accessible controls and interactions.
- Screen reader announcements using `aria-live` for important changes.
- Appropriate focus management when content changes.
- Accessibility linting with ESLint and `eslint-plugin-jsx-a11y`.

## Technology Stack

- **React:** Component-based user interface development.
- **Vite:** Development server and build tooling.
- **JavaScript:** Application logic.
- **Bun:** JavaScript runtime and package manager.
- **ESLint:** Code quality and linting.
- **eslint-plugin-jsx-a11y:** Accessibility checks for JSX.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Bun](https://bun.sh/)
- [Git](https://git-scm.com/)
- A modern web browser.

### Installation

Clone the repository:

```
git clone https://github.com/KavyaMC/reading-queue.git
```

Navigate into the project directory:

```
cd reading-queue
```

Install the dependencies:

```
bun install
```

### Running the Development Server

Start the Vite development server:

```
bun run dev
```

Open the local address displayed in the terminal to access the application.

### Building for Production

To generate a production build, run:

```
bun run build
```

### Running ESLint

To check the project for linting issues, run:

```
bun run lint
```

## Project Status

**Currently under development**

This project is being developed incrementally as part of a practical React learning journey.

Features and documentation will be updated as development progresses.

## Learning Objectives

The project provides practical experience with:

* React components and JSX.
* Props and state management.
* Rendering lists and conditional content.
* Event handling and forms.
* React hooks, including `useState`, `useEffect`, and `useRef`.
* Working with external APIs.
* Browser local storage.
* Keyboard accessibility and screen reader support.
* Code quality and accessibility linting.

---

Built as a hands-on React learning project.