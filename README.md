<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# React Study 

## Day 1 - Complete React Practice ✅

- Learned about **JSX** and how it differs from normal HTML.
- Created the **`App.jsx`** component with a simple heading: `Welcome to React Shrabani`.
- Understood how **Babel converts JSX** into `React.createElement()`.
- Added **child component**: `NetflisSeries`.
- Updated `App.jsx` to include **movie card** with:
  - Image
  - Name
  - Rating
  - Summary
- Learned about **React fragments (`<>...</>`)** to wrap multiple elements.
- Used **inline styles** for image sizing (`style={{ width: "40%", height: "40%" }}`).
- Committed & pushed code to GitHub to track progress.
# React Learning - Day 2

## Overview
Today I continued learning React and worked on **dynamic rendering, conditional rendering, and reusable components**. This was part of my personal study project.

## Components Created
1. **NetflixSeries**
   - Displays series details like name, rating, summary, and genre.
   - Uses **functions inside JSX** for conditional rendering.
   - Button shows "Watch Now" or "Not Available" based on age.

2. **Header**
   - Simple reusable header component.

3. **Footer**
   - Simple reusable footer component.

4. **Practices**
   - Demonstrates **conditional rendering** with arrays.
   - Shows "No student Found" if the students array is empty.

## Key Learnings
- Using **variables** and **functions inside JSX**.
- Conditional rendering using `&&` and ternary operators.
- Default export vs named export and **how to combine them**.
- Importing multiple components in `App.jsx`.
- Rendering multiple components dynamically. 

## GitHub
Check the code here: [my-react-app](https://github.com/Shrabani-Mishra/my-react-app)

## Next Steps
- Make NetflixSeries dynamic using props.
- Practice mapping arrays to render multiple series.
- Learn useState for interactive components.

- 

# My React App - Netflix Series Cards Day-3

A responsive Netflix-style React application that displays a list of TV series as interactive cards. Each card shows the series name, rating, genre, cast, description, and a "Watch Now" button.

---

## 🔥 Features

- Fully **responsive layout**:
  - Desktop → 3 cards per row
  - Tablet → 2 cards per row
  - Mobile → 1 card per row
- **Reusable components** using React props
- Dynamic **series data mapping** from JSON
- Professional **card styling**:
  - Hover lift animation
  - Shadow effect
  - Rounded corners
  - Netflix-red themed buttons
- Interactive **Watch Now** buttons with external links
- Easy to extend with more series or components

---

## 🧰 Tech Stack

- **Frontend:** React (JSX)
- **Styling:** CSS (grid layout, responsive media queries)
- **Data:** Local JSON (`seriesData.json`)

---

## 📂 Project Structure

my-react-app/
├── src/
│ ├── api/
│ │ └── seriesData.json
│ ├── components/
│ │ ├── NetflixSeries.jsx
│ │ ├── SeriesCard.jsx
│ │ └── netflixseries.css
│ ├── App.jsx
│ └── main.jsx
├── package.json
└── README.md














>>>>>>> d25869a2bf244d690e96f448dd688287e496cccd
